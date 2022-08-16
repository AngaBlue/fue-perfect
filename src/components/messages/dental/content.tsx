import { useEffect, useState } from 'react';

import { DentalState } from './data';
import styles from './content.module.scss';

export default function Content(props: DentalState) {
    const [logo, setLogo] = useState('');

    useEffect(() => {
        import('!url-loader!./assets/dutch-clinic.png').then(({ default: img }) => setLogo(img));
    }, []);

    return (
        <div className={styles.message}>
            <p>Geachte: {`${props.firstname} ${props.lastname}`}</p>
            <p>
                Bedankt voor de interesse die u getoond heeft in onze organisatie. Aan de hand van uw röntgenfoto zijn wij uitgekomen tot de
                onderstaande behandelplan.
            </p>
            {/* Tooth Image */}
            <div className={styles.tooth_content}>
                <div className={styles.slide_tooth_btn}>
                    <div className={styles.permanent_tooth_btn}>Het vlijvende gebit</div>
                    <div className={styles.child_tooth_btn}>Melktanden</div>
                </div>
                <div className={styles.description_mail}>
                    <div>
                        <h1 style={{ fontWeight: 'bold' }}>Implantaat:</h1>
                        <p>A-Kwaliteit €895</p>
                        <p>Porselein €195</p>
                    </div>
                    <div>
                        <h1 style={{ fontWeight: 'bold' }}>Brug: </h1>
                        <p>Driedelige brug 3x material-crown</p>
                        <p>Porselein €195</p>
                    </div>
                </div>

                <div className={styles.all_price}></div>
                <div className={styles.top_tooth_numbers}>
                    {props.topTooth.map((teeth, index) => (
                        <div
                            key={index}
                            className={styles.teethTopNumber}
                            style={{
                                marginRight: teeth.marginRight,
                                backgroundColor: teeth.clickBrug % 2 === 1 ? 'red' : 'white',
                                color: teeth.clickBrug % 2 === 1 ? 'white' : 'red'
                            }}
                        >
                            <span className={styles.Top_brug_hover}>Brug: Porselein €195</span>
                            {teeth.teethNum}
                        </div>
                    ))}
                </div>
                <div className={styles.bottom_tooth_numbers}>
                    {props.bottomTooth.map((teeth, index) => (
                        <div
                            key={index}
                            className={styles.teethBottomNumber}
                            style={{
                                marginRight: teeth.marginRight,
                                backgroundColor: teeth.clickBrug % 2 === 1 ? 'red' : 'white',
                                color: teeth.clickBrug % 2 === 1 ? 'white' : 'red'
                            }}
                        >
                            <span className={styles.Bottom_brug_hover}>Brug: Porselein €195</span>
                            {teeth.teethNum}
                        </div>
                    ))}
                </div>
                <>
                    {props.topTooth.map((item, id) =>
                        item.clickImplant % 2 === 1 && item.clickImplant > 0 ? (
                            <div className={styles.top_teeth_image}>
                                <img
                                    src={props.topToothImages[id].imageUrl}
                                    alt=''
                                    style={{
                                        top: props.topToothImages[id].top,
                                        left: props.topToothImages[id].left
                                    }}
                                />
                            </div>
                        ) : null
                    )}
                </>
                <>
                    {props.bottomTooth.map((item, id) =>
                        item.clickImplant % 2 === 1 && item.clickImplant > 0 ? (
                            <div className={styles.bottom_teeth_image}>
                                <img
                                    src={props.bottomToothImages[id].imageUrl}
                                    alt=''
                                    style={{
                                        bottom: props.bottomToothImages[id].bottom,
                                        left: props.bottomToothImages[id].left
                                    }}
                                />
                            </div>
                        ) : null
                    )}
                </>
                <div className={styles.tooth_buttons_top}>
                    {props.topTooth.map((topT, index) => (
                        <div key={index} className={styles.teeth_btn_top} style={{ width: topT.teethWidth }}>
                            <span className={styles.top_implant_hover}>
                                <p>Implantaat: A-Kwaliteit €895</p>
                                <p>Material: Porselein €195</p>
                            </span>
                        </div>
                    ))}
                </div>
                <div className={styles.tooth_buttons_bottom}>
                    {props.bottomTooth.map((bottomT, index) => (
                        <div key={index} className={styles.teeth_btn_bottom} style={{ width: bottomT.teethWidth }}></div>
                    ))}
                </div>
            </div>
            {/* Price */}
            <span style={{ color: 'red', fontSize: '19px', marginTop: '20px' }}>The price of implantaat</span> <br />
            <p style={{ color: '#1a79c6', fontSize: '19px' }}>Extracties: {}</p>
            <p style={{ color: '#1a79c6', fontSize: '19px' }}>Implantaat: {}</p>
            <p style={{ color: '#1a79c6', fontSize: '19px' }}>Bone graft: {}</p>
            <p style={{ color: 'red', fontSize: '19px' }}>Brug: {}</p>
            <p style={{ color: '#1a79c6', fontSize: '19px' }}>
                U behoort voor uw behandeling in totaal 2 keer af te reizen naar Turkije, tijdens uw eerste bezoek (3 werkdagen) worden de
                extracties uitgevoerd, sinus grafting uitgevoerd, en de implantaten geplaatst. Na 3 maanden genezingstijd behoort u nogmaals
                af te reizen (6 werkdagen) voor de opbouw (kroon en brugwerk){' '}
            </p>
            {/* Description */}
            <p style={{ fontWeight: 'bold' }}>Kwaliteit en garantie</p>
            <p>
                Onze privé tand kliniek in Istanbul beschikt over de meest ervaren tand specialisten met de modernste apparatuur. Wij gaan
                bij onze behandelingen voor de beste en duurzaamste kwaliteit om al onze klanten tevreden te houden.{' '}
            </p>
            <p>
                Daarom geven wij liefst 10 jaar garantie op facings, kroon- en brugwerk en levenslang garantie op implantaten bij verzorging
                van het gebit naar voorschriften.
            </p>
            <p style={{ fontWeight: 'bold' }}>Reis en verblijf</p>
            <p>
                Wij boeken uw ticket(s) naar Turkije / istanbul, en u wordt op het vliegveld opgevangen door onze shuttle service. Deze
                brengt u naar uw Hotel.
            </p>
            <div style={{ display: 'flex' }}>
                <p>Tijdens uw verblijf zult u overnachten in een vijf sterren hotel </p>
                <p
                    style={{
                        color: '#1a79c6',
                        textDecoration: 'underline',
                        paddingLeft: '10px'
                    }}
                >
                    <a href='www.hotelsuadiye.com'>Hotel Suadiye</a>
                </p>
            </div>
            <p style={{ fontWeight: 'bold' }}>Nazorg Controles</p>
            <p>
                Voor eventuele nazorg hoeft u niet naar Turkije af te reizen. In Nederland beschikken wij over twee tandartspraktijken waar
                u terecht kunt voor controles en spoedeisende hulp.
            </p>
            <p style={{ fontWeight: 'bold' }}>Heeft u nog twijfels?</p>
            <p>
                Zeer begrijpelijk. Het is ook niet niets. Als u wilt, kunnen wij enkele telefoonnummers van onze klanten die recent zijn
                behandeld aan u doorgeven. Dan kunt u met hen contact opnemen en naar hun ervaringen en tips vragen.
            </p>
            <p style={{ fontWeight: 'bold' }}>Vragen?</p>
            <div style={{ display: 'flex' }}>
                <p>Tijdens uw verblijf zult u overnachten in een vijf sterren hotel </p>
                <p
                    style={{
                        color: '#1a79c6',
                        textDecoration: 'underline',
                        paddingLeft: '10px'
                    }}
                >
                    <a href='www.dentperfect.nl'>www.dentperfect.nl</a>
                </p>
            </div>
            <p>Wij vertrouwen erop u voldoende te hebben geïnformeerd en zien uit naar uw reactie.</p>
            {/*  */}
            <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Met vriendelijke groeten,</p>
            <p style={{ color: 'grey', fontWeight: 'bold', fontStyle: 'italic' }}>
                <strong>Arkın Şentürk</strong>
            </p>
            <img src={logo} alt='Dutch Clinic' />
            <p>
                <i>
                    <strong style={{ color: 'orange' }}>
                        Houtstraat 70, 1353 BD Almere
                        <br />
                        Tel: 036-202 21 15
                        <br />
                        Mobiel: 06-15 03 87 65 <br />
                    </strong>
                    <strong style={{ color: 'cornflowerblue' }}>
                        <a href='www.dentperfect.nl'>www.dentperfect.nl</a>
                        <br />
                        <a href='mailto:info@dentperfect.nl'>info@dentperfect.nl</a>
                    </strong>
                </i>
            </p>
        </div>
    );
}
