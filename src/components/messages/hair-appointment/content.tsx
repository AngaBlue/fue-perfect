import { useEffect, useState } from 'react';
import { AppointmentState, Location } from './data';
import styles from './content.module.scss';
import { useI18nContext } from '../../../i18n/i18n-react';
import BoldTranslation from '../../BoldTranslation';
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

            <p>{LL.HAIR_APPOINTMENT.INTRO()}</p>

            <p>
                <BoldTranslation suppressHydrationWarning>
                    {LL.HAIR_APPOINTMENT.APPOINTMENT_TIME(state.date, LL.HAIR_APPOINTMENT.LOCATIONS[state.location]())}
                </BoldTranslation>
            </p>

            <p>
                <span>
                    <b>{LL.HAIR_APPOINTMENT.LOCATION_INTRO()}</b>
                </span>
                <br />
                {state.location === Location.Lelystad && (
                    <>
                        <span>
                            <b>Medi Perfect</b>
                        </span>
                        <br />
                        <span>Zilverparkkade 3</span>
                        <br />
                        <span>8232 WJ Lelystad</span>
                        <br />
                        <span> * U kunt parkeren bij parkeergarage Zilverpark / Reaalhof 101, 8232 VW Lelystad</span>
                        <br />
                        <span> * Tegenover de station lelystad</span>
                    </>
                )}
            </p>

            {/* Footer */}
            <p style={{ color: 'grey' }}>
                <strong>Team Fue Perfect</strong>
            </p>
            {/* Footer */}
            <img src={logo} alt='Fue Perfect' style={{ height: '100px' }} />
            <p>
                <i>
                    <strong style={{ color: 'orange' }}>
                        Zilverparkkade 3, 8232 WJ Lelystad
                        <br />
                        0854 01 81 12 Nederland
                        <br />
                        06-15 03 87 65 Mobiel / Whatsapp
                        <br />
                    </strong>
                    <strong style={{ color: 'cornflowerblue' }}>
                        <a href='mailto:info@fueperfect.com'>info@fueperfect.com</a>
                        <br />
                        <a href='www.fueperfect.com'>www.fueperfect.com</a>
                    </strong>
                </i>
            </p>
        </div>
    );
}
