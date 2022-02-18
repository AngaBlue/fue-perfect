import { SimpleGrid, Box, FormLabel, InputGroup, Input, RadioGroup, VStack, Radio } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { Gender } from '../hair/data';
import { HairState } from './data';

export default function Form({ state, setState }: { state: HairState; setState: Dispatch<SetStateAction<HairState>> }) {
    return (
        <SimpleGrid columns={[1, null, 2, 3, 4]} spacing={4}>
            <Box>
                <FormLabel>Voornaam Klant</FormLabel>
                <InputGroup>
                    <Input placeholder='John' value={state.firstname} onChange={e => setState({ ...state, firstname: e.target.value })} />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Achternaam Klant</FormLabel>
                <InputGroup>
                    <Input placeholder='Smith' value={state.lastname} onChange={e => setState({ ...state, lastname: e.target.value })} />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Geslacht</FormLabel>
                <RadioGroup value={state.gender} onChange={gender => setState({ ...state, gender })}>
                    <VStack align='left'>
                        {Object.values(Gender).map(c => (
                            <Radio key={c} value={c}>
                                {c}
                            </Radio>
                        ))}
                    </VStack>
                </RadioGroup>
            </Box>
        </SimpleGrid>
    );
}
