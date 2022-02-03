import { LockIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
    useColorMode,
    useTheme,
    useToast
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { SEO } from '../components/SEO';

export default function Index() {
    const { colorMode } = useColorMode();
    const router = useRouter();
    const toast = useToast();

    const [loading, setLoading] = useState(false);

    async function onSuccess(res: GoogleLoginResponse | GoogleLoginResponseOffline) {
        console.log(res);

        if (loading) return;
        setLoading(true);

        const response = await fetch('/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password })
        });

        setLoading(false);
        if (response.status === 200) router.push('/');
        else
            toast({
                title: 'Fout',
                description: 'Het wachtwoord dat je hebt ingevoerd was onjuist.',
                status: 'error',
                duration: 5_000
            });
    }

    async function onError(err: { error: string; details: string }) {
        console.log(err);

        toast({
            title: err.error,
            description: err.details,
            status: 'error',
            duration: 15_000
        });
    }

    return (
        <>
            <SEO />
            <Flex p={4} pt={2} height='100vh' w='full' alignItems='center' justifyContent='center' direction='column'>
                <Box>
                    <Box>
                        <Center>
                            <Image src='/banner.png' alt='Fue Perfect Banner' height={100} width={313} />
                        </Center>
                    </Box>
                    <Heading textAlign='center' my={8}>
                        Fue Perfect Email App
                    </Heading>
                    <Text mb={8}>Gebruikers op de witte lijst kunnen inloggen via google.</Text>
                </Box>
                <GoogleLogin
                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                    buttonText='Inloggen met Google'
                    onSuccess={onSuccess}
                    onFailure={onError}
                    theme={colorMode}
                    cookiePolicy={'single_host_origin'}
                    scope='https://mail.google.com'
                />
            </Flex>
        </>
    );
}
