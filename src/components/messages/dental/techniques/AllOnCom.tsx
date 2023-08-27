import { Box } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { AllOn, AllOnMaterials, DentalState } from '../data';

import EnumSelect from '../../../inputs/EnumSelect';
import { useI18nContext } from '../../../../i18n/i18n-react';

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
                <Box>
                    <EnumSelect
                        name='All On Material'
                        enumerable={AllOnMaterials}
                        state={state.AllOnOptions}
                        setState={AllOnOptions => setState({ ...state, AllOnOptions })}
                        labels={LL.DENTAL.ALL_ON_MATERIAL}
                    />
                </Box>
            )}
        </>
    );
}
