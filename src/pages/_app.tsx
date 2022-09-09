import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../data/theme';
import { DefaultSEO } from '../components/SEO';
import TypesafeI18n from '../i18n/i18n-react';
import { Locales, Translation } from '../i18n/i18n-types';
import { loadedLocales } from '../i18n/i18n-util';
import { loadFormatters } from '../i18n/i18n-util.async';

function App({ Component, pageProps }: AppProps) {
    const { locale } = pageProps.i18n;
    const { dictionary } = pageProps.i18n;

    loadedLocales[locale as Locales] = dictionary as Translation;
    loadFormatters(locale);

    return (
        <TypesafeI18n locale='nl'>
            <Head>
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#136094' />
                <meta name='msapplication-TileColor' content='#136094' />
                <meta name='theme-color' content='#136094' />
            </Head>
            <DefaultSEO />
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </TypesafeI18n>
    );
}

export default App;
