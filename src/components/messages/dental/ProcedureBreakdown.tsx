import { useI18nContext } from '../../../i18n/i18n-react';
import { AttachmentMaterial, AttachmentType, DentalState, ImplantBrand } from './data';
import { filterToIdentifier } from './util';

export default function ProcedureBreakdown({ state }: { state: DentalState }) {
    const { LL } = useI18nContext();
    const extractions = filterToIdentifier(state.teeth, tooth => tooth.extraction);
    const boneGrafts = filterToIdentifier(state.teeth, tooth => tooth.boneGraft);
    const misImplants = filterToIdentifier(state.teeth, tooth => tooth.implantaat && tooth.implantaatBrand === ImplantBrand.MIS);
    const zircCrowns = filterToIdentifier(
        state.teeth,
        tooth => tooth.attachment === AttachmentType.CROWN && tooth.attachmentMaterial === AttachmentMaterial.ZIRCONIUM
    );
    const porcCrowns = filterToIdentifier(
        state.teeth,
        tooth => tooth.attachment === AttachmentType.CROWN && tooth.attachmentMaterial === AttachmentMaterial.PORCELAIN
    );
    const emaxCrowns = filterToIdentifier(
        state.teeth,
        tooth => tooth.attachment === AttachmentType.CROWN && tooth.attachmentMaterial === AttachmentMaterial.EMAX
    );
    const zircFacing = filterToIdentifier(
        state.teeth,
        tooth => tooth.attachment === AttachmentType.FACING && tooth.attachmentMaterial === AttachmentMaterial.ZIRCONIUM
    );
    const porcFacing = filterToIdentifier(
        state.teeth,
        tooth => tooth.attachment === AttachmentType.FACING && tooth.attachmentMaterial === AttachmentMaterial.PORCELAIN
    );
    const emaxFacing = filterToIdentifier(
        state.teeth,
        tooth => tooth.attachment === AttachmentType.FACING && tooth.attachmentMaterial === AttachmentMaterial.EMAX
    );

    return (
        <div>
            <p style={{ textDecoration: 'underline', color: 'red' }}>
                <strong>{LL.DENTAL.CONTENT.TREATMENT_PLAN()}:</strong>
            </p>
            {extractions.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.EXTRACTIONS()}:</strong> {extractions.join(', ')}
                </p>
            )}
            {boneGrafts.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.BONE_GRAFTS()}:</strong> {boneGrafts.join(', ')}
                </p>
            )}
            {misImplants.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.MIS_IMPLANTS()}:</strong> {misImplants.join(', ')}
                </p>
            )}
            {zircCrowns.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.ZIRCONIUM_CROWN()}:</strong> {zircCrowns.join(', ')}
                </p>
            )}
            {porcCrowns.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.PORCELAIN_CROWN()}:</strong> {porcCrowns.join(', ')}
                </p>
            )}
            {emaxCrowns.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.EMAX_CROWN()}:</strong> {emaxCrowns.join(', ')}
                </p>
            )}
            {zircFacing.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.ZIRCONIUM_FACING()}:</strong> {zircFacing.join(', ')}
                </p>
            )}
            {porcFacing.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.PORCELAIN_FACING()}:</strong> {porcFacing.join(', ')}
                </p>
            )}
            {emaxFacing.length > 0 && (
                <p>
                    <strong>{LL.DENTAL.CONTENT.EMAX_FACING()}:</strong> {emaxFacing.join(', ')}
                </p>
            )}
        </div>
    );
}
