import { Box, Button, Divider, Heading, useToast } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { SpinnerIcon } from '@chakra-ui/icons';
import Credentials from './Credentials';
import styles from './Layout.module.scss';
import { defaultProvider } from '../data/provider';

interface LayoutProps {
    credentials: { state: typeof defaultProvider; setState: Dispatch<SetStateAction<typeof defaultProvider>> };
    content: JSX.Element;
    form: JSX.Element;
    subject: string;
    images: any[];
}

export default function Layout({ credentials, content, form, subject, images }: LayoutProps) {
    const [loading, setLoading] = useState({
        sending: false,
        error: null as Error | null
    });
    const toast = useToast({
        position: 'bottom-right',
        isClosable: true,
        duration: 5000
    });

    async function send() {
        window.Main.sendMail(credentials.state, {
            recipient: credentials.state.recipient,
            subject,
            content: ReactDOMServer.renderToStaticMarkup(content),
            images
        });
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
        <>
            <Credentials {...credentials} />
            <Divider my={4} />
            {form}
            <Button
                onClick={send}
                backgroundColor="brand.500"
                mt={4}
                disabled={loading.sending || Object.values(credentials.state).some(v => !v)}
                w={48}
            >
                Stuur e-mail {loading.sending && <SpinnerIcon ml={4} className={styles.spin} />}
            </Button>
            <Divider my={4} />
            <Heading mb={4} as="h2">
                Email voorbeeld
            </Heading>
            <Box>{content}</Box>
        </>
    );
}
