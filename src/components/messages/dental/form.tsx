import {
    Box,
    FormLabel,
    Input,
    InputGroup,
    Select,
    SimpleGrid
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { DentalState, implantType, Technic } from './data';
import { Gender } from '../hair/data';
import { useI18nContext } from '../../../i18n/i18n-react';
import EnumSelect from '../../inputs/EnumSelect';
import DateSelector from '../../inputs/DateSelector';

export default function Form({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
    const { LL } = useI18nContext();

    // Select Componentin Selector
    // const SelectTechniek = () => {
    //     switch (state.type) {
    //         case 'Implantaat':
    //             return <ImplantaatCom state={state} setState={setState} />;
    //         case 'Brug':
    //             return <BrugCom state={state} setState={setState} />;
    //         case 'Sinuslift':
    //             return <SinusliftCom state={state} setState={setState} />;
    //         case 'All-on':
    //             return <AllOnCom state={state} setState={setState} />;
    //         case 'Wortelkanaal behandeling':
    //             return <WortelkanaalCom state={state} setState={setState} />;
    //         default:
    //             return null;
    //     }
    // };

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
            <Box>
                <FormLabel>Techniek</FormLabel>
                <Select value={state.type} onChange={e => setState({ ...state, type: Number(e.target.value) })}>
                    {implantType.map((v, key) => (
                        <option key={key} value={key}>
                            {v}
                        </option>
                    ))}
                </Select>
            </Box>
        </SimpleGrid>
    );
}
