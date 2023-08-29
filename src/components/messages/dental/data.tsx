import { Gender } from '../hair/data';
import { mirror } from './util';

// Implant as Im plantaat
// export const ImplantOptions = ['A-Kwaliteit €895', 'B-Kwaliteit €695'];
export enum ImplantBrand {
    MIS
}

export enum AttachmentType {
    NONE,
    FACING,
    CROWN
}

export enum AttachmentMaterial {
    PORCELAIN,
    ZIRCONIUM,
    EMAX
}

// export const ImplantMaterials = ['Porselein €195', 'Zirconium €295', 'E-Maz €315'];

// Brug
export const BrugOptions = ['Driedelige brug 3x material-crown', 'Vierdelige brug 4x material-crown', 'Vijfdelige brug 5x material-crown'];
export const BrugMaterials = ['Porselein €195', 'Zirconium €295', 'E-Maz €315'];

// AllOn
export enum AllOn {
    NONE,
    ALL_ON_4,
    ALL_ON_6
}
export enum AllOnMaterials {
    PORSELEIN,
    ZIRCOMIUM
}
// export const AllOn = ['All on 4', 'All on 6'];
// export const AllOn4Options = ['Porselein  €13,500', 'Zirconium  €14,500'];
// export const AllOn6Options = ['Porselein  €15,500', 'Zirconium  €15,500'];

// Wortel
export const Wortel = ['1   €125', '2   €165', '3     €195'];

// SinusLift
export const Sinuslift = ['Open €1155', 'Gesloten €750'];

// Selected Implantaat tooth
export const SelectedImplantaatTeeth = [];

// type TeethOption<T extends ImplantType, TData extends object = {}> = { type: T } & TData;

// type Implant = TeethOption<
//     | ImplantType.ZIRCONIUM
//     | ImplantType.PORCELAIN
//     | ImplantType.EMAX
//     | ImplantType.ZIRCONIUM_SCREW
//     | ImplantType.PORCELAIN_SCREW
//     | ImplantType.EMAX_SCREW,
//     { quality: ImplantQuality }
// >;

// type Other = TeethOption<ImplantType.DEFAULT | ImplantType.WHITE | ImplantType.SCREW | ImplantType.PURPLE | ImplantType.BLANK>;

// export type TeethOptions = Implant | Other;

export interface TeethOptions {
    extraction: boolean;
    implantaat: boolean;
    boneGraft: boolean;
    implantaatBrand: ImplantBrand;
    attachment: AttachmentType;
    attachmentMaterial: AttachmentMaterial;
}

export const defaultTooth: TeethOptions = {
    extraction: false,
    implantaat: false,
    boneGraft: false,
    implantaatBrand: ImplantBrand.MIS,
    attachment: AttachmentType.NONE,
    attachmentMaterial: AttachmentMaterial.PORCELAIN
};

export const initial = mirror([
    { ...defaultTooth },
    { ...defaultTooth },
    { ...defaultTooth },
    { ...defaultTooth },
    { ...defaultTooth },
    { ...defaultTooth },
    { ...defaultTooth },
    { ...defaultTooth }
]);

// defaultState for DentalState
export const defaultState = {
    firstname: '',
    lastname: '',
    gender: Gender.MALE,
    email: '',
    date: new Date(),
    extraction: false,
    implant: false,
    boneGraft: false,
    implantBrand: ImplantBrand.MIS,
    attachmentType: AttachmentType.NONE,
    attachemntMaterial: AttachmentMaterial.PORCELAIN,
    allOn: AllOn.NONE,
    AllOnOptions: AllOnMaterials.PORSELEIN,
    treatments: '',
    teeth: initial
};

export type DentalState = typeof defaultState;
