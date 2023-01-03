import { ImplantType } from './data';

function mirror(base: ImplantType[]) {
    const row = [...base, ...base.reverse()];
    return [[...row], [...row]];
}

export const allOn4 = mirror([
    ImplantType.BLANK,
    ImplantType.BLANK,
    ImplantType.BLANK,
    ImplantType.ZIRCONIUM,
    ImplantType.DEFAULT,
    ImplantType.ZIRCONIUM,
    ImplantType.DEFAULT,
    ImplantType.DEFAULT
]);

export const allOn6 = mirror([
    ImplantType.BLANK,
    ImplantType.BLANK,
    ImplantType.ZIRCONIUM,
    ImplantType.DEFAULT,
    ImplantType.ZIRCONIUM,
    ImplantType.DEFAULT,
    ImplantType.ZIRCONIUM,
    ImplantType.DEFAULT
]);
