import { Box, FormLabel, Input, InputGroup, SimpleGrid } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { AllOn, AttachmentMaterial, AttachmentType, DentalState } from './data';
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
import { ImplantType } from './templates';
import ExtractionCom from './techniques/ExtractionCom';

export default function Form({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
    const { LL } = useI18nContext();

    const TechniqueOptions = () => {
        switch (state.type) {
            case ImplantType.SCREW:
                return <BrugCom state={state} setState={setState} />;
            case ImplantType.PORCELAIN:
                return <SinusliftCom state={state} setState={setState} />;
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
            <AllOnCom state={state} setState={setState} />
            {state.allOn === AllOn.NONE && (
                <>
                    <ExtractionCom state={state} setState={setState} />
                    <ImplantaatCom state={state} setState={setState} />
                    <Box>
                        <EnumDropdown
                            name='Attachment'
                            enumerable={AttachmentType}
                            state={state.attachmentType}
                            setState={attachmentType => setState({ ...state, attachmentType })}
                            labels={LL.DENTAL.ATTACHMENT_TYPE}
                        />

                        <EnumDropdown
                            name='Material'
                            enumerable={AttachmentMaterial}
                            state={state.attachemntMaterial}
                            setState={attachemntMaterial => setState({ ...state, attachemntMaterial })}
                            labels={LL.DENTAL.ATTACHMENT_MATERIAL}
                        />
                    </Box>
                </>
            )}
            <TechniqueOptions />
        </SimpleGrid>
    );
}
