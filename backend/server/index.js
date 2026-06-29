import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import pool, { initDb } from "./db.js";
import SyncEngine from "./sync.js";
import { randomUUID } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Serve the built frontend (dist) and JS files
const distPath = path.resolve(__dirname, "..", "..", "frontend", "dist");
const jsPath = path.resolve(__dirname, "..", "..", "frontend", "js");

app.use("/js", express.static(jsPath));
app.use(express.static(distPath));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "POS backend is running" });
});

app.post("/api/login", async (req, res) => {
  const { pin } = req.body;
  try {
    const result = await pool.query("SELECT id, email, role, is_admin as isAdmin FROM users WHERE pin = $1", [pin]);
    if (result.rows.length === 0) {
      return res.status(401).json({ ok: false, error: "Invalid PIN" });
    }
    return res.json({ ok: true, user: result.rows[0] });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ ok: false, error: "Internal server error" });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM orders ORDER BY timestamp DESC");
    const orders = result.rows.map(row => ({
      id: row.id,
      orderNumber: row.order_number || row.ordernumber,
      timestamp: row.timestamp,
      total: parseInt(row.total || 0, 10),
      paymentType: row.payment_type || row.paymenttype,
      splitPayments: typeof row.split_payments === 'string' ? JSON.parse(row.split_payments) : row.split_payments,
      items: typeof row.items === 'string' ? JSON.parse(row.items) : row.items,
      cashier: row.cashier,
      guestCount: row.guest_count || row.guestcount,
      discount: parseInt(row.discount || 0, 10)
    }));
    res.json({ ok: true, orders });
  } catch (err) {
    console.error("Fetch orders error:", err);
    res.status(500).json({ ok: false, error: "Failed to fetch orders" });
  }
});

app.post("/api/orders", async (req, res) => {
  const { id, orderNumber, timestamp, total, paymentType, items, splitPayments, cashier, guestCount, discount } = req.body;
  try {
    await pool.query(
      `INSERT INTO orders (id, order_number, timestamp, total, payment_type, items, split_payments, cashier, guest_count, discount) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       ON CONFLICT (id) DO UPDATE SET 
       total = EXCLUDED.total, items = EXCLUDED.items, payment_type = EXCLUDED.payment_type`,
      [
        id, orderNumber, timestamp || new Date().toISOString(), total, paymentType, 
        JSON.stringify(items || []), 
        splitPayments ? JSON.stringify(splitPayments) : null, 
        cashier, guestCount, discount || 0
      ]
    );
    res.status(201).json({ ok: true, id });
  } catch (err) {
    console.error("Save order error:", err);
    res.status(500).json({ ok: false, error: "Failed to save order" });
  }
});

app.get("/api/returns", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM returns ORDER BY created_at DESC");
    const returns = result.rows.map(row => ({
      id: row.id,
      orderId: row.order_id,
      orderNumber: row.order_number,
      amount: parseInt(row.amount || 0, 10),
      paymentType: row.payment_type,
      splitPayments: typeof row.split_payments === 'string' ? JSON.parse(row.split_payments) : row.split_payments,
      items: typeof row.items === 'string' ? JSON.parse(row.items) : row.items,
      reason: row.reason,
      cashier: row.cashier,
      status: row.status,
      fiscalSign: row.fiscal_sign,
      createdAt: row.created_at
    }));
    res.json({ ok: true, returns });
  } catch (err) {
    console.error("Fetch returns error:", err);
    res.status(500).json({ ok: false, error: "Failed to fetch returns" });
  }
});

