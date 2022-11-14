import { Box, FormLabel, Select } from '@chakra-ui/react';
import { Enum, enumIterable } from '../../util';
import { EnumSelectProps } from './EnumSelect';

export default function EnumDropdown<T extends Enum>({ state, setState, enumerable, labels, name }: EnumSelectProps<T>) {
    return (
        <Box>
            <FormLabel>{name}</FormLabel>
            <Select value={state} onChange={e => setState(Number(e.target.value) as T[keyof T])}>
                {enumIterable(enumerable).map(i => (
                    <option key={i} value={i}>
                        {labels[i]()}
                    </option>
                ))}
            </Select>
        </Box>
    );
}
