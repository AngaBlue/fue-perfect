import { Box, Checkbox, FormLabel } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { BoneGraftOptions, DentalState, ImplantBrand } from '../data';
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
                    <Box mt={6}>
                        <EnumDropdown
                            name='Bone Graft'
                            enumerable={BoneGraftOptions}
                            state={state.boneGraft}
                            setState={boneGraft => setState({ ...state, boneGraft })}
                            labels={LL.DENTAL.BONE_GRAFT}
                        />
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
