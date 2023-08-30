import { AllOn, AttachmentMaterial, AttachmentType, defaultTooth, initial } from './data';
import { mirror } from './util';

export enum ImplantType {
    DEFAULT,
    SCREW,
    ZIRCONIUM,
    PORCELAIN,
    PURPLE,
    WHITE,
    BLANK,
    EMAX,
    PORCELAIN_SCREW,
    ZIRCONIUM_SCREW,
    EMAX_SCREW
}

export const allOn4 = mirror([
    { ...defaultTooth, extraction: true },
    { ...defaultTooth, extraction: true },
    { ...defaultTooth, extraction: true },
    {
        ...defaultTooth,
        extraction: true,
        implantaat: true,
        attachment: AttachmentType.CROWN,
        attachmentMaterial: AttachmentMaterial.EMAX
    },
    { ...defaultTooth },
    {
        ...defaultTooth,
        extraction: true,
        implantaat: true,
        attachment: AttachmentType.CROWN,
        attachmentMaterial: AttachmentMaterial.EMAX
    },
    { ...defaultTooth },
    { ...defaultTooth }
]);

export const allOn6 = mirror([
    { ...defaultTooth, extraction: true },
    { ...defaultTooth, extraction: true },
    {
        ...defaultTooth,
        extraction: true,
        implantaat: true,
        attachment: AttachmentType.CROWN,
        attachmentMaterial: AttachmentMaterial.EMAX
    },
    { ...defaultTooth },
    {
        ...defaultTooth,
        extraction: true,
        implantaat: true,
        attachment: AttachmentType.CROWN,
        attachmentMaterial: AttachmentMaterial.EMAX
    },
    { ...defaultTooth },
    {
        ...defaultTooth,
        extraction: true,
        implantaat: true,
        attachment: AttachmentType.CROWN,
        attachmentMaterial: AttachmentMaterial.EMAX
    },
    { ...defaultTooth }
]);

export function allOnEnumToLayout(allOn: AllOn) {
    switch (allOn) {
        case AllOn.ALL_ON_4:
            return allOn4;
        case AllOn.ALL_ON_6:
            return allOn6;
        case AllOn.NONE:
        default:
            return initial;
    }
}
