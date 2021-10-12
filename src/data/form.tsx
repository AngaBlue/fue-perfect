import { Countries, MailProviders } from "./constants";

export const defaultProvider = {
    provider: MailProviders.GMAIL,
    email: '',
    password: '',
}

export type Provider = typeof defaultProvider;

export const HairType = {
    Slecht: false,
    Normaal: false,
    Goed: false,
    Perfect: false
}

export const Grafts = []

export const defaultCustomer = {
    firstname: '',
    lastname: '',
    email: '',
    date: '',
    country: Countries.NETHERLANDS,
    hair: {
        type: HairType,
        volume: HairType,
    },
    sessions: {
        both: true,
    }
}

export type Customer = typeof defaultCustomer;

export interface Message {
    subject: string;
    content: string;
}
