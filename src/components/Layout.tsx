import { Box, Button, Divider, Heading, useToast } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';
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
}

export default function Layout({ credentials, content, form, subject }: LayoutProps) {
    const [loading, setLoading] = useState({
        sending: false,
        error: null as Error | null
    });
    const toast = useToast({
        position: 'bottom-right',
        isClosable: true,
        duration: 5000
    });

    function send() {
        if (loading.sending || Object.values(credentials.state).some(v => !v)) return;
        const html = ReactDOMServer.renderToStaticMarkup(content);

        setLoading({ ...loading, sending: true, error: null });
        toast({
            title: 'E-mail verzenden...',
            description: `E-mail sturen naar ${credentials.state.recipient}...`,
            status: 'info'
        });

        fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ credentials: credentials.state, subject, content: html })
        })
            .then(async response => {
                if (response.status === 200) {
                    setLoading({ ...loading, sending: false, error: null });
                    toast({
                        title: 'E-mail Verzonden',
                        description: `E-mail gestuurd naar ${credentials.state.recipient}.`,
                        status: 'success'
                    });
                    // Download Log
                    const filename = `${credentials.state.recipient} ${dayjs().format('DD-MM-YYYY')}.html`;
                    const blob = new Blob([html], { type: 'text/plain;charset=utf-8' });
                    FileSaver.saveAs(blob, filename);
                    toast({
                        title: 'Opgeslagen Bestand',
                        description: `Bestand opgeslagen in ${filename}.`,
                        status: 'success'
                    });
                } else {
                    const body = await response.json();
                    setLoading({ ...loading, sending: false, error: body });
                    toast({
                        title: 'Fout',
                        description: `Fout bij het verzenden van e-mail, probeer het opnieuw.\n${body.name}: ${body.message}`,
                        status: 'error',
                        duration: 20000
                    });
                }
            })
            .catch(err => {
                setLoading({ ...loading, sending: false, error: err });
                toast({
                    title: 'Fout',
                    description: `Fout bij het verzenden van e-mail, probeer het opnieuw.\n${err.name}: ${err.message}`,
                    status: 'error',
                    duration: 20000
                });
            });
    }

    return (
        <>
            <Credentials {...credentials} />
            <Divider my={4} />
            {form}
            <Button onClick={send} backgroundColor='brand.500' mt={4} w={48}>
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
