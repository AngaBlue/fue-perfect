import { Box, Center, Heading, Text, Flex, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { SEO } from '../components/SEO';

export default function Index() {
    const router = useRouter();
    const colorMode = useColorMode();

    useEffect(() => {
        if (router.query.navigate) router.push(router.query.navigate as string);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query]);

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
                <NextLink href='/api/google' passHref>
                    <GoogleButton type={colorMode.colorMode} />
                </NextLink>
            </Flex>
        </>
    );
}
