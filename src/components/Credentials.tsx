import { EmailIcon, ExternalLinkIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Box,
    IconButton,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Link,
    Radio,
    RadioGroup,
    SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { defaultProvider, MailProviders } from '../data/provider';

export interface CredentialsProps {
    state: typeof defaultProvider;
    setState: Dispatch<SetStateAction<typeof defaultProvider>>;
}

export default function Credentials(props: { state: typeof defaultProvider; setState: Dispatch<SetStateAction<typeof defaultProvider>> }) {
    const { state, setState } = props;
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <SimpleGrid columns={4} spacing={10}>
                <Box>
                    <FormLabel>Email Verstrekker</FormLabel>
                    <RadioGroup value={state.provider} onChange={p => setState({ ...state, provider: p })}>
                        <Stack>
                            {Object.values(MailProviders).map(p => (
                                <Radio key={p} value={p}>
                                    {p}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                </Box>
                <Box>
                    <FormLabel>Emailadres</FormLabel>
                    <InputGroup size="md">
                        <InputLeftElement pointerEvents="none">
                            <EmailIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                            placeholder={`example@${state.provider.toLocaleLowerCase()}.com`}
                            type="email"
                            value={state.email}
                            onChange={e => setState({ ...state, email: e.target.value })}
                        />
                    </InputGroup>
                </Box>
                <Box>
                    <FormLabel>Wachtwoord</FormLabel>
                    <InputGroup size="md">
                        <InputLeftElement pointerEvents="none">
                            <LockIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            value={state.password}
                            onChange={e => setState({ ...state, password: e.target.value })}
                        />
                        <InputRightElement>
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide' : 'Show'}
                                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                size="sm"
                                bgColor="transparent"
                                _hover={{ bgColor: 'transparent' }}
                            />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box>
                    <FormLabel>Emailadres Klant</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <EmailIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                            placeholder="example@mail.com"
                            type="email"
                            value={state.recipient}
                            onChange={e => setState({ ...state, recipient: e.target.value })}
                        />
                    </InputGroup>
                </Box>
            </SimpleGrid>
            <Box h={8} py={2}>
                {state.provider === MailProviders.GMAIL && (
                    <Text>
                        Zorg ervoor dat u onveilige toepassingen hebt ingeschakeld in uw{' '}
                        <Link href="https://myaccount.google.com/lesssecureapps" isExternal color="teal.500">
                            google-instellingen <ExternalLinkIcon mx="2px" />
                        </Link>
                        .
                    </Text>
                )}
            </Box>
        </>
    );
}
