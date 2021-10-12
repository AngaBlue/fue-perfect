import { ReactNode } from 'react'
import { HairType } from '../form'
import { MailData } from '../mail'

export default function (data: MailData) {
  const { customer } = data
  const fullname = customer.firstname + ' ' + customer.lastname
  const subject = `Offerte + Analyse FUE Haartransplantatie behandeling te Hoofddorp voor dhr ${fullname}`
  console.log(customer)
  const content = (
    <div>
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
            <span style={customer.hair.volume[v] ? { color: 'orange', textDecoration: 'underline' } : {}}>
              {v}
            </span>
          ))
          .reduce((prev, curr) => [prev, <span> - </span>, curr])}
        <br />
        <strong>Kwaliteit/ Type haar</strong>:{' '}
        {(Object.keys(HairType) as Array<keyof typeof HairType>)
          .map<ReactNode>(v => (
            <span style={customer.hair.type[v] ? { color: 'orange', textDecoration: 'underline' } : {}}>
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
    </div>
  )
  return { subject, content }
}
