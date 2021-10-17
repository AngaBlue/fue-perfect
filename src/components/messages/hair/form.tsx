import {
    SimpleGrid,
    Box,
    FormLabel,
    InputGroup,
    Input,
    RadioGroup,
    VStack,
    Radio,
    Checkbox,
    Select
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Countries, defaultState, Discounts, Grafts, HairState, HairType, Prices } from './data';

export default function form({ state, setState }: { state: HairState; setState: Dispatch<SetStateAction<HairState>> }) {
    // Pricing
    useEffect(() => {
        if (state.country !== Countries.BOTH) {
            const price = [Prices[state.country][Grafts.first.findIndex(g => g === state.grafts[0])] + state.discount, 0];
            if (state.sessions === 2)
                price[1] = Prices[state.country][Grafts.first.findIndex(g => g === state.grafts[1])];
            else price[1] = 0;
            setState({ ...state, price });
        }
    }, [state.grafts, state.country, state.discount]);

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
                <FormLabel>Date</FormLabel>
                <InputGroup>
                    <Input
                        placeholder="donderdag 12 augustus"
                        value={state.date}
                        onChange={e => setState({ ...state, date: e.target.value })}
                    />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Techniek</FormLabel>
                <InputGroup>
                    <Input
                        placeholder={defaultState.technique}
                        value={state.technique}
                        onChange={e => setState({ ...state, technique: e.target.value })}
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
                <FormLabel>Type haar</FormLabel>
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
                <FormLabel>Volume donor</FormLabel>
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
            <Box>
                <FormLabel>Sessie</FormLabel>
                <RadioGroup
                    value={state.sessions}
                    onChange={s => setState({ ...state, sessions: Number(s) as typeof state.sessions })}
                >
                    <VStack align="left">
                        <Radio value={1}>1 sessie</Radio>
                        <Radio value={2}>2 sessie</Radio>
                    </VStack>
                </RadioGroup>
            </Box>
            <Box>
                <FormLabel>Grafts: Sessie 1</FormLabel>
                <Select
                    value={state.grafts[0]}
                    onChange={e => {
                        // eslint-disable-next-line no-param-reassign
                        state.grafts[0] = e.target.value;
                        setState({ ...state, grafts: [...state.grafts] });
                    }}
                >
                    {Grafts.first.map(v => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </Select>
            </Box>
            {state.sessions === 2 && (
                <Box>
                    <FormLabel>Grafts: Sessie 2</FormLabel>
                    <Select
                        value={state.grafts[1]}
                        onChange={e => {
                            // eslint-disable-next-line no-param-reassign
                            state.grafts[1] = e.target.value;
                            setState({ ...state, grafts: [...state.grafts] });
                        }}
                    >
                        {Grafts.second.map(v => (
                            <option key={v} value={v}>
                                {v}
                            </option>
                        ))}
                    </Select>
                </Box>
            )}
            <Box>
                <FormLabel>Discount</FormLabel>
                <RadioGroup
                    value={state.discount}
                    onChange={d => setState({ ...state, discount: Number(d) as typeof state.discount })}
                >
                    <VStack align="left">
                        {Discounts.map(v => (
                            <Radio key={v} value={v}>
                                {v < 0 && '-'}€{Math.abs(v)}
                            </Radio>
                        ))}
                    </VStack>
                </RadioGroup>
            </Box>
        </SimpleGrid>
    );
}