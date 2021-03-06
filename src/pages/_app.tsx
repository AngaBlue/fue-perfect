import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../data/theme';
import { DefaultSEO } from '../components/SEO';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
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
        </>
    );
}

export default App;
