const Warehouse = {
    ingredients: [],
    techCards: [],
    suppliers: [],
    stockMovements: [],

    async init() {
        this.ingredients = await DB.getAll('ingredients');
        this.techCards = await DB.getAll('tech_cards');
        this.suppliers = await DB.getAll('suppliers');
        this.stockMovements = await DB.getAll('stock_movements');

    },

    async deductStockForOrder(orderItems) {
        let deductionLog = [];

        for (const item of orderItems) {
            const card = this.techCards.find(tc => tc.menuItemId === item.id);
            if (card) {
                for (const req of card.ingredients) {
                    const ing = this.ingredients.find(i => i.id === req.ingredientId);
                    if (ing) {
                        const amountToDeduct = req.amount * item.quantity;
                        ing.stock -= amountToDeduct;
                        await DB.put('ingredients', ing);
                        deductionLog.push(`Списано ${amountToDeduct.toFixed(2)}${ing.unit} ${ing.name} для "${item.name}" x${item.quantity}`);
                    }
                }
            }
        }
        
        if (deductionLog.length > 0) {
            await DB.logAction('STOCK_DEDUCTION', deductionLog.join('\n'), POS.state.cashierName);
        }
        
        return true;
    },

    async restockForReturn(orderItems) {
        let restockLog = [];

        for (const item of orderItems) {
            const card = this.techCards.find(tc => tc.menuItemId === item.id);
            if (card) {
                for (const req of card.ingredients) {
                    const ing = this.ingredients.find(i => i.id === req.ingredientId);
                    if (ing) {
                        const amountToAdd = req.amount * item.quantity;
                        ing.stock += amountToAdd;
                        await DB.put('ingredients', ing);
                        restockLog.push(`Возврат ${amountToAdd.toFixed(2)}${ing.unit} ${ing.name} для "${item.name}" x${item.quantity}`);
                    }
                }
            }
        }

        if (restockLog.length > 0) {
            await DB.logAction('STOCK_RESTOCK', restockLog.join('\n'), POS.state.cashierName);
        }

        return true;
    },

    getFoodCost(menuItemId) {
        const card = this.techCards.find(tc => tc.menuItemId === menuItemId);
        if (!card) return 0;

        let totalCost = 0;
        for (const req of card.ingredients) {
            const ing = this.ingredients.find(i => i.id === req.ingredientId);
            if (ing) {
                totalCost += (req.amount * ing.cost);
            }
        }
        return totalCost;
    }
};

window.Warehouse = Warehouse;
