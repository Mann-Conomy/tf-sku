import StringBuilder from "../classes/builder";
import { AttributeKey } from "../resources/enums";
import type { AttributeValue, ISKU } from "../types/attributes";

/**
 * Filters an object entry based on the key and value.
 * @param key The key of the entry being evaluated.
 * @param value The value of the entry being evaluated.
 * @returns True if the entry should be included in the filtered results, otherwise false.
 */
export function filterObjectEntry(key: string, value: AttributeValue): boolean {
    return !(value === null || (value === 0 && key === AttributeKey.Killstreak));
}

/**
 * Filters and maps the entries of a given SKU object into an array of strings.
 * @param object The SKU object containing key-value pairs to be filtered.
 * @returns An array of filtered and mapped key-value pairs.
 */
export function getFilteredObjectEntries(object: ISKU): [string, string][] {
    const entries = Object.entries(object);

    const attributes = entries.filter(([key, value]) => {
        return filterObjectEntry(key, value);
    });

    return attributes.map(([key, value]) => [key, String(value)]);
}

/**
 * Joins an array of strings together into a single string.
 * @param values Any number of string arguments that will be joined together.
 * @returns The concatenated result of all the input strings.
 */
export function join(...values: string[]) {
    const builder = new StringBuilder(values, String());

    return builder.toString();
}

/**
 * Combines the prefix associated with a given attribute key from the record and concatenates it with the provided value.
 * @param key The attribute key to look up in the SKU object.
 * @param value The value to concatenate with the prefix.
 * @param object The SKU object containing key-value pairs where the key is the attribute and the value is its corresponding prefix.
 * @returns The concatenated string of the prefix and value.
 * @throws A TypeError if the provided attribute key does not exist in the record.
 */
export function combineAttributes(key: string, value: string, object: Record<string, string>) {
    const prefix = object[key];

    if (prefix) {
        return join(prefix, value);
    }

    throw new TypeError("The provided attribute key does not exist on the SKU object.");
}

/**
 * Reverses the key by prefixing it with "un" if the key matches specific attribute keys.
 * @param key The attribute key to be reversed.
 * @returns The reversed key with the "un" prefix.
 * @throws An error if the key does not match `craftable` or `tradable`.
 */
export function reverseKey(key: string): string {
    if (!(key === AttributeKey.Craftable || key === AttributeKey.Tradable)) {
        throw new Error("The provided key is invalid. It must be either \"craftable\" or \"tradable\".");
    }

    return join("un", key);
}

/**
 * Checks if the given key and value represent an australium weapon.
 * @param key The key to check against an australium weapon's attribute key.
 * @param value The value should be true if the item is an australium weapon, otherwise false.
 * @returns True if the item is an australium weapon, otherwise false.
 */
export function isAustralium(key: string, value: string): boolean {
    return key === AttributeKey.Australium && value === String(true);
}

/**
 * Checks if the given key and value represent a festive weapon.
 * @param key The key to check against a festive weapon's attribute key.
 * @param value The value should be true if the item is a festive weapon, otherwise false.
 * @returns True if the item is a festive weapon, otherwise false.
 */
export function isFestive(key: string, value: string): boolean {
    return key === AttributeKey.Festive && value === String(true);
}

/**
 * Checks if the given key and value represent a untradable item.
 * @param key The key to check against an item's untradable key.
 * @param value The value should be false if the item is untradable, otherwise true.
 * @returns True if the item is an untradable weapon, otherwise false.
 */
export function isUntradable(key: string, value: string): boolean {
    return key === AttributeKey.Tradable && value === String(false);
}

/**
 * Checks if the given key and value represent a uncraftable item.
 * @param key The key to check against an item's uncraftable key.
 * @param value The value should be false if the item is uncraftable, otherwise true.
 * @returns True if the item is uncraftable, otherwise false.
 */
export function isUncraftable(key: string, value: string): boolean {
    return key === AttributeKey.Craftable && value === String(false);
}

/**
 * Checks if the given key and value represent an elevated item.
 * @param key The key to check against an item's elevated key.
 * @param value The value should be true if the item quality is elevated, otherwise true.
 * @returns True if the item has an elevated quality, otherwise false.
 */
export function isElevated(key: string, value: string): boolean {
    return key === AttributeKey.Elevated && value === String(true);
}
