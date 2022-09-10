import { ReactNode, useEffect, useState } from 'react';
import merge from 'merge-images';
import { Countries, Gender, HairState, HairType, PRPPrices } from './data';
import styles from './content.module.scss';
import { useI18nContext } from '../../../i18n/i18n-react';
import BoldTranslation from '../../BoldTranslation';
import PriceBreakdown from './PriceBreakdown';

export default function Content(state: HairState) {
    const { LL } = useI18nContext();

    const [zone64, setZone64] = useState('');
    const [logo, setLogo] = useState('');

    useEffect(() => {
        import('!url-loader!./assets/logo.png').then(({ default: img }) => setLogo(img));
    }, []);

    // Head images w/ zones
    useEffect(() => {
        import('./zones').then(({ head, zones }) => {
            const headImages = [head, ...zones[0].filter((_v, i) => state.zones[0][i]), ...zones[1].filter((_v, i) => state.zones[1][i])];
            merge(headImages).then(setZone64);
        });
    }, [state.zones]);

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
            {/* Display hair inspection notice/results */}
            {state.inspection ? (
                <>
                    <p>{LL.HAIR.CONTENT.INSPECTION_1()}</p>
                    <p>{LL.HAIR.CONTENT.INSPECTION_2()}</p>
                    <p>{LL.HAIR.CONTENT.INSPECTION_3()}</p>
                </>
            ) : (
                <>
                    <p>
                        <BoldTranslation>{LL.HAIR.CONTENT.NO_INSPECTION_1({ date: new Date(state.date) })}</BoldTranslation>
                    </p>
                    <p>{LL.HAIR.CONTENT.NO_INSPECTION_2()}</p>
                </>
            )}
            {/* Inspection results */}
            <p>
                <strong>{LL.HAIR.CONTENT.MEDICAL_TEAM_REPORT()}:</strong>
            </p>
            <p>
                <BoldTranslation>{LL.HAIR.CONTENT.TREATMENT()}</BoldTranslation>:
                <br />
                <strong>{LL.HAIR.CONTENT.QUALITY_VOLUME()}</strong>:{' '}
                {(Object.keys(HairType) as Array<keyof typeof HairType>)
                    .map<ReactNode>(v => (
                        <span key={v} style={state.hair.volume[v] ? { color: 'orange', textDecoration: 'underline' } : {}}>
                            {v}
                        </span>
                    ))
                    .reduce((prev, curr, i) => [prev, <span key={i}> - </span>, curr])}
                <br />
                <strong>{LL.HAIR.CONTENT.QUALITY_TYPE()}</strong>:{' '}
                {(Object.keys(HairType) as Array<keyof typeof HairType>)
                    .map<ReactNode>(v => (
                        <span key={v} style={state.hair.type[v] ? { color: 'orange', textDecoration: 'underline' } : {}}>
                            {v}
                        </span>
                    ))
                    .reduce((prev, curr, i) => [prev, <span key={i}> - </span>, curr])}
                <br />
                <BoldTranslation>{LL.HAIR.CONTENT.GRAFT_COUNT({ session: LL.GENERIC.FIRST(), range: state.grafts[0] })}</BoldTranslation>
                <br />
                {state.sessions === 2 && (
                    <>
                        <BoldTranslation>
                            {LL.HAIR.CONTENT.GRAFT_COUNT({ session: LL.GENERIC.SECOND(), range: state.grafts[0] })}
                        </BoldTranslation>{' '}
                        ({LL.HAIR.CONTENT.NOT_REQUIRED()})
                        <br />
                    </>
                )}
                <strong>{LL.HAIR.CONTENT.TECHNIQUE()}</strong>: {state.technique}
                <br />
                <strong>{LL.HAIR.CONTENT.ZONES()}</strong>: 1e sessie zone:{' '}
                {state.zones[0]
                    .map((_v, i) => i + 1)
                    .filter((_v, i) => state.zones[0][i])
                    .join(', ')}{' '}
                (zie schema onder)
                {state.sessions === 2 &&
                    `/ 2e sessie zone: ${state.zones[1]
                        .map((_v, i) => i + 1)
                        .filter((_v, i) => state.zones[1][i])
                        .join(', ')} (zie schema onder)`}
                <br />
                <strong>Duur behandeling 1e sessie</strong>: 6-7 uur
                <br />
                {state.sessions === 2 && (
                    <>
                        <strong>Duur behandeling 2e sessie</strong>: 5-6 uur
                        <br />
                    </>
                )}
                <BoldTranslation>{LL.HAIR.CONTENT.SESSIONS(state.sessions)}</BoldTranslation>
                <br />
                <BoldTranslation>{LL.HAIR.CONTENT.ANESTHESIA()}</BoldTranslation>
                <br />
                <strong>{LL.HAIR.CONTENT.TREATMENT_LOCATION()}</strong>: {state.country}
                <br />
                <strong>{LL.HAIR.CONTENT.TREATMENT_NOTES()}</strong>: {state.notes || '-'}
                <br />
                <strong>{LL.HAIR.CONTENT.EXTRA_REMARKS()}</strong>: {state.opmerkingNotes || '-'}
                <br />
            </p>
            {/* Hair transplant regions image */}
            <img src={zone64} alt='Zones' style={{ maxHeight: '300px' }} />
            {/* Treatment price breakdown */}
            {state.country !== Countries.TURKEY && <PriceBreakdown {...state} />}
            {state.country !== Countries.NETHERLANDS && <PriceBreakdown {...state} />}
            {/* Closing statement */}
            <p>{LL.HAIR.CONTENT.ENDING_COMMENT()}</p>
            <p>{LL.HAIR.CONTENT.KIND_REGARDS()},</p>
            <p style={{ color: 'grey' }}>
                <strong>A.Senturk</strong>
            </p>
            {/* Footer */}
            <img src={logo} alt='Fue Perfect' style={{ height: '100px' }} />
            <p>
                <i>
                    <strong style={{ color: 'orange' }}>
                        Hoofdweg 848A, 2132 MC, Hoofddorp
                        <br />
                        020-261 32 00 Nederland
                        <br />
                        038-081 20 4 België
                        <br />
                        06-15 03 87 65 Mobiel <br />
                    </strong>
                    <strong style={{ color: 'cornflowerblue' }}>
                        <a href='mailto:arkin@fueperfect.com'>arkin@fueperfect.com</a>
                        <br />
                        <a href='www.fueperfect.com'>www.fueperfect.com</a>
                    </strong>
                </i>
            </p>
        </div>
    );
}
