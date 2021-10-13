import { Box, Button, ChakraProvider, Divider, Heading, StylesProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { usePersistedState } from './components/usePersistedState';
import { defaultProvider } from './data/form';
import theme from './theme';
import messages from './data/messages';
import Credentials from './components/Credentials';

export default function App() {
    const [provider, setProvider] = usePersistedState('provider', defaultProvider);

    const message = messages[0]();

    async function send() {
        provider.email += `@${provider.provider.toLowerCase()}.com`;
        window.Main.sendMail(provider, {
            recipient: provider.recipient,
            subject: message.subject,
            content: ReactDOMServer.renderToStaticMarkup(message.content),
            images: message.images
        });
    }
    useEffect(() => {
        window.Main.on('sendMailResponse', (...args: any) => {
            console.log(args);
        });
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <StylesProvider value={{}}>
                <Box p={4} pt={2}>
                    <Heading mb={4}>Custom Mail App</Heading>
                    <Credentials state={provider} setState={setProvider} />
                    <Divider my={4} />
                    {message.form}
                    <Button onClick={send} backgroundColor="teal.500" mt={4}>
                        Send e-mail
                    </Button>
                    <Divider my={4} />
                    <Heading mb={4} as="h2">
                        Email Preview
                    </Heading>
                    <Box>{message.content}</Box>
                </Box>
            </StylesProvider>
        </ChakraProvider>
    );
}
