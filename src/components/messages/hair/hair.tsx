import usePersistedState from '../../usePersistedState';
import content from './content';
import { defaultHair } from './data';
import form from './form';

export default function hair() {
    const [state, setState] = usePersistedState('hair-form', defaultHair);

    const fullname = `${state.firstname} ${state.lastname}`;
    const subject = `Offerte + Analyse FUE Haartransplantatie behandeling te Hoofddorp voor dhr ${fullname}`;

    return { subject, ...content(state), form: form({ state, setState }) };
}
