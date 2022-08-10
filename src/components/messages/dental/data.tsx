// Technic as Techniek
export const Technic = ['Implantaat', 'Brug', 'Sinuslift', 'All-on', 'Wortelkanaal behandeling'];
// Implant as Im plantaat
export const ImplantOptions = ['A-Kwaliteit €895', 'B-Kwaliteit €695'];
export const ImplantMaterials = ['Porselein €195', 'Zirconium €295', 'E-Maz €315'];
// Gender
export const Gender = {
    MALE: 'Mannelijk',
    FEMALE: 'Vrouwelijk'
};
// Brug
export const BrugOptions = [
    'Driedelige brug   3x material-crown',
    'Vierdelige brug   4x material-crown',
    'Vijfdelige brug   5x material-crown'
];
export const BrugMaterials = ['Porselein €195', 'Zirconium €295', 'E-Maz €315'];
// AllOn
export const AllOn = ['All on 4', 'All on 6'];
// Wortel
export const Wortel = ['1   €125', '2   €165', '3     €195'];
// SinusLift
export const Sinuslift = ['Open €1155', 'Gesloten €750'];
// Selected Implantaat tooth
export const SelectedImplantaatTeeth = [];
// Top Tooth Buttons 11-18 and 21-28
export const TopTooth = [
    { teethWidth: 50, teethNum: 18, clickNum: 0, teethHeight: 69 },
    { teethWidth: 57, teethNum: 17, clickNum: 0, teethHeight: 69 },
    { teethWidth: 57, teethNum: 16, clickNum: 0, teethHeight: 69 },
    { teethWidth: 35, teethNum: 15, clickNum: 0, teethHeight: 64 },
    { teethWidth: 41, teethNum: 14, clickNum: 0, teethHeight: 75 },
    { teethWidth: 42, teethNum: 13, clickNum: 0, teethHeight: 84 },
    { teethWidth: 37, teethNum: 12, clickNum: 0, teethHeight: 70 },
    { teethWidth: 43, teethNum: 11, clickNum: 0, teethHeight: 76 },

    { teethWidth: 46, teethNum: 21, clickNum: 0, teethHeight: 76 },
    { teethWidth: 35, teethNum: 22, clickNum: 0, teethHeight: 70 },
    { teethWidth: 42, teethNum: 23, clickNum: 0, teethHeight: 85 },
    { teethWidth: 42, teethNum: 24, clickNum: 0, teethHeight: 74 },
    { teethWidth: 35, teethNum: 25, clickNum: 0, teethHeight: 64 },
    { teethWidth: 60, teethNum: 26, clickNum: 0, teethHeight: 71 },
    { teethWidth: 56, teethNum: 27, clickNum: 0, teethHeight: 71 },
    { teethWidth: 50, teethNum: 28, clickNum: 0, teethHeight: 71 }
];
// Bottom Tooth Buttons 31-38 and 41-48
export const BottomTooth = [
    { teethWidth: 52, teethNum: 48, clickNum: 0, teethHeight: 58 },
    { teethWidth: 54, teethNum: 47, clickNum: 0, teethHeight: 50 },
    { teethWidth: 57, teethNum: 46, clickNum: 0, teethHeight: 62 },
    { teethWidth: 40, teethNum: 45, clickNum: 0, teethHeight: 81 },
    { teethWidth: 45, teethNum: 44, clickNum: 0, teethHeight: 90 },
    { teethWidth: 43, teethNum: 43, clickNum: 0, teethHeight: 96 },
    { teethWidth: 30, teethNum: 42, clickNum: 0, teethHeight: 74 },
    { teethWidth: 30, teethNum: 41, clickNum: 0, teethHeight: 77 },

    { teethWidth: 30, teethNum: 31, clickNum: 0, teethHeight: 78 },
    { teethWidth: 31, teethNum: 32, clickNum: 0, teethHeight: 72 },
    { teethWidth: 43, teethNum: 33, clickNum: 0, teethHeight: 97 },
    { teethWidth: 44, teethNum: 34, clickNum: 0, teethHeight: 87 },
    { teethWidth: 42, teethNum: 35, clickNum: 0, teethHeight: 81 },
    { teethWidth: 56, teethNum: 36, clickNum: 0, teethHeight: 61 },
    { teethWidth: 53, teethNum: 37, clickNum: 0, teethHeight: 50 },
    { teethWidth: 52, teethNum: 38, clickNum: 0, teethHeight: 58 }
];
// defaultState for DentalState
export const defaultState = {
    firstname: '',
    lastname: '',
    gender: Gender.MALE,
    email: '',
    date: Date.now(),
    technic: Technic[0],
    implantOptions: ImplantOptions[0],
    implantMaterials: ImplantMaterials[0],
    brugOptions: BrugOptions[0],
    brugMaterials: BrugMaterials[0],
    allOn: AllOn[0],
    wortel: Wortel[0],
    sinuslift: Sinuslift[0],
    treatments: '',
    topTooth: TopTooth,
    bottomTooth: BottomTooth
};

export type DentalState = typeof defaultState;
