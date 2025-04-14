import { Box, FormLabel, Input, InputGroup, SimpleGrid } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import DateSelector from '../../inputs/DateSelector';
import EnumSelect from '../../inputs/EnumSelect';
import { Gender } from '../hair/data';
import { AllOn, type DentalState } from './data';
import AllOnCom from './techniques/AllOnCom';
import ExtractionCom from './techniques/ExtractionCom';
import ImplantaatCom from './techniques/ImplantaatCom';
import ProcedureCom from './techniques/ProcedureCom';

export default function Form({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
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
			<DateSelector state={state.date} setState={date => setState({ ...state, date })} />
			<AllOnCom state={state} setState={setState} />
			{state.allOn === AllOn.NONE && (
				<>
					<ExtractionCom state={state} setState={setState} />
					<ImplantaatCom state={state} setState={setState} />
					<ProcedureCom state={state} setState={setState} />
				</>
			)}
		</SimpleGrid>
	);
}
