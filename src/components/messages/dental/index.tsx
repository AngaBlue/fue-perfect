import { useState } from 'react';
import { CredentialsProps } from '../../Credentials';
import Layout from '../../Layout';
import Content from './content';
import { defaultState } from './data';
import Form from './form';

export default function Dental(props: CredentialsProps) {
    const [state, setState] = useState(defaultState);

    const fullname = `${state.firstname} ${state.lastname}`;
    const subject = `Incomplete Subject: ${fullname}`;

    return (
        <Layout name='Dent Perfect' credentials={props} subject={subject} content={Content} form={Form} state={state} setState={setState} />
    );
}
