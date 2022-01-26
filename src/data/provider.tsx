export const MailProviders = {
    GMAIL: 'Gmail',
    HOTMAIL: 'Hotmail'
};

export const defaultProvider = {
    provider: MailProviders.GMAIL,
    email: '',
    password: '',
    recipient: ''
};

export type ProviderState = typeof defaultProvider;