app.post("/api/returns", async (req, res) => {
  const { id, orderId, orderNumber, amount, paymentType, splitPayments, items, reason, cashier, status, fiscalSign, createdAt } = req.body;
  if (!Number.isFinite(Number(amount)) || Number(amount) <= 0) {
    return res.status(400).json({ ok: false, error: "Invalid amount" });
  }
  try {
    const newId = id || randomUUID();
    await pool.query(
      `INSERT INTO returns 
       (id, order_id, order_number, amount, payment_type, split_payments, items, reason, cashier, status, fiscal_sign, created_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [
        newId,
        orderId || null,
        orderNumber || null,
        amount,
        paymentType || null,
        splitPayments ? JSON.stringify(splitPayments) : null,
        items ? JSON.stringify(items) : null,
        reason || null,
        cashier || null,
        status || 'pending',
        fiscalSign || null,
        createdAt || new Date().toISOString()
      ]
    );
    res.status(201).json({ ok: true, id: newId });
  } catch (err) {
    console.error("Save return error:", err);
    res.status(500).json({ ok: false, error: "Failed to save return" });
  }
});

app.get("/api/menu", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM menu");
    res.json({ ok: true, items: result.rows });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to fetch menu" });
  }
});

app.post("/api/menu", async (req, res) => {
  const { name, price, category, mxik_code, emoji, photo } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO menu (name, price, category, mxik_code, emoji, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, price, category, mxik_code, emoji, photo || null]
    );
    res.status(201).json({ ok: true, item: result.rows[0] });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Failed to save menu item" });
  }
});

app.get("/api/guests", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM guests");
    
    const guests = result.rows.map(g => ({
      phone: g.phone,
      name: g.name,
      points: parseInt(g.points || 0, 10),
      totalSpent: parseInt(g.total_spent !== undefined ? g.total_spent : (g.totalspent || 0), 10),
      tier: g.tier || 'basic'
    }));
    res.json({ ok: true, guests });
  } catch (err) {
    console.error("Fetch guests error:", err);
    res.status(500).json({ ok: false, error: "Failed to fetch guests" });
  }
});

app.post("/api/guests", async (req, res) => {
  const { phone, name, points, tier } = req.body;
  const totalSpent = req.body.totalSpent !== undefined ? req.body.totalSpent : req.body.total_spent;
  try {
    await pool.query(
      `INSERT INTO guests (phone, name, points, total_spent, tier) 
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (phone) DO UPDATE SET 
       name = EXCLUDED.name, points = EXCLUDED.points, total_spent = EXCLUDED.total_spent, tier = EXCLUDED.tier`,
      [phone, name, points || 0, totalSpent || 0, tier || 'basic']
    );
    res.json({ ok: true });
  } catch (err) {
    console.error("Save guest error:", err);
    res.status(500).json({ ok: false, error: "Failed to save guest" });
  }
});

app.delete("/api/guests/:phone", async (req, res) => {
  const { phone } = req.params;
  try {
    await pool.query("DELETE FROM guests WHERE phone = $1", [phone]);
    res.json({ ok: true });
  } catch (err) {
    console.error("Delete guest error:", err);
    res.status(500).json({ ok: false, error: "Failed to delete guest" });
  }
});

app.get("/api/warehouse", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM warehouse ORDER BY name ASC");
    res.json({ ok: true, ingredients: result.rows });
  } catch (err) {
    console.error("Fetch warehouse error:", err);
    res.status(500).json({ ok: false, error: "Failed to fetch warehouse" });
  }
});

app.post("/api/warehouse", async (req, res) => {
  const { id, name, unit, cost, stock } = req.body;
  try {
    if (id) {
      await pool.query(
        `INSERT INTO warehouse (id, name, unit, cost, stock) 
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (id) DO UPDATE SET 
         name = EXCLUDED.name, unit = EXCLUDED.unit, cost = EXCLUDED.cost, stock = EXCLUDED.stock`,
        [id, name, unit, cost, stock || 0]
      );
    } else {
      await pool.query(
        "INSERT INTO warehouse (name, unit, cost, stock) VALUES ($1, $2, $3, $4)",
        [name, unit, cost, stock || 0]
      );
    }
    res.json({ ok: true });
  } catch (err) {
    console.error("Save ingredient error:", err);
    res.status(500).json({ ok: false, error: "Failed to save ingredient" });
  }
});

app.delete("/api/warehouse/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM warehouse WHERE id = $1", [id]);
    res.json({ ok: true });
  } catch (err) {
    console.error("Delete ingredient error:", err);
    res.status(500).json({ ok: false, error: "Failed to delete ingredient" });
  }
});

app.post("/api/warehouse/deduct", async (req, res) => {
  const { items } = req.body;
  try {
    await pool.query("BEGIN");
    for (const item of items) {
      await pool.query(
        "UPDATE warehouse SET stock = stock - $1 WHERE name = $2",
        [item.quantity, item.name]
      );
    }
    await pool.query("COMMIT");
    res.json({ ok: true });
  } catch (err) {
    await pool.query("ROLLBACK");
    console.error("Deduct stock error:", err);
    res.status(500).json({ ok: false, error: "Failed to deduct stock" });
  }
});

app.get("/api/tech_cards", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tech_cards");
    const techCards = result.rows.map(row => ({
      menuItemId: row.menu_item_id,
      ingredients: typeof row.ingredients === 'string' ? JSON.parse(row.ingredients) : row.ingredients
    }));
    res.json({ ok: true, tech_cards: techCards });
  } catch (err) {
    console.error("Fetch tech cards error:", err);
    res.status(500).json({ ok: false, tech_cards: [] });
  }
});

app.post("/api/tech_cards", async (req, res) => {
  const { menuItemId, ingredients } = req.body;
  try {
    await pool.query(
      `INSERT INTO tech_cards (menu_item_id, ingredients) 
       VALUES ($1, $2)
       ON CONFLICT (menu_item_id) DO UPDATE SET 
       ingredients = EXCLUDED.ingredients`,
      [menuItemId, JSON.stringify(ingredients || [])]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error("Save tech card error:", err);
    res.status(500).json({ ok: false, error: "Failed to save tech card" });
  }
});

app.get("/api/suppliers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM suppliers ORDER BY name ASC");
    res.json({ ok: true, suppliers: result.rows });
  } catch (err) {
    console.error("Fetch suppliers error:", err);
    res.status(500).json({ ok: false, error: "Failed to fetch suppliers" });
  }
});

app.post("/api/suppliers", async (req, res) => {
  const { id, name, phone, email, address, inn } = req.body;
  if (!name) {
    return res.status(400).json({ ok: false, error: "Name is required" });
  }
  try {
    const newId = id || randomUUID();
    await pool.query(
      `INSERT INTO suppliers (id, name, phone, email, address, inn) 
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (id) DO UPDATE SET
         name = EXCLUDED.name,
         phone = EXCLUDED.phone,
         email = EXCLUDED.email,
         address = EXCLUDED.address,
         inn = EXCLUDED.inn`,
      [newId, name, phone || null, email || null, address || null, inn || null]
    );
    res.status(201).json({ ok: true, id: newId });
  } catch (err) {
    console.error("Save supplier error:", err);
    res.status(500).json({ ok: false, error: "Failed to save supplier" });
  }
});

app.delete("/api/suppliers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM suppliers WHERE id = $1", [id]);
    res.json({ ok: true });
  } catch (err) {
    console.error("Delete supplier error:", err);
    res.status(500).json({ ok: false, error: "Failed to delete supplier" });
  }
});

app.get("/api/stock_movements", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM stock_movements ORDER BY created_at DESC");
    const movements = result.rows.map(row => ({
      ...row,
      items: typeof row.items === 'string' ? JSON.parse(row.items) : row.items
    }));
    res.json({ ok: true, movements });
  } catch (err) {
    console.error("Fetch stock movements error:", err);
    res.status(500).json({ ok: false, error: "Failed to fetch stock movements" });
  }
});

app.post("/api/stock_movements", async (req, res) => {
  const { id, type, supplierId, fromLocation, toLocation, items, note, createdBy, createdAt } = req.body;
  if (!type || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ ok: false, error: "Invalid movement data" });
  }

  try {
    for (const item of items) {
      const ingredientId = item.ingredientId || item.id;
      const qty = Number(item.quantity ?? item.qty ?? item.amount ?? 0);
      const actualQty = Number(item.actualQty ?? item.actual ?? item.quantity ?? item.qty ?? item.amount ?? 0);

      const ingRes = await pool.query("SELECT * FROM warehouse WHERE id = $1", [ingredientId]);
      if (!ingRes.rows.length) {
        return res.status(400).json({ ok: false, error: "Ingredient not found" });
      }
      const ing = ingRes.rows[0];
      const currentStock = Number(ing.stock || 0);
      let newStock = currentStock;
      let newCost = Number(ing.cost || 0);

      if (type === 'receipt') {
        if (!Number.isFinite(qty) || qty <= 0) {
          return res.status(400).json({ ok: false, error: "Invalid quantity for receipt" });
        }
        const itemCost = Number(item.cost ?? ing.cost ?? 0);
        const totalCost = currentStock * newCost + qty * itemCost;
        newStock = currentStock + qty;
        newCost = newStock > 0 ? Math.round(totalCost / newStock) : newCost;
      } else if (type === 'inventory') {
        if (!Number.isFinite(actualQty) || actualQty < 0) {
          return res.status(400).json({ ok: false, error: "Invalid actual quantity for inventory" });
        }
        newStock = actualQty;
      } else if (type === 'transfer') {
        if (!Number.isFinite(qty) || qty <= 0) {
          return res.status(400).json({ ok: false, error: "Invalid quantity for transfer" });
        }
        const fromLoc = (fromLocation || 'main').toString().trim().toLowerCase();
        const toLoc = (toLocation || '').toString().trim().toLowerCase();
        const fromMain = fromLoc === 'main';
        const toMain = toLoc === 'main';
        if (fromMain && !toMain) {
          newStock = currentStock - qty;
        } else if (!fromMain && toMain) {
          newStock = currentStock + qty;
        }
      }

      if (newStock < 0) {
        return res.status(400).json({ ok: false, error: "Not enough stock" });
      }

      await pool.query(
        "UPDATE warehouse SET stock = $1, cost = $2 WHERE id = $3",
        [newStock, newCost, ingredientId]
      );
    }

    const movementId = id || randomUUID();
    const when = createdAt || new Date().toISOString();
    await pool.query(
      `INSERT INTO stock_movements 
       (id, type, supplier_id, from_location, to_location, items, note, created_at, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        movementId,
        type,
        supplierId || null,
        fromLocation || null,
        toLocation || null,
        JSON.stringify(items),
        note || null,
        when,
        createdBy || null
      ]
    );

    res.status(201).json({ ok: true, id: movementId });
  } catch (err) {
    console.error("Save stock movement error:", err);
    res.status(500).json({ ok: false, error: "Failed to save stock movement" });
  }
});

