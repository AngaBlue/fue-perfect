import { Box, FormLabel, InputGroup } from '@chakra-ui/react';
import React from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import nl from 'date-fns/locale/nl';
import styles from './DateSelector.module.scss';

registerLocale('nl', nl);
setDefaultLocale('nl');

interface DateSelectorProps {
    state: Date;
    setState: (value: Date) => any;
}

export default function DateSelector({ state, setState }: DateSelectorProps) {
    return (
        <Box>
            <FormLabel>Datum</FormLabel>
            <InputGroup className={styles.datepicker}>
                <DatePicker selected={state} onChange={e => setState(e instanceof Date ? e : new Date())} dateFormat='PPP' />
            </InputGroup>
        </Box>
    );
}
