import { SimpleGrid, Box, FormLabel, InputGroup, Input, RadioGroup, VStack, Radio, Checkbox } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { Countries } from '../../../data/constants';
import { HairState, HairType } from './data';

export default function form({ state, setState }: { state: HairState; setState: Dispatch<SetStateAction<HairState>> }) {
    return (
        <SimpleGrid columns={4} spacing={10}>
            <Box>
                <FormLabel>Customer First Name</FormLabel>
                <InputGroup>
                    <Input
                        placeholder="John"
                        value={state.firstname}
                        onChange={e => setState({ ...state, firstname: e.target.value })}
                    />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Customer Last Name</FormLabel>
                <InputGroup>
                    <Input
                        placeholder="Smith"
                        value={state.lastname}
                        onChange={e => setState({ ...state, lastname: e.target.value })}
                    />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Customer Country</FormLabel>
                <RadioGroup value={state.country} onChange={country => setState({ ...state, country })}>
                    <VStack align="left">
                        {Object.values(Countries).map(c => (
                            <Radio key={c} value={c}>
                                {c}
                            </Radio>
                        ))}
                    </VStack>
                </RadioGroup>
            </Box>
            <Box>
                <FormLabel>Hair Type</FormLabel>
                <VStack align="left">
                    {(Object.keys(HairType) as Array<keyof typeof HairType>).map(v => (
                        <Checkbox
                            isChecked={state.hair.type[v]}
                            key={v}
                            onChange={() => {
                                // eslint-disable-next-line no-param-reassign
                                state.hair.type[v] = !state.hair.type[v];
                                setState({ ...state });
                            }}
                        >
                            {v}
                        </Checkbox>
                    ))}
                </VStack>
            </Box>
            <Box>
                <FormLabel>Hair Volume</FormLabel>
                <VStack align="left">
                    {(Object.keys(HairType) as Array<keyof typeof HairType>).map(v => (
                        <Checkbox
                            isChecked={state.hair.volume[v]}
                            key={v}
                            onChange={() => {
                                // eslint-disable-next-line no-param-reassign
                                state.hair.volume[v] = !state.hair.volume[v];
                                setState({ ...state });
                            }}
                        >
                            {v}
                        </Checkbox>
                    ))}
                </VStack>
            </Box>
        </SimpleGrid>
    );
}
