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

            <p>{LL.DENTAL_APPOINTMENT.INTRO()}</p>

            <p>
                <BoldTranslation suppressHydrationWarning>
                    {LL.DENTAL_APPOINTMENT.APPOINTMENT_TIME(state.date, LL.DENTAL_APPOINTMENT.LOCATIONS[state.location]())}
                </BoldTranslation>
            </p>

            <p>
                <span>
                    <b>{LL.DENTAL_APPOINTMENT.LOCATION_INTRO()}</b>
                </span>
                <br />
                {state.location === Location.Lelystad && (
                    <>
                        <span>
                            <b>Dent Perfect</b>
                        </span>
                        <br />
                        <span>Zilverparkkade 3</span>
                        <br />
                        <span>8232 WJ Lelystad</span>
                        <br /><br />
                        <span> * Parkeergarage Zilverpark / Reaalhof 101, 8232 VW Lelystad. 🅿️</span>
                        <br />
                        <span> * Gelegen tegenover station Lelystad. 🚃</span>
                        <br />
                        <span> * Gelieve geen oorbellen te dragen in verband met reflectie op de röntgenfoto. 🚫</span>
                        <br />
                        <span> * <strong>Let op:</strong> Er is een flitspaal bij de ingang van Lelystad, ter hoogte van het BP-benzinestation. 📸</span>
                        <br /><br />
                        <span>Wij kijken uit naar uw komst! Mocht u nog vragen hebben, neem gerust contact met ons op.</span>
                    </>
                )}
            </p>

            {/* Footer */}
            <p>
                <span>Met vriendelijke groet,</span>
                <br />
                <span>Receptie Dent Perfect</span>
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
