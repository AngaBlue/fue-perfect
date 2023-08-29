import { AttachmentMaterial, AttachmentType, defaultTooth } from './data';
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
