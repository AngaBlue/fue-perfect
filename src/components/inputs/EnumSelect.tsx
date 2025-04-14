import { Box, FormLabel, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import type { LocalizedString } from 'typesafe-i18n';
import { type Enum, type EnumValue, enumIterable } from '../../util';

export interface EnumSelectProps<T extends Enum> {
	state: EnumValue<T>;
	setState: (value: T[keyof T]) => any;
	enumerable: T;
	labels: Record<EnumValue<T>, () => LocalizedString>;
	name: string;
}

export default function EnumSelect<T extends Enum>({ state, setState, enumerable, labels, name }: EnumSelectProps<T>) {
	return (
		<Box>
			<FormLabel>{name}</FormLabel>
			<RadioGroup value={state.toString()} onChange={value => setState(Number(value) as T[keyof T])}>
				<VStack align='left'>
					{enumIterable(enumerable).map(i => (
						<Radio key={i} value={i.toString()}>
							{labels[i]()}
						</Radio>
					))}
				</VStack>
			</RadioGroup>
		</Box>
	);
}
