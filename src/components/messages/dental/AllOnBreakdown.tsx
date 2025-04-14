import { useI18nContext } from '../../../i18n/i18n-react';
import type { DentalState } from './data';
import { allOnEnumToLayout } from './templates';
import { filterToIdentifier } from './util';

export default function AllOnBreakdown({ state }: { state: DentalState }) {
	const { LL } = useI18nContext();

	const teethLayout = allOnEnumToLayout(state.allOn);

	const implants = filterToIdentifier(teethLayout, tooth => tooth.implantaat);

	return (
		<div>
			<p style={{ color: 'red' }}>
				<strong>{LL.DENTAL.CONTENT.ALL_ON.PART_ONE()}:</strong>
			</p>
			<p>
				<strong>{LL.DENTAL.CONTENT.ALL_ON.RESEARCH()}:</strong> (€0)
			</p>
			<p>
				<strong>{LL.DENTAL.CONTENT.ALL_ON.TOTAL_EXTRACTION()}:</strong> {LL.DENTAL.CONTENT.ALL_ON.BOTTOM_AND_TOP()} (€0)
			</p>
			<p>
				<strong>{LL.DENTAL.CONTENT.BONE_GRAFTS()}:</strong> {LL.DENTAL.CONTENT.ALL_ON.IF_NEEDED()}
			</p>
			<p>
				<strong>{LL.DENTAL.CONTENT.MIS_IMPLANTS()}:</strong> {implants.join(', ')} (€{implants.length * 595})
			</p>
			<p>
				<strong>{LL.DENTAL.CONTENT.ALL_ON.FIXED_PROSTHESIS()}</strong> €375
			</p>
			<p>
				<strong>{LL.DENTAL.CONTENT.ALL_ON.SEDATION()}:</strong> €225 (optioneel)
			</p>

			<br />

			<p style={{ color: 'red' }}>
				<strong>{LL.DENTAL.CONTENT.ALL_ON.PART_TWO()}:</strong>
			</p>
			<p>
				<strong>{LL.DENTAL.CONTENT.ALL_ON.IMPLANTS()}:</strong> {LL.DENTAL.CONTENT.ALL_ON.BOTTOM_AND_TOP()} (€5100)
			</p>
			<p>
				<strong>{LL.DENTAL.CONTENT.ALL_ON.MAINTAINENCE()}:</strong> {LL.DENTAL.CONTENT.ALL_ON.MAINTAINENCE_DESC()}
			</p>
		</div>
	);
}