app.post("/api/sync/init", async (req, res) => {
  const { terminalId } = req.body;
  try {
    await SyncEngine.initSync();

    const result = await pool.query(
      "SELECT last_synced_timestamp FROM sync_checkpoint WHERE terminal_id = $1",
      [terminalId]
    );
    
    const lastSync = result.rows[0]?.last_synced_timestamp || 0;
    res.json({ ok: true, lastSyncTimestamp: lastSync, terminalId });
  } catch (err) {
    console.error("[Sync/Init] Error:", err);
    res.status(500).json({ ok: false, error: "Failed to init sync" });
  }
});

app.get("/api/sync/changes", async (req, res) => {
  const { since, terminalId } = req.query;
  const sinceTimestamp = parseInt(since || "0", 10);
  
  try {
    const changes = await SyncEngine.getChanges(terminalId, sinceTimestamp);
    res.json({ ok: true, changes });
  } catch (err) {
    console.error("[Sync/Changes] Error:", err);
    res.status(500).json({ ok: false, error: "Failed to get changes" });
  }
});

app.post("/api/sync/push", async (req, res) => {
  const { terminalId, events } = req.body;
  
  try {
    for (const event of events || []) {
      await SyncEngine.logEvent(
        event.entityType,
        event.entityId,
        event.operation,
        event.data,
        terminalId,
        event.versionVector
      );
    }

    if (events && events.length > 0) {
      const lastEvent = events[events.length - 1];
      await SyncEngine.updateCheckpoint(terminalId, lastEvent.timestamp, lastEvent.versionVector);
    }
    
    res.json({ ok: true, synced: events?.length || 0 });
  } catch (err) {
    console.error("[Sync/Push] Error:", err);
    res.status(500).json({ ok: false, error: "Failed to push changes" });
  }
});

