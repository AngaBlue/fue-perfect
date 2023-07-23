import { Gender } from '../hair/data';
import { ImplantType, initial } from './templates';

// Implant as Im plantaat
export const ImplantOptions = ['A-Kwaliteit €895', 'B-Kwaliteit €695'];
export const ImplantMaterials = ['Porselein €195', 'Zirconium €295', 'E-Maz €315'];

// Brug
export const BrugOptions = ['Driedelige brug 3x material-crown', 'Vierdelige brug 4x material-crown', 'Vijfdelige brug 5x material-crown'];
export const BrugMaterials = ['Porselein €195', 'Zirconium €295', 'E-Maz €315'];
// AllOn
export const AllOn = ['All on 4', 'All on 6'];

// Wortel
export const Wortel = ['1   €125', '2   €165', '3     €195'];

// SinusLift
export const Sinuslift = ['Open €1155', 'Gesloten €750'];

// Selected Implantaat tooth
export const SelectedImplantaatTeeth = [];

type TeethOption<T extends ImplantType, TData extends object = {}> = { type: T } & TData;

type ImplantQuality = 'A' | 'B';

type Implant = TeethOption<
    | ImplantType.ZIRCONIUM
    | ImplantType.PORCELAIN
    | ImplantType.EMAX
    | ImplantType.ZIRCONIUM_SCREW
    | ImplantType.PORCELAIN_SCREW
    | ImplantType.EMAX_SCREW,
    { quality: ImplantQuality }
>;

type Other = TeethOption<ImplantType.DEFAULT | ImplantType.WHITE | ImplantType.SCREW | ImplantType.PURPLE | ImplantType.BLANK>;

export type TeethOptions = Implant | Other;

// defaultState for DentalState
export const defaultState = {
    firstname: '',
    lastname: '',
    gender: Gender.MALE,
    email: '',
    date: new Date(),
    type: ImplantType.DEFAULT,
    implantOptions: ImplantOptions[0],
    implantMaterials: ImplantMaterials[0],
    brugOptions: BrugOptions[0],
    brugMaterials: BrugMaterials[0],
    allOn: AllOn[0],
    wortel: Wortel[0],
    sinuslift: Sinuslift[0],
    treatments: '',
    teeth: initial
};

export type DentalState = typeof defaultState;
