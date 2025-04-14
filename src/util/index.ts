export type Enum = Record<string, number | string>;
export type EnumValue<E extends Enum> = E extends { [key: string]: infer ET | string } ? ET : never;

/**
 * Finds the length of an enum.
 *
 * @param enumerable The enum to find the length of.
 * @returns The length of the enum.
 */
export function enumLength(enumerable: Enum): number {
	return Object.keys(enumerable).length / 2;
}

/**
 * Creates an iterable enum value array.
 *
 * @param enumerable The enum to get the values of.
 * @returns The enum values.
 */
export function enumIterable<T extends Enum>(enumerable: T): EnumValue<T>[] {
	const length = enumLength(enumerable);
	const values: EnumValue<T>[] = [];

	for (let i = 0; i < length; i++) {
		values.push(i as unknown as EnumValue<T>);
	}

	return values;
}
