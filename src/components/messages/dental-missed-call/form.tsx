import 'react-datepicker/dist/react-datepicker.css';
import { Box, FormLabel, Input, InputGroup, SimpleGrid } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import EnumSelect from '../../inputs/EnumSelect';
import { Gender } from '../hair/data';
import type { AppointmentState } from './data';

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
			<Box>
				<FormLabel>Telefoonnummer</FormLabel>
				<InputGroup>
					<Input
						placeholder='06 20 87 45 18'
						value={state.phonenumber}
						onChange={e => setState({ ...state, phonenumber: e.target.value })}
					/>
				</InputGroup>
			</Box>
		</SimpleGrid>
	);
}
