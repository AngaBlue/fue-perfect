import { useEffect, useState } from 'react';
import { AppointmentState } from './data';
import styles from './content.module.scss';
import { useI18nContext } from '../../../i18n/i18n-react';
import { Gender } from '../hair/data';

export default function Content({ state }: { state: AppointmentState }) {
    const { LL } = useI18nContext();

    const [logo, setLogo] = useState('');

    useEffect(() => {
        import('!url-loader!./assets/logo.png').then(({ default: img }) => setLogo(img));
    }, []);

    return (
        <div className={styles.message} style={{ fontFamily: 'Sans-Serif' }}>
            {/* Introduction */}
            <p>
                {LL.GENERIC.DEAR({
                    title: state.gender === Gender.MALE ? LL.GENERIC.MR() : LL.GENERIC.MRS(),
                    name: state.firstname,
                    surname: state.lastname
                })}
                ,
            </p>

            <p>{LL.DENTAL_MISSED_CALL.INTRO()}</p>

            <p>{LL.DENTAL_MISSED_CALL.MISSED_CALL_LINE(state.phonenumber)}</p>

            {/* Footer */}
            <p>
                <span>{LL.DENTAL_MISSED_CALL.KIND_REGARDS()},</span>
                <br />
                <span>Team Dent Perfect</span>
            </p>
            <img src={logo} alt='Fue Perfect' style={{ height: '75px' }} />
            <p>
                <i>
                    <strong style={{ color: 'orange' }}>
                        Zilverparkkade 3, 8232 WJ Lelystad.
                        <br />
                        085-401 81 12
                        <br />
                        06-15 03 87 65 Mobiel
                        <br />
                    </strong>
                    <strong style={{ color: 'cornflowerblue' }}>
                        <a href='mailto:info@dentperfect.nl'>info@dentperfect.nl</a>
                        <br />
                        <a href='www.dentperfect.nl'>www.dentperfect.nl</a>
                    </strong>
                </i>
            </p>
        </div>
    );
}
