import { MailProviders } from './constants';

export const defaultProvider = {
    provider: MailProviders.GMAIL,
    email: '',
    password: '',
    recipient: ''
};

export type Provider = typeof defaultProvider;

export interface Message {
    subject: string;
    content: string;
    images: string[];
}
