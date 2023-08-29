import { TeethOptions } from './data';

export function mirror(base: TeethOptions[]) {
    const row = [...base, ...base.reverse().map(v => ({ ...v }))];
    return [row.map(v => ({ ...v })), row.map(v => ({ ...v }))];
}
