/**
 * Finds the length of an enum.
 *
 * @param enumerable The enum to find the length of.
 * @returns The length of the enum.
 */
export function enumLength(enumerable: object): number {
    return Object.keys(enumerable).length / 2;
}

/**
 * Creates an iterable enum value array.
 *
 * @param enumerable The enum to get the values of.
 * @returns The enum values.
 */
export function enumIterable<T extends object>(enumerable: T): T[] {
    const length = enumLength(enumerable);
    const values = [];

    for (let i = 0; i < length; i++) {
        values.push(i);
    }

    return values as unknown as T[];
}
