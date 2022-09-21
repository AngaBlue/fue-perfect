import { Box, FormLabel, RadioGroup, VStack, Radio } from '@chakra-ui/react';
import { LocalizedString } from 'typesafe-i18n';
import { Enum, enumIterable, EnumValue } from '../../util';

interface EnumSelectProps<T extends Enum> {
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
            <RadioGroup value={state} onChange={value => setState(Number(value) as T[keyof T])}>
                <VStack align='left'>
                    {enumIterable(enumerable).map(i => (
                        <Radio key={i} value={i}>
                            {labels[i]()}
                        </Radio>
                    ))}
                </VStack>
            </RadioGroup>
        </Box>
    );
}
