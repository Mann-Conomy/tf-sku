import StringBuilder from "../classes/builder";
import { AttributeKey, StringSeparator } from "../resources/enums";
import type { AttributeValue, UnitAttributes } from "../types/attributes";

/**
 * 
 * @param attr 
 * @returns 
 */
export function getFilteredObjectEntries(object: UnitAttributes): [string, string][] {
    const entries = Object.entries(object);

    const attributes = entries.filter((entry) => !(entry.includes(null, 1) || entry.includes(0, 1)));

    return attributes.map(([key, value]) => [key, String(value)]);
}

/**
 * 
 * @param values A 
 * @returns 
 */
export function join(...values: string[]) {
    const builder = new StringBuilder(values, String());

    return builder.toString();
}

/**
 * 
 * @param key 
 * @param value 
 * @param record 
 * @returns 
 */
export function getAttributePrefix(key: string, value: string, record: Record<string, string>) {
    const prefix = record[key];

    if (prefix) {
        return join(prefix, value);
    }

    throw new TypeError("The string contains an invalid character.");
}

/**
 * 
 * @param key 
 * @returns 
 */
export function reverseKey(key: string): string {
    if (!(key === AttributeKey.Craftable || key === AttributeKey.Tradable)) {
        throw new Error("Invalid");
    }

    return join("un", key);
}

/**
 * Checks if the given key and value represent an australium weapon.
 * @param key The key to check against an Australium weapon's key.
 * @param value The value to check if it's equal to the string representation of `true`.
 * @returns True if the weapon is ` and the value is the string `"true"`, otherwise `false`.
 */
export function isAustralium(key: string, value: string) {
    return key === AttributeKey.Australium && value === String(true);
}

/**
 * Checks if the given key and value represent a festive weapon.
 * @param key The key to check against a festive weapon's key.
 * @param value 
 * @returns 
 */
export function isFestive(key: string, value: string) {
    return key === AttributeKey.Festive && value === String(true);
}

/**
 * Checks if the given key and value represent an australium weapon.
 * @param key 
 * @param value 
 * @returns 
 */
export function isTradable(key: string, value: string) {
    return key === AttributeKey.Tradable && value === String(true);
}

/**
 * Checks if the given key and value represent an australium weapon.
 * @param key 
 * @param value 
 * @returns 
 */
export function isUntradable(key: string, value: string) {
    return key === AttributeKey.Tradable && value === String(false);
}

/**
 * Checks if the given key and value represent an australium weapon.
 * @param key 
 * @param value 
 * @returns 
 */
export function isCraftable(key: string, value: string) {
    return key === AttributeKey.Craftable && value === String(true);
}

/**
 * Checks if the given key and value represent an australium weapon.
 * @param key 
 * @param value 
 * @returns 
 */
export function isUncraftable(key: string, value: string) {
    return key === AttributeKey.Craftable && value === String(false);
}

/**
 * Checks if the given key and value represent an australium weapon.
 * @param key 
 * @param value 
 * @returns 
 */
export function isElevated(key: string, value: string) {
    return key === AttributeKey.Elevated && value === String(true);
}
