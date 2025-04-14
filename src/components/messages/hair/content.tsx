import merge from 'merge-images';
import { useEffect, useState } from 'react';
import { useI18nContext } from '../../../i18n/i18n-react';
import BoldTranslation from '../../BoldTranslation';
import PriceBreakdown from './PriceBreakdown';
import styles from './content.module.scss';
import { Country, Gender, type HairQuality, type HairState, Technique } from './data';

function createZoneString(zones: boolean[]) {
	return zones
		.map((_v, i) => i + 1)
		.filter((_v, i) => zones[i])
		.join(', ');
}

export default function Content({ state }: { state: HairState }) {
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
					<p>{LL.HAIR.CONTENT.INSPECTION_2(LL.HAIR.TECHNIQUE[state.technique]())}</p>
					<p>{LL.HAIR.CONTENT.INSPECTION_3()}</p>
				</>
			) : (
				<>
					<p>
						<BoldTranslation suppressHydrationWarning>
							{LL.HAIR.CONTENT.NO_INSPECTION_1(new Date(state.date), LL.HAIR.TECHNIQUE[state.technique]())}
						</BoldTranslation>
					</p>
					<p>{LL.HAIR.CONTENT.NO_INSPECTION_2()}</p>
				</>
			)}
			{/* Inspection results */}
			<p>
				<strong>{LL.HAIR.CONTENT.MEDICAL_TEAM_REPORT()}:</strong>
			</p>
			<p>
				<BoldTranslation>{LL.HAIR.CONTENT.TREATMENT(LL.HAIR.TECHNIQUE[state.technique]())}</BoldTranslation>
				<br />
				<strong>{LL.HAIR.CONTENT.QUALITY_VOLUME()}</strong>:{' '}
				{state.hair.volume.map((volume, i) => (
					<>
						<span key={i as HairQuality} style={volume ? { color: 'orange', textDecoration: 'underline' } : {}}>
							{LL.HAIR.QUALITY[i as HairQuality]()}
						</span>
						{/* Render divider for every but last */}
						{i !== state.hair.volume.length - 1 && <span> - </span>}
					</>
				))}
				<br />
				<strong>{LL.HAIR.CONTENT.QUALITY_TYPE()}</strong>:{' '}
				{state.hair.type.map((volume, i) => (
					<>
						<span key={i as HairQuality} style={volume ? { color: 'orange', textDecoration: 'underline' } : {}}>
							{LL.HAIR.QUALITY[i as HairQuality]()}
						</span>
						{/* Render divider for every but last */}
						{i !== state.hair.volume.length - 1 && <span> - </span>}
					</>
				))}
				<br />
				<BoldTranslation>{LL.HAIR.CONTENT.GRAFT_COUNT({ session: '1', range: state.grafts[0] })}</BoldTranslation>
				<br />
				{state.sessions === 2 && (
					<>
						<BoldTranslation>{LL.HAIR.CONTENT.GRAFT_COUNT({ session: '2', range: state.grafts[1] })}</BoldTranslation> (
						{LL.HAIR.CONTENT.NOT_REQUIRED()})
						<br />
					</>
				)}
				<strong>{LL.HAIR.CONTENT.TECHNIQUE()}</strong>: {LL.HAIR.TECHNIQUE[state.technique]()}
				<br />
				<strong>{LL.HAIR.CONTENT.ZONES()}</strong>:{' '}
				{LL.HAIR.CONTENT.SESSION_ZONES(state.technique === Technique.FUE_DHI_HAIR ? 'FUE' : '1', createZoneString(state.zones[0]))}
				{state.sessions === 2 ||
					(state.technique === Technique.FUE_DHI_HAIR &&
						` / ${LL.HAIR.CONTENT.SESSION_ZONES(
							state.technique === Technique.FUE_DHI_HAIR ? 'DHI' : '2',
							createZoneString(state.zones[1])
						)}`)}
				<br />
				<BoldTranslation>{LL.HAIR.CONTENT.SESSION_DURATION('1', '6-7')}</BoldTranslation>
				<br />
				{state.sessions === 2 && (
					<>
						<BoldTranslation>{LL.HAIR.CONTENT.SESSION_DURATION('2', '5-6')}</BoldTranslation>
						<br />
					</>
				)}
				<BoldTranslation>{LL.HAIR.CONTENT.SESSIONS(state.sessions)}</BoldTranslation>
				<br />
				<BoldTranslation>{LL.HAIR.CONTENT.ANESTHESIA()}</BoldTranslation>
				<br />
				<strong>{LL.HAIR.CONTENT.TREATMENT_LOCATION()}</strong>: {LL.HAIR.COUNTRY[state.country]()}
				<br />
				<strong>{LL.HAIR.CONTENT.TREATMENT_NOTES()}</strong>: {state.notes || '-'}
				<br />
				<strong>{LL.HAIR.CONTENT.EXTRA_REMARKS()}</strong>: {state.opmerkingNotes || '-'}
				<br />
			</p>
			{/* Hair transplant regions image */}
			<img src={zone64} alt='Zones' style={{ maxHeight: '300px' }} />
			{/* Treatment price breakdown */}
			{state.country !== Country.TURKEY && <PriceBreakdown state={state} country={Country.NETHERLANDS} />}
			{state.country !== Country.NETHERLANDS && <PriceBreakdown state={state} country={Country.TURKEY} />}
			{/* Closing statement */}
			<p>{LL.HAIR.CONTENT.ENDING_COMMENT()}</p>
			<p>{LL.HAIR.CONTENT.KIND_REGARDS()},</p>
			<p style={{ color: 'grey' }}>
				<strong>Team Fue Perfect</strong>
			</p>
			{/* Footer */}
			<img src={logo} alt='Fue Perfect' style={{ height: '100px' }} />
			<p>
				<i>
					<strong style={{ color: 'orange' }}>
						Zilverparkkade 3, 8232 WJ Lelystad
						<br />
						0854 01 81 12 Nederland
						<br />
						06-15 03 87 65 Mobiel / Whatsapp
						<br />
					</strong>
					<strong style={{ color: 'cornflowerblue' }}>
						<a href='mailto:info@fueperfect.com'>info@fueperfect.com</a>
						<br />
						<a href='www.fueperfect.com'>www.fueperfect.com</a>
					</strong>
				</i>
			</p>
		</div>
	);
}
