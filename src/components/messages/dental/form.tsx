import { Box, FormLabel, Input, InputGroup, SimpleGrid } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { DentalState, ImplantType } from './data';
import { Gender } from '../hair/data';
import { useI18nContext } from '../../../i18n/i18n-react';
import EnumSelect from '../../inputs/EnumSelect';
import DateSelector from '../../inputs/DateSelector';
import EnumDropdown from '../../inputs/EnumDropdown';
import AllOnCom from './techniques/AllOnCom';
import BrugCom from './techniques/BrugCom';
import ImplantaatCom from './techniques/ImplantaatCom';
import SinusliftCom from './techniques/SinusliftCom';
import WortelkanaalCom from './techniques/WortelkanaalCom';

export default function Form({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
    const { LL } = useI18nContext();

    const TechniqueOptions = () => {
        switch (state.type) {
            case ImplantType.WHITE:
                return <ImplantaatCom state={state} setState={setState} />;
            case ImplantType.SCREW:
                return <BrugCom state={state} setState={setState} />;
            case ImplantType.PORCELAIN:
                return <SinusliftCom state={state} setState={setState} />;
            case ImplantType.PURPLE:
                return <AllOnCom state={state} setState={setState} />;
            case ImplantType.ZIRCONIUM:
                return <WortelkanaalCom state={state} setState={setState} />;
            default:
                return null;
        }
    };

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
            <EnumDropdown
                name='Techniek'
                enumerable={ImplantType}
                state={state.type}
                setState={type => setState({ ...state, type })}
                labels={LL.DENTAL.IMPLANT_TYPE}
            />
            <TechniqueOptions />
        </SimpleGrid>
    );
}
