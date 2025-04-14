import { Box, FormLabel, Input, InputGroup, InputLeftElement, SimpleGrid } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';

import { EmailIcon } from '@chakra-ui/icons';
import type { defaultProvider } from '../data/provider';

export interface CredentialsProps {
	state: typeof defaultProvider;
	setState: Dispatch<SetStateAction<typeof defaultProvider>>;
}

export default function Credentials(props: { state: typeof defaultProvider; setState: Dispatch<SetStateAction<typeof defaultProvider>> }) {
	const { state, setState } = props;

	return (
		<SimpleGrid columns={[1, null, 3]} spacing={4}>
			<Box>
				<FormLabel>Emailadres Klant</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents='none'>
						<EmailIcon color='gray.300' />
					</InputLeftElement>
					<Input
						placeholder='example@mail.com'
						type='email'
						value={state.recipient}
						onChange={e => setState({ ...state, recipient: e.target.value })}
					/>
				</InputGroup>
			</Box>
			<Box>
				<FormLabel>CC</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents='none'>
						<EmailIcon color='gray.300' />
					</InputLeftElement>
					<Input placeholder='example@mail.com' type='email' value={state.cc} onChange={e => setState({ ...state, cc: e.target.value })} />
				</InputGroup>
			</Box>
			<Box>
				<FormLabel>BCC</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents='none'>
						<EmailIcon color='gray.300' />
					</InputLeftElement>
					<Input
						placeholder='example@mail.com'
						type='email'
						value={state.bcc}
						onChange={e => setState({ ...state, bcc: e.target.value })}
					/>
				</InputGroup>
			</Box>
		</SimpleGrid>
	);
}
