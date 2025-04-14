import type { TeethOptions } from './data';

export function mirror(base: TeethOptions[]): TeethOptions[][] {
	const row = [...base, ...base.reverse().map(v => ({ ...v }))];
	return [row.map(v => ({ ...v })), row.map(v => ({ ...v }))];
}

// Reverse lookup for internal tooth coords to displayed position
const toothLookup = [
	[18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28],
	[48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38]
];

export function filterToIdentifier(teeth: TeethOptions[][], filter: (tooth: TeethOptions) => boolean): number[] {
	return teeth
		.flatMap((toothArr, i) =>
			toothArr.map((tooth, j) => ({
				...tooth,
				coord: [i, j]
			}))
		)
		.filter(filter)
		.map(tooth => toothLookup[tooth.coord[0]][tooth.coord[1]]);
}
