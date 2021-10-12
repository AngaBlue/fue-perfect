import { ReactNode } from 'react'
import { HairType } from '../form'
import { MailData } from '../mail'
import styles from './default.module.scss'
import logo from './default/dutch-clinic.png'
import zones from './default/zones.png'

export default function (data: MailData) {
  const { customer } = data
  const fullname = customer.firstname + ' ' + customer.lastname
  const subject = `Offerte + Analyse FUE Haartransplantatie behandeling te Hoofddorp voor dhr ${fullname}`

  const content = (
    <div className={styles.message}>
      <p>Geachte heer {customer.firstname},</p>
      <p>
        Bedankt voor de interesse die u getoond heeft in onze organisatie, u
        heeft op {/* APPT TIME */} een vooronderzoek ondergaan omtrent uw FUE
        Haartransplantatie behandeling.
      </p>
      <p>
        Hieronder vindt u de analyse en de samenvatting terug wat wij hebben
        gesproken.
      </p>
      <p>
        <strong>Rapport medisch team:</strong>
      </p>
      <p>
        <strong>Behandeling</strong>: FUE Haartransplantatie behandeling
        <br />
        <strong>Kwaliteit/ Volume donor</strong>:{' '}
        {(Object.keys(HairType) as Array<keyof typeof HairType>)
          .map<ReactNode>(v => (
            <span
              style={
                customer.hair.volume[v]
                  ? { color: 'orange', textDecoration: 'underline' }
                  : {}
              }
            >
              {v}
            </span>
          ))
          .reduce((prev, curr) => [prev, <span> - </span>, curr])}
        <br />
        <strong>Kwaliteit/ Type haar</strong>:{' '}
        {(Object.keys(HairType) as Array<keyof typeof HairType>)
          .map<ReactNode>(v => (
            <span
              style={
                customer.hair.type[v]
                  ? { color: 'orange', textDecoration: 'underline' }
                  : {}
              }
            >
              {v}
            </span>
          ))
          .reduce((prev, curr) => [prev, <span> - </span>, curr])}
        <br />
        <strong>Aantal grafts eerste sessie</strong>: 3000-3300 grafts
        <br />
        <strong>Aantal grafts tweede sessie</strong>: 1800-2100 grafts (niet
        verplicht)
        <br />
        <strong>Techniek</strong>: FUE Sapphire Haartransplantatie
        <br />
        <strong>Zone</strong>: 1e sessie zone: 2,3,4/ 2e sessie zone: 5,6 (zie
        schema onder)
        <br />
        <strong>Duur behandeling 1e sessie</strong>: 6-7 uur
        <br />
        <strong>Duur behandeling 2e sessie</strong>: 5-6 uur
        <br />
        <strong>Sessie</strong>: 2 sessie behandeling
        <br />
        <strong>Verdoving</strong>: Pijnloos lokaal verdoving
        <br />
        <strong>Behandeling bestemming</strong>: {customer.country}
        <br />
        <strong>Behandeling data</strong>: -<br />
      </p>
      <img src={zones} alt="Zones" style={{ height: '256px' }} />
      <p>
        <strong style={{ color: '#c82613' }}>
          Kosten behandeling 2 sessies in Turkije All-in €4800,-{' '}
        </strong>
        <br />
        <strong style={{ textDecoration: 'underline' }}>
          Eerste sessie: €2500 (€200 korting)
        </strong>
        <br />
        <span style={{ textDecoration: 'underline' }}>
          <strong>Tweede sessie : €2300 </strong>(na min 12 maanden
          genezingstijd, niet verplicht)
        </span>
      </p>
      <p>
        <strong style={{ color: '#c82613' }}>
          Kosten behandeling 2 sessies in Nederland All-in €6750,-{' '}
        </strong>
        <br />
        <strong style={{ textDecoration: 'underline' }}>
          Eerste sessie: €3500 (€200 korting)
        </strong>
        <br />
        <span style={{ textDecoration: 'underline' }}>
          <strong>Tweede sessie : €3250 </strong>(na min 12 maanden
          genezingstijd, niet verplicht)
        </span>
      </p>
      <p>
        <strong>Inhoud All-in pakket Turkije/Istanbul: </strong>
        <ul style={{ marginLeft: '32px' }}>
          <li>Vooronderzoek</li>
          <li>Retour vliegticket met KLM of Turkish Airlines</li>
          <li>3 overnachtingen in Hilton Doubbletree Istanbul</li>
          <li>FUE-haartransplantatie behandeling</li>
          <li>Shampoo, lotion en medicatie</li>
          <li>1x prp behandeling in NL</li>
          <li>4x Nacontrole gedurende 10 maanden</li>
        </ul>
      </p>

      <p>
        Wij hopen u hiermee voldoende te hebben geïnformeerd en kijken uit naar
        uw bevindingen, mocht u vragen of opmerkingen hebben dan horen wij deze
        graag van u.
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
    </div>
  )
  return { subject, content }
}
