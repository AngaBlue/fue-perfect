import { AllOn, AttachmentMaterial, AttachmentType, defaultTooth, initial } from './data';
import { mirror } from './util';

export enum ImplantType {
	DEFAULT = 0,
	SCREW = 1,
	ZIRCONIUM = 2,
	PORCELAIN = 3,
	PURPLE = 4,
	WHITE = 5,
	BLANK = 6,
	EMAX = 7,
	PORCELAIN_SCREW = 8,
	ZIRCONIUM_SCREW = 9,
	EMAX_SCREW = 10
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
		default:
			return initial;
	}
}
