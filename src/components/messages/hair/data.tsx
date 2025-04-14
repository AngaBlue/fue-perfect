import { enumLength } from '../../../util';

export enum Country {
	TURKEY = 0,
	NETHERLANDS = 1,
	BOTH = 2
}

export enum Gender {
	MALE = 0,
	FEMALE = 1
}

export enum HairQuality {
	BAD = 0,
	NORMAL = 1,
	GOOD = 2,
	PERFECT = 3
}

export const Grafts = {
	first: ['500-1000', '1000-1500', '1500-2000', '2000-2500', '2500-3000', '3000-3500', '3500-4000'],
	second: ['500-1000', '1000-1500', '1500-2000', '2000-2500', '2500-3000', '3000-3500', '3500-4000']
};

export enum Technique {
	FUE_HAIR = 0,
	DHI_HAIR = 1,
	FUE_DHI_HAIR = 2,
	FUE_BEARD = 3,
	DHI_BEARD = 4
}

export const Prices = {
	[Country.NETHERLANDS]: [2750, 2950, 3250, 3350, 3450, 3550, 3650],
	[Country.TURKEY]: [2150, 2250, 2350, 2450, 2550, 2650, 2750]
};

export const PRPPrices = [0, 275, 250, 225, 200];

export const Discounts = [0, -100, -200, -300];

export const defaultState = {
	firstname: '',
	lastname: '',
	gender: Gender.MALE,
	email: '',
	inspection: false,
	date: new Date(),
	country: Country.NETHERLANDS,
	hair: {
		type: new Array<boolean>(enumLength(HairQuality)).fill(false),
		volume: new Array<boolean>(enumLength(HairQuality)).fill(false)
	},
	sessions: 1 as 1 | 2,
	technique: Technique.FUE_HAIR,
	grafts: [Grafts.first[0], Grafts.first[1]],
	price: [
		[0, 0],
		[0, 0]
	],
	priceOverride: [
		[0, 0],
		[0, 0]
	],
	discount: Discounts[0],
	zones: [[] as boolean[], [] as boolean[]],
	notes: '',
	opmerkingNotes: '',
	prp: 1
};

export type HairState = typeof defaultState;
