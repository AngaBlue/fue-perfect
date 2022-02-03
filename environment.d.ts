declare global {
    namespace NodeJS {
        interface ProcessEnv {
            COOKIE_SECRET: string;
            PASSWORD: string;
            NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;
            GOOGLE_REDIRECT_URI: string;
            GOOGLE_REFRESH_TOKEN: string;
        }
    }
}

export {};
