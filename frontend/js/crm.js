const CRM = {
    guests: [],

    async init() {
        this.guests = await DB.getAll('guests');

        if (this.guests.length === 0) {
            await this.seedDemoData();
        }
    },

    async seedDemoData() {
        const demoGuests = [
            { phone: '+998901234567', name: 'Тимур', points: 15000, totalSpent: 450000, tier: 'silver' },
            { phone: '+998931112233', name: 'Мадина', points: 50000, totalSpent: 1200000, tier: 'gold' }
        ];

        for (const g of demoGuests) {
            await DB.put('guests', g);
        }
        
        this.guests = await DB.getAll('guests');
    },

    async findGuestByPhone(phone) {
        return await DB.get('guests', phone);
    },

    async registerOrUpdateGuest(phone, name, amountSpent, pointsEarned, pointsSpent) {
        let guest = await this.findGuestByPhone(phone);
        
        if (!guest) {
            guest = {
                phone: phone,
                name: name || 'Гость',
                points: 0,
                totalSpent: 0,
                tier: 'basic'
            };
        }

        guest.totalSpent += amountSpent;
        guest.points += pointsEarned;
        guest.points -= pointsSpent;

        if (guest.totalSpent >= 1000000) guest.tier = 'gold';
        else if (guest.totalSpent >= 300000) guest.tier = 'silver';

        await DB.put('guests', guest);
        this.guests = await DB.getAll('guests');
        return guest;
    },

    calculateBonusAccrual(amount, tier) {
        let percent = 0.03; 
        if (tier === 'silver') percent = 0.05; 
        if (tier === 'gold') percent = 0.10; 
        return Math.floor(amount * percent);
    }
};

window.CRM = CRM;
