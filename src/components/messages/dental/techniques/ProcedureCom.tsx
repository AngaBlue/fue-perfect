import { Box } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { useI18nContext } from '../../../../i18n/i18n-react';
import EnumDropdown from '../../../inputs/EnumDropdown';
import { AttachmentMaterial, AttachmentType, type DentalState } from '../data';

export default function ProcedureCom({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
	const { LL } = useI18nContext();
	return (
		<Box>
			<Box>
				<EnumDropdown
					name='Attachment'
					enumerable={AttachmentType}
					state={state.attachmentType}
					setState={attachmentType => setState({ ...state, attachmentType })}
					labels={LL.DENTAL.ATTACHMENT_TYPE}
				/>
			</Box>
			<Box pt={4}>
				<EnumDropdown
					name='Material'
					enumerable={AttachmentMaterial}
					state={state.attachemntMaterial}
					setState={attachemntMaterial => setState({ ...state, attachemntMaterial })}
					labels={LL.DENTAL.ATTACHMENT_MATERIAL}
				/>
			</Box>
		</Box>
	);
}
