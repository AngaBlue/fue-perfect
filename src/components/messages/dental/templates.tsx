import { ImplantType, TeethOptions } from './data';

function mirror(base: TeethOptions[]) {
    const row = [...base, ...base.reverse().map(v => ({ ...v }))];
    return [row.map(v => ({ ...v })), row.map(v => ({ ...v }))];
}

export const allOn4 = mirror([
    { type: ImplantType.BLANK },
    { type: ImplantType.BLANK },
    { type: ImplantType.BLANK },
    { type: ImplantType.ZIRCONIUM, quality: 'A' },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.ZIRCONIUM, quality: 'A' },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.DEFAULT }
]);

export const allOn6 = mirror([
    { type: ImplantType.BLANK },
    { type: ImplantType.BLANK },
    { type: ImplantType.ZIRCONIUM, quality: 'A' },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.ZIRCONIUM, quality: 'A' },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.ZIRCONIUM, quality: 'A' },
    { type: ImplantType.DEFAULT }
]);
