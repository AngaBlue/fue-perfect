import { CredentialsProps } from '../../Credentials';
import Layout from '../../Layout';
import usePersistedState from '../../usePersistedState';
import content from './content';
import { defaultState } from './data';
import form from './form';

export default function dental(props: CredentialsProps) {
    const [state, setState] = usePersistedState('dental-form', defaultState);

    const fullname = `${state.firstname} ${state.lastname}`;
    const subject = `Incomplete Subject: ${fullname}`;

    return <Layout credentials={props} subject={subject} {...content(state)} form={form({ state, setState })} />;
}
