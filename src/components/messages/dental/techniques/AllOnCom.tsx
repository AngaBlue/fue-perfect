import { Box } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { AllOn, AllOnMaterials, BoneGraftOptions, DentalState, ImplantBrand } from '../data';

import EnumSelect from '../../../inputs/EnumSelect';
import { useI18nContext } from '../../../../i18n/i18n-react';
import EnumDropdown from '../../../inputs/EnumDropdown';

export default function AllOnCom({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
    const { LL } = useI18nContext();

    // Main
    return (
        <>
            <Box>
                <EnumSelect
                    name='All On'
                    enumerable={AllOn}
                    state={state.allOn}
                    setState={allOn => setState({ ...state, allOn })}
                    labels={LL.DENTAL.ALL_ON_TYPE}
                />
            </Box>
            {state.allOn !== AllOn.NONE && (
                <>
                    <Box>
                        <EnumDropdown
                            name='All On Material'
                            enumerable={AllOnMaterials}
                            state={state.AllOnOptions}
                            setState={AllOnOptions => setState({ ...state, AllOnOptions })}
                            labels={LL.DENTAL.ALL_ON_MATERIAL}
                        />
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
                    </Box>
                </>
            )}
        </>
    );
}
