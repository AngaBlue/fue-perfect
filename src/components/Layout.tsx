import { Box, Button, Divider, Heading, useToast } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { SpinnerIcon } from '@chakra-ui/icons';
import FileSaver from 'file-saver';
import dayjs from 'dayjs';
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
        console.log(credentials.state, {
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
        setLoading({ ...loading, sending: false, error: null });
        // Download Log
        const filename = `${credentials.state.recipient} ${dayjs().format('DD-MM-YYYY')}.html`;
        const blob = new Blob([ReactDOMServer.renderToStaticMarkup(content)], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(blob, filename);
        toast({
            title: 'Opgeslagen Bestand',
            description: `Bestand opgeslagen in ${filename}.`,
            status: 'success'
        });
    }

    // Register Send Response
    useEffect(() => {
        // Send Email
        /* window.Main.on('sendMailResponse', (res: Error | string) => {
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
        }); */
    }, []);

    return (
        <>
            <Credentials {...credentials} />
            <Divider my={4} />
            {form}
            <Button
                onClick={send}
                backgroundColor='brand.500'
                mt={4}
                disabled={loading.sending || Object.values(credentials.state).some(v => !v) || undefined}
                w={48}
            >
                Stuur e-mail {loading.sending && <SpinnerIcon ml={4} className={styles.spin} />}
            </Button>
            <Divider my={4} />
            <Heading mb={4} as='h2'>
                Email voorbeeld
            </Heading>
            <Box>{content}</Box>
        </>
    );
}
