import { TeethOptions } from './data';

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

function mirror(base: TeethOptions[]) {
    const row = [...base, ...base.reverse().map(v => ({ ...v }))];
    return [row.map(v => ({ ...v })), row.map(v => ({ ...v }))];
}

export const initial = mirror([
    { type: ImplantType.DEFAULT },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.DEFAULT },
    { type: ImplantType.DEFAULT },
])

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
