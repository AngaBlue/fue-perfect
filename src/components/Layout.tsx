import { Box, Button, Checkbox, Divider, Heading, useToast } from '@chakra-ui/react';
import { Dispatch, FunctionComponent, ReactNode, SetStateAction, useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { SpinnerIcon } from '@chakra-ui/icons';
import ContentEditable from 'react-contenteditable';
import Credentials from './Credentials';
import { defaultProvider } from '../data/provider';
import styles from './Layout.module.scss';
import TypesafeI18n, { useI18nContext } from '../i18n/i18n-react';
import DateSelector from './inputs/DateSelector';

interface LayoutProps<State> {
    credentials: {
        state: typeof defaultProvider;
        setState: Dispatch<SetStateAction<typeof defaultProvider>>;
    };
    name: string;
    content: ReactNode;
    form: FunctionComponent<{ state: State; setState: Dispatch<SetStateAction<State>> }>;
    subject: string;
    state: State;
    setState: Dispatch<SetStateAction<State>>;
}

export default function Layout<State>({ credentials, content, form: Form, subject, name, state, setState }: LayoutProps<State>) {
    const { locale } = useI18nContext();

    const [loading, setLoading] = useState({
        sending: false,
        error: null as Error | null
    });
    const toast = useToast({
        position: 'bottom-right',
        isClosable: true,
        duration: 5000
    });

    // Render the content HTML statically to insert into contentEditable
    const [html, setHtml] = useState(ReactDOMServer.renderToStaticMarkup(<TypesafeI18n locale={locale}>{content}</TypesafeI18n>));

    // console.log(html);

    useEffect(
        () => setHtml(ReactDOMServer.renderToStaticMarkup(<TypesafeI18n locale={locale}>{content}</TypesafeI18n>)),
        [content, locale]
    );

    function send() {
        if (loading.sending || Object.values(credentials.state).some(v => !v)) return;

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
            body: JSON.stringify({
                name,
                recipient: credentials.state.recipient,
                subject,
                content: html,
                cc: credentials.state.cc,
                bcc: credentials.state.bcc
            })
        })
            .then(async response => {
                if (response.status === 200) {
                    setLoading({ ...loading, sending: false, error: null });
                    toast({
                        title: 'E-mail Verzonden',
                        description: `E-mail gestuurd naar ${credentials.state.recipient}.`,
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

    const [reminderDate, setReminderDate] = useState(new Date());

    function queueReminder() {
        if (loading.sending || Object.values(credentials.state).some(v => !v)) return;

        setLoading({ ...loading, sending: true, error: null });
        toast({
            title: 'E-mail plannen...',
            description: `E-mail plannen naar ${credentials.state.recipient}...`,
            status: 'info'
        });

        fetch('/api/schedule_mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                recipient: credentials.state.recipient,
                subject: `(herinnering) ${subject}`,
                content: html,
                date: reminderDate.getTime(),
                cc: credentials.state.cc,
                bcc: credentials.state.bcc
            })
        })
            .then(async response => {
                if (response.status === 200) {
                    setLoading({ ...loading, sending: false, error: null });
                    toast({
                        title: 'Geplande e-mail',
                        description: `E-mail gestuurd naar ${credentials.state.recipient}.`,
                        status: 'success'
                    });
                } else {
                    const body = await response.json();
                    setLoading({ ...loading, sending: false, error: body });
                    toast({
                        title: 'Fout',
                        description: `Fout bij het plannen van een e-mail. Probeer het opnieuw.\n${body.name}: ${body.message}`,
                        status: 'error',
                        duration: 20000
                    });
                }
            })
            .catch(err => {
                setLoading({ ...loading, sending: false, error: err });
                toast({
                    title: 'Fout',
                    description: `Fout bij het plannen van een e-mail. Probeer het opnieuw.\n${err.name}: ${err.message}`,
                    status: 'error',
                    duration: 20000
                });
            });
    }

    const [edit, setEdit] = useState(false);

    return (
        <>
            <Credentials {...credentials} />
            <Divider my={4} />
            <Form state={state} setState={setState} />
            <Box display='flex' flexDirection='row' gap={4}>
                <Button onClick={send} backgroundColor='brand.500' mt={4} w={48} position={'unset'}>
                    Stuur e-mail {loading.sending && <SpinnerIcon ml={4} className={styles.spin} />}
                </Button>
                <DateSelector state={reminderDate} setState={setReminderDate} />
                <Button onClick={queueReminder} backgroundColor='brand.500' mt={4} w={48} position={'unset'}>
                    E-mail plannen {loading.sending && <SpinnerIcon ml={4} className={styles.spin} />}
                </Button>
                <Checkbox
                    isChecked={edit}
                    onChange={e => {
                        setEdit(e.target.checked);
                        setHtml(ReactDOMServer.renderToStaticMarkup(<TypesafeI18n locale={locale}>{content}</TypesafeI18n>));
                    }}
                >
                    Activeer Bewerken
                </Checkbox>
            </Box>
            <Divider my={4} />
            <Heading mb={4} as='h2'>
                Email voorbeeld
            </Heading>
            <Box>
                {edit ? (
                    <ContentEditable
                        onChange={e => setHtml(e.currentTarget.innerHTML)}
                        onBlur={e => setHtml(e.currentTarget.innerHTML)}
                        html={html}
                    />
                ) : (
                    content
                )}
            </Box>
        </>
    );
}
