import { Box, FormLabel, Radio, RadioGroup, Select } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { AllOn, AllOn4Options, AllOn6Options, DentalState } from '../data';

import styles from '../content.module.scss';

export default function AllOnCom({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
    // Main
    return (
        <Box>
            <FormLabel mt={6}>Opties</FormLabel>
            <Select
                mt={6}
                onChange={e => {
                    setState({
                        ...state,
                        allOn: e.target.value,
                        AllOnOptions: e.target.value === 'All on 4' ? AllOn4Options[0] : AllOn6Options[0]
                    });
                }}
                value={state.allOn}
            >
                {AllOn.map(v => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ))}
            </Select>
            {state.allOn === 'All on 4' ? (
                <div className={styles.all_on}>
                    <RadioGroup onChange={e => setState({ ...state, AllOnOptions: e })} value={state.AllOnOptions}>
                        {AllOn4Options.map((option, idx) => (
                            <>
                                {idx !== 0 && <br />}
                                <Radio colorScheme='green' value={option}>
                                    {option}
                                </Radio>
                            </>
                        ))}
                    </RadioGroup>
                </div>
            ) : (
                <div className={styles.all_on}>
                    <RadioGroup onChange={e => setState({ ...state, AllOnOptions: e })} value={state.AllOnOptions}>
                        {AllOn6Options.map((option, idx) => (
                            <>
                                {idx !== 0 && <br />}
                                <Radio colorScheme='green' value={option}>
                                    {option}
                                </Radio>
                            </>
                        ))}
                    </RadioGroup>
                </div>
            )}
        </Box>
    );
}
