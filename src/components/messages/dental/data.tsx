export const City = ['Istanbul', 'Antalya'];

export const Reason = ['Cosmetisch', 'Medisch', 'Cosmetisch en Medisch'];

export const Surgery = ['Implantologie', 'Sinus behandeling gesloten/open', 'Extractie (trekken tand kies)'];

export const Prosthesis = [
    'Kroon',
    'Brug kroon',
    'Facing',
    'All-on 4 prothese / porseleinen',
    'All-on 4 prothese / zirkonium',
    'All on 6 prothese / porseleinen',
    'All on 6 prothese / zirkonium'
];

export const defaultState = {
    firstname: '',
    lastname: '',
    email: '',
    date: '',
    city: City[0],
    reason: Reason[0],
    treatments: '',
    surgery: Surgery[0],
    prosthesis: Prosthesis[0]
};

export type DentalState = typeof defaultState;
