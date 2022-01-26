import { CredentialsProps } from '../../Credentials';
import Layout from '../../Layout';
import usePersistedState from '../../usePersistedState';
import content from './content';
import { defaultState } from './data';
import form from './form';

export default function hair(props: CredentialsProps) {
    const [state, setState] = usePersistedState('hair-form2', defaultState);

    const fullname = `${state.firstname} ${state.lastname}`;
    const subject = `Offerte + Analyse FUE Haartransplantatie behandeling te Hoofddorp voor dhr ${fullname}`;

    return <Layout credentials={props} subject={subject} {...content(state)} form={form({ state, setState })} />;
}
