import 'react-datepicker/dist/react-datepicker.css';
import {
    Box,
    Checkbox,
    FormLabel,
    Input,
    InputGroup,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Radio,
    RadioGroup,
    Select,
    SimpleGrid,
    Textarea,
    VStack
} from '@chakra-ui/react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Dispatch, SetStateAction, useEffect } from 'react';
import nl from 'date-fns/locale/nl';
import { Country, Discounts, Gender, Grafts, HairState, HairQuality, Prices, PRPPrices, Technique } from './data';
import styles from './form.module.scss';
import { useI18nContext } from '../../../i18n/i18n-react';
import { enumIterable } from '../../../util';

registerLocale('nl', nl);
setDefaultLocale('nl');

export default function Form({ state, setState }: { state: HairState; setState: Dispatch<SetStateAction<HairState>> }) {
    const { LL } = useI18nContext();

    // Pricing
    useEffect(() => {
        // Indexed by [COUNTRY][SESSION]
        const price = [
            [0, 0],
            [0, 0]
        ];

        // Netherlands
        price[Country.NETHERLANDS][0] =
            state.priceOverride[Country.NETHERLANDS][0] || Prices[Country.NETHERLANDS][Grafts.first.findIndex(g => g === state.grafts[0])];
        price[Country.NETHERLANDS][0] += state.discount;

        if (state.sessions === 2) {
            price[Country.NETHERLANDS][1] =
                state.priceOverride[Country.NETHERLANDS][1] ||
                Prices[Country.NETHERLANDS][Grafts.first.findIndex(g => g === state.grafts[1])];
        }

        // Turkey
        price[Country.TURKEY][0] =
            state.priceOverride[Country.TURKEY][0] || Prices[Country.TURKEY][Grafts.first.findIndex(g => g === state.grafts[0])];
        price[Country.TURKEY][0] += state.discount;
        if (state.sessions === 2) {
            price[Country.TURKEY][1] =
                state.priceOverride[Country.TURKEY][1] || Prices[Country.TURKEY][Grafts.first.findIndex(g => g === state.grafts[1])];
        }

        setState({ ...state, price });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.priceOverride, state.sessions, state.grafts.toString(), state.country, state.discount]);

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
                <RadioGroup value={state.gender} onChange={gender => setState({ ...state, gender: Number(gender) as Gender })}>
                    <VStack align='left'>
                        {enumIterable(Gender).map(g => (
                            <Radio key={g} value={g}>
                                {LL.HAIR.GENDER[g]()}
                            </Radio>
                        ))}
                    </VStack>
                </RadioGroup>
            </Box>
            <Box>
                <FormLabel>Haarinspectie</FormLabel>
                <Checkbox isChecked={state.inspection} onChange={e => setState({ ...state, inspection: e.target.checked })}>
                    Haarinspectie
                </Checkbox>
            </Box>
            <Box>
                <FormLabel>Datum</FormLabel>
                <InputGroup className={styles.datepicker}>
                    <DatePicker
                        selected={new Date(state.date)}
                        onChange={e =>
                            setState({
                                ...state,
                                date: e instanceof Date ? e.getTime() : Date.now()
                            })
                        }
                        dateFormat='PPP'
                    />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Techniek</FormLabel>
                <RadioGroup
                    value={state.technique}
                    onChange={technique => setState({ ...state, technique: Number(technique) as Technique })}
                >
                    <VStack align='left'>
                        {enumIterable(Technique).map(t => (
                            <Radio key={t} value={t}>
                                {LL.HAIR.TECHNIQUE[t]()}
                            </Radio>
                        ))}
                    </VStack>
                </RadioGroup>
            </Box>
            <Box>
                <FormLabel>Klant Land</FormLabel>
                <RadioGroup value={state.country} onChange={country => setState({ ...state, country: Number(country) as Country })}>
                    <VStack align='left'>
                        {enumIterable(Country).map(c => (
                            <Radio key={c} value={c}>
                                {LL.HAIR.COUNTRY[c]()}
                            </Radio>
                        ))}
                    </VStack>
                </RadioGroup>
            </Box>
            <Box>
                <FormLabel>Type Haar</FormLabel>
                <VStack align='left'>
                    {enumIterable(HairQuality).map(q => (
                        <Checkbox
                            isChecked={state.hair.type[q]}
                            key={q}
                            onChange={() => {
                                const type = [...state.hair.type];
                                type[q] = !type[q];
                                setState({ ...state, hair: { ...state.hair, type } });
                            }}
                        >
                            {LL.HAIR.QUALITY[q]()}
                        </Checkbox>
                    ))}
                </VStack>
            </Box>
            <Box>
                <FormLabel>Volume Donor</FormLabel>
                <VStack align='left'>
                    {enumIterable(HairQuality).map(q => (
                        <Checkbox
                            isChecked={state.hair.volume[q]}
                            key={q}
                            onChange={() => {
                                const volume = [...state.hair.volume];
                                volume[q] = !volume[q];
                                setState({ ...state, hair: { ...state.hair, volume } });
                            }}
                        >
                            {LL.HAIR.QUALITY[q]()}
                        </Checkbox>
                    ))}
                </VStack>
            </Box>
            <Box>
                <FormLabel>Sessies</FormLabel>
                <RadioGroup value={state.sessions} onChange={s => setState({ ...state, sessions: Number(s) as typeof state.sessions })}>
                    <VStack align='left'>
                        <Radio value={1}>1 sessie</Radio>
                        <Radio value={2}>2 sessie</Radio>
                    </VStack>
                </RadioGroup>
            </Box>
            <Box>
                <FormLabel>Sessie 1: Grafts</FormLabel>
                <Select
                    value={state.grafts[0]}
                    onChange={e => {
                        const updated = { ...state, grafts: [...state.grafts] };
                        updated.grafts[0] = e.target.value;
                        setState(updated);
                    }}
                >
                    {Grafts.first.map(v => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </Select>
                {state.country !== Country.TURKEY && (
                    <>
                        <FormLabel mt={2}>Prijsoverschrijving: Nederland</FormLabel>
                        <NumberInput
                            min={0}
                            step={50}
                            onChange={(_, v) =>
                                setState({
                                    ...state,
                                    priceOverride: [[v, state.priceOverride[Country.NETHERLANDS][1]], state.priceOverride[Country.TURKEY]]
                                })
                            }
                            precision={0}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </>
                )}
                {state.country !== Country.NETHERLANDS && (
                    <>
                        <FormLabel mt={2}>Prijsoverschrijving: Turkije</FormLabel>
                        <NumberInput
                            min={0}
                            step={50}
                            onChange={(_, v) =>
                                setState({
                                    ...state,
                                    priceOverride: [state.priceOverride[Country.NETHERLANDS], [v, state.priceOverride[Country.TURKEY][1]]]
                                })
                            }
                            precision={0}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </>
                )}
            </Box>
            <Box>
                <FormLabel>Sessie 1: Zones</FormLabel>
                <VStack align='left'>
                    {Array(6)
                        .fill(0)
                        .map((_v, i) => (
                            <Checkbox
                                isChecked={state.zones[0][i]}
                                key={i}
                                onChange={() => {
                                    const updated = {
                                        ...state,
                                        zones: [[...state.zones[0]], state.zones[1]]
                                    };
                                    updated.zones[0][i] = !updated.zones[0][i];
                                    setState(updated);
                                }}
                            >
                                Zone {i + 1}
                            </Checkbox>
                        ))}
                </VStack>
            </Box>
            <Box display={state.sessions === 2 ? 'block' : 'none'}>
                <FormLabel>Sessie 2: Grafts</FormLabel>
                <Select
                    value={state.grafts[1]}
                    onChange={e => {
                        const updated = { ...state, grafts: [...state.grafts] };
                        updated.grafts[1] = e.target.value;
                        setState(updated);
                    }}
                >
                    {Grafts.second.map(v => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </Select>
                {state.country !== Country.TURKEY && (
                    <>
                        <FormLabel mt={2}>Prijsoverschrijving: Nederland</FormLabel>
                        <NumberInput
                            min={0}
                            step={50}
                            onChange={(_, v) =>
                                setState({
                                    ...state,
                                    priceOverride: [[state.priceOverride[Country.NETHERLANDS][0], v], state.priceOverride[Country.TURKEY]]
                                })
                            }
                            precision={0}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </>
                )}
                {state.country !== Country.NETHERLANDS && (
                    <>
                        <FormLabel mt={2}>Prijsoverschrijving: Turkije</FormLabel>
                        <NumberInput
                            min={0}
                            step={50}
                            onChange={(_, v) =>
                                setState({
                                    ...state,
                                    priceOverride: [state.priceOverride[Country.NETHERLANDS], [state.priceOverride[Country.TURKEY][0], v]]
                                })
                            }
                            precision={0}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </>
                )}
            </Box>

            <Box display={state.sessions === 2 ? 'block' : 'none'}>
                <FormLabel>Sessie 2: Zones</FormLabel>
                <VStack align='left'>
                    {Array(6)
                        .fill(0)
                        .map((_v, i) => (
                            <Checkbox
                                isChecked={state.zones[1][i]}
                                key={i}
                                onChange={() => {
                                    const updated = {
                                        ...state,
                                        zones: [state.zones[0], ...[state.zones[1]]]
                                    };
                                    updated.zones[1][i] = !updated.zones[1][i];
                                    setState(updated);
                                }}
                            >
                                Zone {i + 1}
                            </Checkbox>
                        ))}
                </VStack>
            </Box>
            <Box>
                <FormLabel>Korting</FormLabel>
                <RadioGroup value={state.discount} onChange={d => setState({ ...state, discount: Number(d) as typeof state.discount })}>
                    <VStack align='left'>
                        {Discounts.map(v => (
                            <Radio key={v} value={v}>
                                {v < 0 && '-'}€{Math.abs(v)}
                            </Radio>
                        ))}
                    </VStack>
                </RadioGroup>
            </Box>
            <Box>
                <FormLabel>Behandeling data</FormLabel>
                <InputGroup>
                    <Textarea placeholder='-' value={state.notes} onChange={e => setState({ ...state, notes: e.target.value })} />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>Extra Opmerking</FormLabel>
                <InputGroup>
                    <Textarea
                        placeholder='-'
                        value={state.opmerkingNotes}
                        onChange={e => setState({ ...state, opmerkingNotes: e.target.value })}
                    />
                </InputGroup>
            </Box>
            <Box>
                <FormLabel>PRP Behandeling</FormLabel>
                <RadioGroup value={state.prp} onChange={d => setState({ ...state, prp: Number(d) as typeof state.prp })}>
                    <VStack align='left'>
                        {PRPPrices.map((v, i) => (
                            <Radio key={i} value={i + 1}>
                                {i + 1}xPRP Behandeling - €{v}
                            </Radio>
                        ))}
                    </VStack>
                </RadioGroup>
            </Box>
        </SimpleGrid>
    );
}
