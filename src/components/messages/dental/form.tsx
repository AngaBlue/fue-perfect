import { SimpleGrid, Box, FormLabel, InputGroup, Input, Select, Textarea } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { City, DentalState, Prosthesis, Reason, Surgery } from './data';

export default function form({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
    return (
        <SimpleGrid columns={4} spacing={10}>
            <Box>
                <FormLabel>Voornaam Klant</FormLabel>
                <InputGroup>
                    <Input placeholder="John" value={state.firstname} onChange={e => setState({ ...state, firstname: e.target.value })} />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Achternaam Klant</FormLabel>
                <InputGroup>
                    <Input placeholder="Smith" value={state.lastname} onChange={e => setState({ ...state, lastname: e.target.value })} />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Locatie Behandeling</FormLabel>
                <Select
                    value={state.city}
                    onChange={e => {
                        setState({ ...state, city: e.target.value });
                    }}
                >
                    {City.map(v => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </Select>
            </Box>
            <Box>
                <FormLabel>Reden Gebitsbehandeling</FormLabel>
                <Select
                    value={state.reason}
                    onChange={e => {
                        setState({ ...state, reason: e.target.value });
                    }}
                >
                    {Reason.map(v => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </Select>
            </Box>
            <Box>
                <FormLabel>Behandeling data</FormLabel>
                <InputGroup>
                    <Textarea placeholder="-" value={state.treatments} onChange={e => setState({ ...state, treatments: e.target.value })} />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Chirurgie</FormLabel>
                <Select
                    value={state.surgery}
                    onChange={e => {
                        setState({ ...state, surgery: e.target.value });
                    }}
                >
                    {Surgery.map(v => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </Select>
            </Box>
            <Box>
                <FormLabel>Prothese</FormLabel>
                <Select
                    value={state.prosthesis}
                    onChange={e => {
                        setState({ ...state, prosthesis: e.target.value });
                    }}
                >
                    {Prosthesis.map(v => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </Select>
            </Box>
        </SimpleGrid>
    );
}
