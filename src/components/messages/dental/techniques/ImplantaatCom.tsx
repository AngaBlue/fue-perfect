import { Box, Checkbox, FormLabel } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { DentalState, ImplantBrand } from '../data';
import EnumDropdown from '../../../inputs/EnumDropdown';
import { useI18nContext } from '../../../../i18n/i18n-react';

export default function ImplantaatCom({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
    const { LL } = useI18nContext();

    return (
        <Box>
            <FormLabel>Implantaat</FormLabel>
            <Checkbox isChecked={state.implant} onChange={e => setState({ ...state, implant: e.target.checked })}>
                Implantaat
            </Checkbox>
            {state.implant && (
                <>
                    <Box pt={4}>
                        <Checkbox isChecked={state.boneGraft} onChange={e => setState({ ...state, boneGraft: e.target.checked })}>
                            Bone graft
                        </Checkbox>
                    </Box>
                    <Box mt={6}>
                        <EnumDropdown
                            name='Implant Brand'
                            enumerable={ImplantBrand}
                            state={state.implantBrand}
                            setState={implantBrand => setState({ ...state, implantBrand })}
                            labels={LL.DENTAL.IMPLANT_BRAND}
                        />
                    </Box>
                </>
            )}
        </Box>
    );
}
