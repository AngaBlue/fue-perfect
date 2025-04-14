import { Box, FormLabel, InputGroup } from '@chakra-ui/react';
import nl from 'date-fns/locale/nl';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import styles from './DateSelector.module.scss';

registerLocale('nl', nl);
setDefaultLocale('nl');

interface DateSelectorProps {
	state: Date;
	setState: (value: Date) => void;
	showTimeSelector?: boolean;
	label?: string;
}

export default function DateSelector({ state, setState, showTimeSelector, label = 'Datum' }: DateSelectorProps) {
	return (
		<Box suppressHydrationWarning>
			<FormLabel>{label}</FormLabel>
			<InputGroup className={styles.datepicker}>
				<DatePicker
					selected={state}
					onChange={e => setState(e instanceof Date ? e : new Date())}
					dateFormat={showTimeSelector ? 'PPPp' : 'PPP'}
					showTimeSelect={showTimeSelector}
					timeIntervals={15}
				/>
			</InputGroup>
		</Box>
	);
}
