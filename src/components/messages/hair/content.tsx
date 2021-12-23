import { ReactNode, useEffect, useState } from 'react';
import merge from 'merge-images';
import { format } from 'date-fns';
import nl from 'date-fns/locale/nl';
import { Countries, HairState, HairType } from './data';
import styles from './content.module.scss';
import logo from './assets/dutch-clinic.inline.png';
import { head, zones } from './zones';

export default function content(state: HairState) {
    const [zone64, setZone64] = useState(head as string);
    const images = [logo, zone64];
    const headImages: string[] = [head, ...zones[0].filter((_v, i) => state.zones[0][i]), ...zones[1].filter((_v, i) => state.zones[1][i])];

    useEffect(() => {
        async function createImage() {
            setZone64(await merge(headImages));
        }
        createImage();
    }, [headImages]);

    return {
        images,
        content: (
            <div className={styles.message} style={{ fontFamily: 'Sans-Serif' }}>
                <p>Geachte heer {state.firstname},</p>
                <p>
                    Bedankt voor de interesse die u getoond heeft in onze organisatie, u heeft op{' '}
                    <strong>{format(state.date, 'PPP', { locale: nl })}</strong> een vooronderzoek ondergaan omtrent uw FUE
                    Haartransplantatie behandeling.
                </p>
                <p>Hieronder vindt u de analyse en de samenvatting terug wat wij hebben gesproken.</p>
                <p>
                    <strong>Rapport medisch team:</strong>
                </p>
                <p>
                    <strong>Behandeling</strong>: FUE Haartransplantatie behandeling
                    <br />
                    <strong>Kwaliteit/ Volume donor</strong>:{' '}
                    {(Object.keys(HairType) as Array<keyof typeof HairType>)
                        .map<ReactNode>(v => (
                            <span key={v} style={state.hair.volume[v] ? { color: 'orange', textDecoration: 'underline' } : {}}>
                                {v}
                            </span>
                        ))
                        .reduce((prev, curr, i) => [prev, <span key={i}> - </span>, curr])}
                    <br />
                    <strong>Kwaliteit/ Type haar</strong>:{' '}
                    {(Object.keys(HairType) as Array<keyof typeof HairType>)
                        .map<ReactNode>(v => (
                            <span key={v} style={state.hair.type[v] ? { color: 'orange', textDecoration: 'underline' } : {}}>
                                {v}
                            </span>
                        ))
                        .reduce((prev, curr, i) => [prev, <span key={i}> - </span>, curr])}
                    <br />
                    <strong>Aantal grafts eerste sessie</strong>: {state.grafts[0]} grafts
                    <br />
                    {state.sessions === 2 && (
                        <>
                            <strong>Aantal grafts tweede sessie</strong>: {state.grafts[1]} grafts (niet verplicht)
                            <br />
                        </>
                    )}
                    <strong>Techniek</strong>: {state.technique}
                    <br />
                    <strong>Zone</strong>: 1e sessie zone:{' '}
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
                    <strong>Sessie</strong>: {state.sessions} sessie behandeling
                    <br />
                    <strong>Verdoving</strong>: Pijnloos lokaal verdoving
                    <br />
                    <strong>Behandeling bestemming</strong>: {state.country}
                    <br />
                    <strong>Behandeling data</strong>: {state.notes || '-'}
                    <br />
                </p>
                <img src={zone64} alt="Zones" style={{ height: '300px' }} />
                {state.country === Countries.TURKEY && (
                    <p>
                        <strong style={{ color: '#c82613' }}>
                            Kosten behandeling 2 sessies in Turkije All-in €{state.price.reduce((a, b) => a + b, 0)},-{' '}
                        </strong>
                        <br />
                        <strong style={{ textDecoration: 'underline' }}>
                            Eerste sessie: €{state.price[0]} {state.discount && `(€${Math.abs(state.discount)} korting)`}
                        </strong>
                        <br />
                        {state.sessions === 2 && (
                            <span style={{ textDecoration: 'underline' }}>
                                <strong>Tweede sessie : €{!!state.price[1]} </strong>(na min 12 maanden genezingstijd, niet verplicht)
                            </span>
                        )}
                    </p>
                )}
                {state.country === Countries.NETHERLANDS && (
                    <p>
                        <strong style={{ color: '#c82613' }}>
                            Kosten behandeling 2 sessies in Nederland All-in €{state.price.reduce((a, b) => a + b, 0)},-{' '}
                        </strong>
                        <br />
                        <strong style={{ textDecoration: 'underline' }}>
                            Eerste sessie: €{state.price[0]} {!!state.discount && `(€${Math.abs(state.discount)} korting)`}
                        </strong>
                        <br />
                        {state.sessions === 2 && (
                            <span style={{ textDecoration: 'underline' }}>
                                <strong>Tweede sessie : €{state.price[1]} </strong>(na min 12 maanden genezingstijd, niet verplicht)
                            </span>
                        )}
                    </p>
                )}
                <p>
                    <strong>Inhoud All-in pakket Turkije/Istanbul: </strong>
                </p>
                <ul style={{ marginLeft: '32px' }}>
                    <li>Vooronderzoek</li>
                    <li>Retour vliegticket met KLM of Turkish Airlines</li>
                    <li>3 overnachtingen in Hilton Doubbletree Istanbul</li>
                    <li>FUE-haartransplantatie behandeling</li>
                    <li>Shampoo, lotion en medicatie</li>
                    <li>1x prp behandeling in NL</li>
                    <li>4x Nacontrole gedurende 10 maanden</li>
                </ul>
                <p>
                    Wij hopen u hiermee voldoende te hebben geïnformeerd en kijken uit naar uw bevindingen, mocht u vragen of opmerkingen
                    hebben dan horen wij deze graag van u.
                </p>
                <p>Met vriendelijke groeten,</p>
                <p style={{ color: 'grey' }}>
                    <strong>
                        Arkın Şentürk
                        <br />
                        Hair Transplant Specialist and Coördinator
                    </strong>
                </p>
                <img src={logo} alt="Dutch Clinic" />
                <p>
                    <i>
                        <strong style={{ color: 'orange' }}>
                            Hoofdweg 848A
                            <br />
                            2132 MC, Hoofddorp
                            <br />
                            Tel: 020-214 20 33
                            <br />
                            Mobiel: 06-15 03 8765 <br />
                        </strong>
                        <strong style={{ color: 'cornflowerblue' }}>
                            <a href="www.dutchclinic.com">www.dutchclinic.com</a>
                            <br />
                            <a href="mailto:arkin@dutchclinic.com">arkin@dutchclinic.com</a>
                        </strong>
                    </i>
                </p>
            </div>
        )
    };
}
