import { useState } from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import { CredentialsProps } from '../../Credentials';
import Layout from '../../Layout';
import content from './content';
import { defaultState } from './data';
import form from './form';

export default function DentalMissedCall(props: CredentialsProps) {
    const { LL } = useI18nContext();
    const [state, setState] = useState(defaultState);

    const subject = LL.DENTAL_MISSED_CALL.SUBJECT();

    return (
        <Layout
            name='Dent Perfect'
            credentials={props}
            subject={subject}
            content={content({ state })}
            form={form}
            state={state}
            setState={setState}
        />
    );
}
