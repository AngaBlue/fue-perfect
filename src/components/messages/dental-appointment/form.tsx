import 'react-datepicker/dist/react-datepicker.css';
import { Box, FormLabel, Input, InputGroup, SimpleGrid } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import DateSelector from '../../inputs/DateSelector';
import EnumSelect from '../../inputs/EnumSelect';
import { Gender } from '../hair/data';
import { type AppointmentState, Location } from './data';

export default function Form({ state, setState }: { state: AppointmentState; setState: Dispatch<SetStateAction<AppointmentState>> }) {
	const { LL } = useI18nContext();

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
			<EnumSelect
				name='Geslacht'
				enumerable={Gender}
				state={state.gender}
				setState={gender => setState({ ...state, gender })}
				labels={LL.HAIR.GENDER}
			/>
			<DateSelector state={state.date} setState={date => setState({ ...state, date })} showTimeSelector />
			<EnumSelect
				name='Plaats'
				enumerable={Location}
				state={state.location}
				setState={location => setState({ ...state, location })}
				labels={LL.DENTAL_APPOINTMENT.LOCATIONS}
			/>
		</SimpleGrid>
	);
}