app.post("/api/sync/pull", async (req, res) => {
  const { terminalId, since } = req.body;
  const sinceTimestamp = since || 0;
  
  try {
    const changes = await SyncEngine.getChanges(terminalId, sinceTimestamp);
    res.json({ ok: true, changes });
  } catch (err) {
    console.error("[Sync/Pull] Error:", err);
    res.status(500).json({ ok: false, error: "Failed to pull changes" });
  }
});

app.get("/api/sync/status/:terminalId", async (req, res) => {
  const { terminalId } = req.params;
  
  try {
    const result = await pool.query(
      "SELECT * FROM sync_checkpoint WHERE terminal_id = $1",
      [terminalId]
    );
    
    if (result.rows.length === 0) {
      return res.json({ ok: true, status: "not_synced" });
    }
    
    const row = result.rows[0];
    res.json({
      ok: true,
      status: "synced",
      lastSyncedAt: row.updated_at,
      lastTimestamp: row.last_synced_timestamp
    });
  } catch (err) {
    console.error("[Sync/Status] Error:", err);
    res.status(500).json({ ok: false, error: "Failed to get sync status" });
  }
});

async function startServer() {
  await initDb();
  await SyncEngine.initSync();
  app.listen(PORT, () => {
    console.log(`===== POS Terminal =====`);
    console.log(`API:   http://localhost:${PORT}`);
    console.log(`UI:    http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop`);
    if (process.send) process.send('ready');
  });
}

startServer();
