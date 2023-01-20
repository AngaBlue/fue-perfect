import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from 'react';
import merge, { ImageSource } from 'merge-images';
import { DentalState, ImplantType } from './data';
import styles from './content.module.scss';
import images from './teeth';

const WIDTH = 1_200;
const HEIGHT = 640;
const BASE_OFFSETS = [0, 108, 179, 250, 318, 391, 462, 533];
const COLUMN_OFFSETS = [...BASE_OFFSETS, WIDTH / 2, ...BASE_OFFSETS.reverse().map(o => WIDTH - o)];

export default function Content({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
    const [zone64, setZone64] = useState('');
    const [logo, setLogo] = useState('');
    const ref = useRef(null as HTMLImageElement | null);

    useEffect(() => {
        import('!url-loader!./assets/dutch-clinic.png').then(({ default: img }) => setLogo(img));
    }, []);

    // Head images w/ zones
    useEffect(() => {
        const teethImages: ImageSource[] = ['/assets/dental/labels.png'];
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 16; j++) {
                teethImages.push({
                    src: images[state.teeth[i][j] as keyof typeof images][i][j],
                    x: COLUMN_OFFSETS[j],
                    y: (i * HEIGHT) / 2
                });
            }
        }

        merge(teethImages, { width: WIDTH, height: HEIGHT }).then(setZone64);
    }, [state.teeth]);

    const onTeethClick: MouseEventHandler<HTMLImageElement> = e => {
        if (!ref.current) return;
        // Get mouse position on the image
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (WIDTH * (e.clientX - left)) / width;
        const y = (HEIGHT * (e.clientY - top)) / height;

        // Find associated column & row
        const column = COLUMN_OFFSETS.findIndex(o => o >= x) - 1;
        const row = Math.floor(y / (HEIGHT / 2));

        // Update with correct implant type
        const newTeeth = [[...state.teeth[0]], [...state.teeth[1]]];

        // Reset to teeth if clicking on the same type
        newTeeth[row][column] = newTeeth[row][column] === state.type ? ImplantType.DEFAULT : state.type;
        setState({ ...state, teeth: newTeeth });
    };

    return (
        <div className={styles.message}>
            <p>
                Geachte: {state.firstname} {state.lastname}
            </p>
            <p>
                Bedankt voor de interesse die u getoond heeft in onze organisatie. Aan de hand van uw röntgenfoto zijn wij uitgekomen tot de
                onderstaande behandelplan.
            </p>
            {/* Image */}
            <img src={zone64} alt='Teeth' ref={ref} onClick={onTeethClick} className={styles.image} />
            {/* Test */}
            <div className={styles.mail_slide_btn}>
                <div className={styles.mail_permanent_btn}>Het blijvende gebit</div>
                <div className={styles.mail_child_btn}>Melktanden</div>
            </div>
            {/* Price */}
            <div className={styles.detail}>
                <div style={{ color: 'red', marginTop: '20px' }}>The price of implantaat</div> <br />
                <p style={{ color: '#1a79c6' }}>Extracties: {}</p>
                <p style={{ color: '#1a79c6' }}>Implantaat: {}</p>
                <p style={{ color: '#1a79c6' }}>Bone graft: {}</p>
                <p style={{ color: 'red' }}>Brug: {}</p>
                <p style={{ color: '#1a79c6' }}>
                    U behoort voor uw behandeling in totaal 2 keer af te reizen naar Turkije, tijdens uw eerste bezoek (3 werkdagen) worden
                    de extracties uitgevoerd, sinus grafting uitgevoerd, en de implantaten geplaatst. Na 3 maanden genezingstijd behoort u
                    nogmaals af te reizen (6 werkdagen) voor de opbouw (kroon en brugwerk){' '}
                </p>
                {/* Description */}
                <p style={{ fontWeight: 'bold' }}>Kwaliteit en garantie</p>
                <p>
                    Onze privé tand kliniek in Istanbul beschikt over de meest ervaren tand specialisten met de modernste apparatuur. Wij
                    gaan bij onze behandelingen voor de beste en duurzaamste kwaliteit om al onze klanten tevreden te houden.{' '}
                </p>
                <p>
                    Daarom geven wij liefst 10 jaar garantie op facings, kroon- en brugwerk en levenslang garantie op implantaten bij
                    verzorging van het gebit naar voorschriften.
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
                        <a href='https://www.hotelsuadiye.com'>Hotel Suadiye</a>
                    </p>
                </div>
                <p style={{ fontWeight: 'bold' }}>Nazorg Controles</p>
                <p>
                    Voor eventuele nazorg hoeft u niet naar Turkije af te reizen. In Nederland beschikken wij over twee tandartspraktijken
                    waar u terecht kunt voor controles en spoedeisende hulp.
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
                        <a href='https://www.dentperfect.nl'>www.dentperfect.nl</a>
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
        </div>
    );
}
