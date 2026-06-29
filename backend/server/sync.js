import pool, { isFallbackModeActive } from './db.js';
import { randomUUID } from 'crypto';

export const SyncEngine = {
  
  terminalId: null,

  async initSync() {
    try {
      if (isFallbackModeActive()) {
        console.warn('[Sync] Fallback DB active. Skipping sync DDL.');
        return;
      }

      await pool.query(`
        CREATE TABLE IF NOT EXISTS event_log (
          id VARCHAR(36) PRIMARY KEY,
          entity_type VARCHAR(50) NOT NULL,
          entity_id VARCHAR(255) NOT NULL,
          operation VARCHAR(20) NOT NULL,
          data JSONB,
          terminal_id VARCHAR(100),
          version_vector JSONB,
          timestamp BIGINT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await pool.query(`
        CREATE TABLE IF NOT EXISTS sync_checkpoint (
          terminal_id VARCHAR(100) PRIMARY KEY,
          last_synced_timestamp BIGINT,
          version_vector JSONB,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await pool.query(`
        CREATE INDEX IF NOT EXISTS idx_event_log_entity
        ON event_log(entity_type, entity_id)
      `);

      await pool.query(`
        CREATE INDEX IF NOT EXISTS idx_event_log_timestamp
        ON event_log(timestamp)
      `);

      console.log('[Sync] Event log and checkpoint tables initialized');
    } catch (err) {
      console.error('[Sync] Init error:', err);
    }
  },

  async logEvent(entityType, entityId, operation, data, terminalId, versionVector) {
    try {
      const id = randomUUID();
      const timestamp = Date.now();
      await pool.query(
        `INSERT INTO event_log 
         (id, entity_type, entity_id, operation, data, terminal_id, version_vector, timestamp) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [id, entityType, entityId, operation, JSON.stringify(data), terminalId, JSON.stringify(versionVector || {}), timestamp]
      );
    } catch (err) {
      console.error('[Sync] Log event error:', err);
    }
  },

  async getChanges(terminalId, lastTimestamp = 0) {
    try {
      let result;
      if (isFallbackModeActive()) {
        result = await pool.query('SELECT * FROM event_log');
        result.rows = (result.rows || []).filter(row => (row.timestamp || 0) > lastTimestamp)
          .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
      } else {
        result = await pool.query(
          `SELECT * FROM event_log 
           WHERE timestamp > $1 
           ORDER BY timestamp ASC`,
          [lastTimestamp]
        );
      }
      return result.rows.map(row => ({
        id: row.id,
        entityType: row.entity_type,
        entityId: row.entity_id,
        operation: row.operation,
        data: row.data,
        terminalId: row.terminal_id,
        versionVector: row.version_vector,
        timestamp: row.timestamp
      }));
    } catch (err) {
      console.error('[Sync] Get changes error:', err);
      return [];
    }
  },

  async updateCheckpoint(terminalId, timestamp, versionVector) {
    try {
      const updatedAt = new Date().toISOString();
      const existing = await pool.query(
        'SELECT terminal_id FROM sync_checkpoint WHERE terminal_id = $1',
        [terminalId]
      );

      if (existing.rows.length > 0) {
        await pool.query(
          `UPDATE sync_checkpoint
           SET last_synced_timestamp = $2, version_vector = $3, updated_at = $4
           WHERE terminal_id = $1`,
          [terminalId, timestamp, JSON.stringify(versionVector || {}), updatedAt]
        );
      } else {
        await pool.query(
          `INSERT INTO sync_checkpoint (terminal_id, last_synced_timestamp, version_vector, updated_at)
           VALUES ($1, $2, $3, $4)`,
          [terminalId, timestamp, JSON.stringify(versionVector || {}), updatedAt]
        );
      }
    } catch (err) {
      console.error('[Sync] Update checkpoint error:', err);
    }
  },

  resolveConflict(local, remote) {
    if (!local || !remote) return remote || local;
    
    const localTime = local.timestamp || 0;
    const remoteTime = remote.timestamp || 0;

    if (remoteTime > localTime) return remote;
    if (localTime > remoteTime) return local;

    return remote;
  },

  deepMerge(local, remote) {
    if (typeof remote !== 'object' || remote === null) return remote;
    if (typeof local !== 'object' || local === null) return remote;

    const merged = { ...local };
    for (const key in remote) {
      if (Array.isArray(remote[key])) {
        merged[key] = remote[key]; 
      } else if (typeof remote[key] === 'object' && remote[key] !== null) {
        merged[key] = this.deepMerge(local[key] || {}, remote[key]);
      } else {
        merged[key] = remote[key];
      }
    }
    return merged;
  }
};

export default SyncEngine;
