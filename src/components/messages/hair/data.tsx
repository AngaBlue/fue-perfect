export const Countries = {
    NETHERLANDS: 'Nederland',
    TURKEY: 'Turkije',
    BOTH: 'Nederland/Turkije'
};

export const HairType = {
    Slecht: false,
    Normaal: false,
    Goed: false,
    Perfect: false
};

export const Grafts = {
    first: ['500-1000', '1000-1500', '1500-2000', '2000-2500', '2500-3000', '3000-3500', '3500-4000'],
    second: ['500-1000', '1000-1500', '1500-2000', '2000-2500', '2500-3000', '3000-3500', '3500-4000']
};

export const Techniques = ['FUE Haatransplantatie', 'DHI Haartransplantatie', 'FUE Baardtransplantatie', 'DHI Baardtransplantatie'];

export const Prices = {
    [Countries.NETHERLANDS]: [2750, 2950, 3250, 3350, 3450, 3550, 3650],
    [Countries.TURKEY]: [2150, 2250, 2350, 2450, 2550, 2650, 2750]
};

export const Discounts = [0, -100, -200, -300];

export const defaultState = {
    firstname: '',
    lastname: '',
    email: '',
    date: '',
    country: Countries.NETHERLANDS,
    hair: {
        type: HairType,
        volume: HairType
    },
    sessions: 1 as 1 | 2,
    technique: Techniques[0],
    grafts: [Grafts.first[0], Grafts.first[1]],
    price: [0, 0],
    discount: Discounts[0],
    zones: [[] as boolean[], [] as boolean[]],
    notes: ''
};

export type HairState = typeof defaultState;
