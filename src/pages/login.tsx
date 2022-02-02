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
    useToast
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { SEO } from '../components/SEO';

export default function Index() {
    const router = useRouter();
    const toast = useToast();

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    async function submit() {
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

    return (
        <>
            <SEO />
            <Flex p={4} pt={2} height='100vh' w='full' alignItems='center' justifyContent='center'>
                <Box>
                    <Box>
                        <Center>
                            <Image src='/banner.png' alt='Fue Perfect Banner' height={100} width={313} />
                        </Center>
                    </Box>
                    <Heading textAlign='center' my={8}>
                        Fue Perfect Email App - Log in
                    </Heading>
                    <InputGroup size='md'>
                        <InputLeftElement pointerEvents='none'>
                            <LockIcon color='gray.300' />
                        </InputLeftElement>
                        <Input
                            placeholder='Wachtwoord'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' && submit()}
                        />
                        <InputRightElement width='min-content'>
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide' : 'Show'}
                                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                size='sm'
                                bgColor='transparent'
                                _hover={{ bgColor: 'transparent' }}
                            />
                            <Button
                                onClick={submit}
                                aria-label='Submit'
                                size='md'
                                backgroundColor='brand.500'
                                color=''
                                width={16}
                                flexShrink={0}
                                disabled={!password || loading}
                            >
                                Submit
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Flex>
        </>
    );
}
