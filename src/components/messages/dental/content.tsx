import isEqual from 'lodash.isequal';
import merge, { type ImageSource } from 'merge-images';
import { type Dispatch, type MouseEventHandler, type SetStateAction, useEffect, useRef, useState } from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import BoldTranslation from '../../BoldTranslation';
import { Gender } from '../hair/data';
import AllOnBreakdown from './AllOnBreakdown';
import ProcedureBreakdown from './ProcedureBreakdown';
import styles from './content.module.scss';
import { AllOn, AttachmentMaterial, AttachmentType, type DentalState, type TeethOptions, defaultTooth } from './data';
import images from './teeth';
import { ImplantType, allOnEnumToLayout } from './templates';

const WIDTH = 1_200;
const HEIGHT = 640;
const BASE_OFFSETS = [0, 108, 179, 250, 318, 391, 462, 533];
const COLUMN_OFFSETS = [...BASE_OFFSETS, WIDTH / 2, ...BASE_OFFSETS.reverse().map(o => WIDTH - o)];

export default function Content({ state, setState }: { state: DentalState; setState: Dispatch<SetStateAction<DentalState>> }) {
	const { LL } = useI18nContext();

	const [zone64, setZone64] = useState('');
	const [logo, setLogo] = useState('');
	const ref = useRef(null as HTMLImageElement | null);

	useEffect(() => {
		import('!url-loader!./assets/logo.png').then(({ default: img }) => setLogo(img));
	}, []);

	// Head images w/ zones
	useEffect(() => {
		const teethImages: ImageSource[] = ['/assets/dental/labels.png'];
		let teeth = state.teeth;
		if (state.allOn !== AllOn.NONE) teeth = allOnEnumToLayout(state.allOn);
		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < 16; j++) {
				const tooth = teeth[i][j];
				let type: ImplantType = ImplantType.DEFAULT;
				if (tooth.extraction && !tooth.implantaat) type = ImplantType.BLANK;
				else if (tooth.implantaat && tooth.attachment === AttachmentType.NONE) type = ImplantType.SCREW;
				else if (tooth.implantaat && tooth.attachment !== AttachmentType.NONE) {
					if (tooth.attachmentMaterial === AttachmentMaterial.EMAX) type = ImplantType.EMAX_SCREW;
					else if (tooth.attachmentMaterial === AttachmentMaterial.PORCELAIN) type = ImplantType.PORCELAIN_SCREW;
					else if (tooth.attachmentMaterial === AttachmentMaterial.ZIRCONIUM) type = ImplantType.ZIRCONIUM_SCREW;
				} else if (!tooth.implantaat && tooth.attachment !== AttachmentType.NONE) {
					if (tooth.attachmentMaterial === AttachmentMaterial.EMAX) type = ImplantType.EMAX;
					else if (tooth.attachmentMaterial === AttachmentMaterial.PORCELAIN) type = ImplantType.PORCELAIN;
					else if (tooth.attachmentMaterial === AttachmentMaterial.ZIRCONIUM) type = ImplantType.ZIRCONIUM;
				}
				teethImages.push({
					src: images[type as keyof typeof images][i][j],
					x: COLUMN_OFFSETS[j],
					y: (i * HEIGHT) / 2
				});
			}
		}

		merge(teethImages, { width: WIDTH, height: HEIGHT }).then(setZone64);
	}, [state.teeth, state.allOn]);

	const onTeethClick: MouseEventHandler<HTMLImageElement> = e => {
		if (!ref.current) return;
		// All On is a template, if it is set do not allow the picture to be changed
		if (state.allOn !== AllOn.NONE) return;
		// Get mouse position on the image
		const { left, top, width, height } = ref.current.getBoundingClientRect();
		const x = (WIDTH * (e.clientX - left)) / width;
		const y = (HEIGHT * (e.clientY - top)) / height;

		// Find associated column & row
		const column = COLUMN_OFFSETS.findIndex(o => o >= x) - 1;
		const row = Math.floor(y / (HEIGHT / 2));

		// Update with correct implant type
		const newTeeth = [[...state.teeth[0]], [...state.teeth[1]]];

		const newTooth: TeethOptions = {
			extraction: state.extraction,
			implantaat: state.implant,
			implantaatBrand: state.implantBrand,
			attachment: state.attachmentType,
			attachmentMaterial: state.attachemntMaterial
		};

		// Reset to teeth if clicking on the same type
		const tooth = isEqual(newTeeth[row][column], newTooth) ? { ...defaultTooth } : newTooth;
		newTeeth[row][column] = tooth;
		setState({ ...state, teeth: newTeeth });
	};

	return (
		<div className={styles.message}>
			<p>
				{LL.GENERIC.DEAR({
					title: state.gender === Gender.MALE ? LL.GENERIC.MR() : LL.GENERIC.MRS(),
					name: state.firstname,
					surname: state.lastname
				})}
			</p>
			<p>{LL.DENTAL.CONTENT.INTRO_1()}</p>
			<p>
				<BoldTranslation suppressHydrationWarning>{LL.DENTAL.CONTENT.INTRO_2(new Date(state.date))}</BoldTranslation>
			</p>
			<p style={{ color: 'red' }}>
				<strong>{LL.DENTAL.CONTENT.INTRO_3()}</strong>
			</p>
			{/* Image */}
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: click event is required to know where on the image was clicked */}
			<img src={zone64} alt='Teeth' ref={ref} onClick={onTeethClick} className={styles.image} />

			{/* Price */}
			<div className={styles.detail}>
				<div className={styles.breakdown}>
					{state.allOn === AllOn.NONE && <ProcedureBreakdown state={state} />}
					{state.allOn !== AllOn.NONE && <AllOnBreakdown state={state} />}
				</div>
				<p style={{ color: '#1a79c6' }}>
					U behoort voor uw behandeling in totaal 2 keer af te reizen naar Turkije, tijdens uw eerste bezoek (3 werkdagen) worden de
					extracties uitgevoerd, sinus grafting uitgevoerd, en de implantaten geplaatst. Na 3 maanden genezingstijd behoort u nogmaals af te
					reizen (6 werkdagen) voor de opbouw (kroon en brugwerk){' '}
				</p>
				{/* Description */}
				<p style={{ fontWeight: 'bold' }}>Kwaliteit en garantie</p>
				<p>
					Onze privé tand kliniek in Istanbul beschikt over de meest ervaren tand specialisten met de modernste apparatuur. Wij gaan bij
					onze behandelingen voor de beste en duurzaamste kwaliteit om al onze klanten tevreden te houden.{' '}
				</p>
				<p>
					Daarom geven wij liefst 10 jaar garantie op facings, kroon- en brugwerk en levenslang garantie op implantaten bij verzorging van
					het gebit naar voorschriften.
				</p>
				<p style={{ fontWeight: 'bold' }}>Reis en verblijf</p>
				<p>
					Wij boeken uw ticket(s) naar Turkije / istanbul, en u wordt op het vliegveld opgevangen door onze shuttle service. Deze brengt u
					naar uw Hotel.
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
					Voor eventuele nazorg hoeft u niet naar Turkije af te reizen. In Nederland beschikken wij over twee tandartspraktijken waar u
					terecht kunt voor controles en spoedeisende hulp.
				</p>
				<p style={{ fontWeight: 'bold' }}>Heeft u nog twijfels?</p>
				<p>
					Zeer begrijpelijk. Het is ook niet niets. Als u wilt, kunnen wij enkele telefoonnummers van onze klanten die recent zijn behandeld
					aan u doorgeven. Dan kunt u met hen contact opnemen en naar hun ervaringen en tips vragen.
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
				<img src={logo} alt='Dutch Clinic' style={{ height: '100px' }} />
				<p>
					<i>
						<strong style={{ color: 'orange' }}>
							Zilverparkkade 3, 8232 WJ Lelystad.
							<br />
							Tel: 085-401 81 12
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
