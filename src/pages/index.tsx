import { Box, Flex, Heading, Spacer, Select } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import usePersistedState from '../components/usePersistedState';
import messages from '../data/messages';
import { defaultProvider } from '../data/provider';
import authorize from '../util/authorize';

export default function Index() {
    const [template, setTemplate] = usePersistedState('template', { index: 0 });
    const [state, setState] = usePersistedState('provider', defaultProvider);
    const Component = messages[template.index].component;

    return (
        <>
            <Box p={4} pt={2}>
                <Flex>
                    <Heading mb={4}>Fue Perfect Email App</Heading>
                    <Spacer />
                    <Select value={template.index} width='max-content' onChange={e => setTemplate({ index: Number(e.target.value) })}>
                        {messages.map((m, i) => (
                            <option value={i} key={i}>
                                {m.name}
                            </option>
                        ))}
                    </Select>
                </Flex>
                {<Component {...{ state, setState }} />}
            </Box>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
    const props = {};
    if (!authorize(ctx.req.cookies))
        return {
            redirect: {
                destination: '/login',
                permanent: false
            },
            props
        };
    return { props };
};
