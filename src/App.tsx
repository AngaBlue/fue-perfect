import { Box, Button, Divider, Heading, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { SpinnerIcon } from '@chakra-ui/icons';
import usePersistedState from './components/usePersistedState';
import { defaultProvider } from './data/provider';
import messages from './data/messages';
import Credentials from './components/Credentials';
import styles from './App.module.scss';

export default function App() {
    const [provider, setProvider] = usePersistedState('provider', defaultProvider);
    const [loading, setLoading] = useState({ sending: false, error: null as Error | null });
    const toast = useToast({ position: 'bottom-right', isClosable: true, duration: 5000 });

    const message = messages[0]();

    async function send() {
        window.Main.sendMail(
            provider,
            {
                recipient: provider.recipient,
                subject: message.subject,
                content: ReactDOMServer.renderToStaticMarkup(message.content),
                images: message.images
            }
        );
        // UI
        setLoading({ ...loading, sending: true, error: null });
        toast({
            title: 'Sending Email',
            description: 'Sending email to client...',
            status: 'info'
        });
    }

    // Register Send Response
    useEffect(() => {
        // Send Email
        window.Main.on('sendMailResponse', (res: Error | string) => {
            if (typeof res === 'string') {
                // Success
                setLoading({ ...loading, sending: false });
                toast({
                    title: 'E-mail Verzonden',
                    description: `E-mail gestuurd naar ${res}.`,
                    status: 'success'
                });
            } else {
                // Error
                setLoading({ ...loading, sending: false, error: res });
                toast({
                    title: 'Fout',
                    description: `Fout bij het verzenden van e-mail, probeer het opnieuw.\n${res.name}: ${res.message}`,
                    status: 'error',
                    duration: 20000
                });
            }
        });
        // Save PDF
        window.Main.on('saveFile', (res: Error | string) => {
            if (typeof res === 'string') {
                // Success
                setLoading({ ...loading, sending: false });
                toast({
                    title: 'Opgeslagen Bestand',
                    description: `Bestand opgeslagen in ${res}.`,
                    status: 'success'
                });
            } else {
                // Error
                setLoading({ ...loading, sending: false, error: res });
                toast({
                    title: 'Bestandsfout',
                    description: `Fout bij het opslaan van bestand.\n${res.name}: ${res.message}`,
                    status: 'error',
                    duration: 20000
                });
            }
        });
        window.Main.on('debug', console.log);
    }, []);

    return (
        <Box p={4} pt={2}>
            <Heading mb={4}>Fue Perfect Email App</Heading>
            <Credentials state={provider} setState={setProvider} />
            <Divider my={4} />
            {message.form}
            <Button onClick={send} backgroundColor="brand.500" mt={4} disabled={loading.sending || Object.values(provider).some(v => !v)} w={48}>
                Stuur e-mail {loading.sending && <SpinnerIcon ml={4} className={styles.spin} />}
            </Button>
            <Divider my={4} />
            <Heading mb={4} as="h2">
                Email voorbeeld
            </Heading>
            <Box>{message.content}</Box>
        </Box>
    );
}
