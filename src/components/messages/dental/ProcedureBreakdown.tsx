import { useI18nContext } from '../../../i18n/i18n-react';
import { AttachmentMaterial, AttachmentType, DentalState, ImplantBrand } from './data';
import { filterToIdentifier } from './util';

export default function ProcedureBreakdown({ state }: { state: DentalState }) {
    const { LL } = useI18nContext();
    const extractions = filterToIdentifier(state.teeth, tooth => tooth.extraction);
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
            <div style={{ marginTop: '20px' }}>
                <p>{LL.DENTAL.CONTENT.TREATMENT_PLAN()}</p>
            </div>
            {extractions.length > 0 && (
                <p>
                    {LL.DENTAL.CONTENT.EXTRACTIONS()}: {extractions.join(', ')}
                </p>
            )}
            {misImplants.length > 0 && (
                <p>
                    {LL.DENTAL.CONTENT.MIS_IMPLANTS()}: {misImplants.join(', ')}
                </p>
            )}
            {zircCrowns.length > 0 && (
                <p>
                    {LL.DENTAL.CONTENT.ZIRCONIUM_CROWN()}: {zircCrowns.join(', ')}
                </p>
            )}
            {porcCrowns.length > 0 && (
                <p>
                    {LL.DENTAL.CONTENT.PORCELAIN_CROWN()}: {porcCrowns.join(', ')}
                </p>
            )}
            {emaxCrowns.length > 0 && (
                <p>
                    {LL.DENTAL.CONTENT.EMAX_CROWN()}: {emaxCrowns.join(', ')}
                </p>
            )}
            {zircFacing.length > 0 && (
                <p>
                    {LL.DENTAL.CONTENT.ZIRCONIUM_FACING()}: {zircFacing.join(', ')}
                </p>
            )}
            {porcFacing.length > 0 && (
                <p>
                    {LL.DENTAL.CONTENT.PORCELAIN_FACING()}: {porcFacing.join(', ')}
                </p>
            )}
            {emaxFacing.length > 0 && (
                <p>
                    {LL.DENTAL.CONTENT.EMAX_FACING()}: {emaxFacing.join(', ')}
                </p>
            )}
        </div>
    );
}
