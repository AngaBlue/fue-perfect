import { useEffect, useState } from 'react'

import { DentalState } from './data'
import styles from './content.module.scss'

export default function Content(props: DentalState) {
  const [logo, setLogo] = useState('')

  useEffect(() => {
    import('!url-loader!./assets/dutch-clinic.png').then(({ default: img }) =>
      setLogo(img),
    )
  }, [])

  return (
    <div className={styles.message} style={{ fontFamily: 'Sans-Serif' }}>
      <p>Beste {props.firstname},</p>
      <p>Het gaat om de volgende.</p>
      <p>
        Een tool ontwikkelen waarbij handmatig een behandelplan opgesteld kan
        worden, hieronder vindt je de gegevens terug.
      </p>

      <p></p>
      <p>Met vriendelijke groeten,</p>
      <p style={{ color: 'grey' }}>
        <strong>Arkın Şentürk</strong>
      </p>
      <img src={logo} alt="Dutch Clinic" />
      <p>
        <i>
          <strong style={{ color: 'orange' }}>
            Hoofdweg 848A
            <br />
            2132 MC, Hoofddorp
            <br />
            Tel: 020-261 32 00
            <br />
            Mobiel: 06-15 03 87 65 <br />
          </strong>
          <strong style={{ color: 'cornflowerblue' }}>
            <a href="www.dentperfect.nl">www.dentperfect.nl</a>
            <br />
            <a href="mailto:info@dentperfect.nl">info@dentperfect.nl</a>
          </strong>
        </i>
      </p>
    </div>
  )
}
