import { Box, Checkbox, FormLabel } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import type { DentalState } from '../data';

export default function ExtractionCom({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
	return (
		<Box>
			<FormLabel>Extraction</FormLabel>
			<Checkbox isChecked={state.extraction} onChange={e => setState({ ...state, extraction: e.target.checked })}>
				Extraction
			</Checkbox>
		</Box>
	);
}
