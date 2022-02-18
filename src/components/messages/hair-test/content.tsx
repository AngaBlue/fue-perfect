import { HairState } from './data';
import styles from './content.module.scss';
import { Gender } from '../hair/data';

export default function Content(state: HairState) {
    return (
        <div className={styles.message} style={{ fontFamily: 'Sans-Serif' }}>
            <p>
                Geachte {state.gender === Gender.MALE ? 'heer' : 'mevrouw'} {state.firstname} {state.lastname},
            </p>
            <p>Met vriendelijke groeten,</p>
            <p>
                Bedankt voor de interesse die u getoond heeft in onze organisatie, wij hebben uw aanvraag + foto's in goede orde ontvangen.
            </p>
            <p>
                Uw foto&apos;s / toelichting zijn beoordeeld en hieronder vindt u de analyse terug m.b.t uw Haartransplantatie behandeling,
                u bent altijd van harte welkom voor een vrijblijvend consult naar onze kliniek te Hoofddorp!
            </p>
            <p>
                * Aangezien de beoordeling d.m.v. foto&apos;s is vastgesteld, bestaat een kleine kans van afwijking na de definitieve
                onderzoek in onze kliniek.
            </p>
            <p style={{ color: 'grey' }}>
                <strong>A. Şentürk</strong>
            </p>
            <p>
                <i>
                    <strong style={{ color: 'orange' }}>
                        Hoofdweg 848A
                        <br />
                        2132 MC, Hoofddorp
                        <br />
                        020-261 32 00 Nederland
                        <br />
                        038-081 20 4 België
                        <br />
                        06-15 03 87 65 Mobiel
                        <br />
                        Mobiel: 06-15 03 8765 <br />
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
