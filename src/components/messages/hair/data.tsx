import { Countries } from '../../../data/constants';

export const HairType = {
    Slecht: false,
    Normaal: false,
    Goed: false,
    Perfect: false
};

export const Grafts = [];

export const defaultHair = {
    firstname: '',
    lastname: '',
    email: '',
    date: '',
    country: Countries.NETHERLANDS,
    hair: {
        type: HairType,
        volume: HairType
    },
    sessions: {
        both: true
    }
};

export type HairState = typeof defaultHair;
