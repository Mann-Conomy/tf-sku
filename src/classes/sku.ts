import StringBuilder from "./builder";
import { AttributeKey, ItemQuality } from "../resources/enums";
import type { AttributePrefix, ISKU } from "../types/attributes";
import { combineAttributes, getFilteredObjectEntries, isAustralium, isElevated, isFestive, isUncraftable, isUntradable, reverseKey } from "../lib/utils";

const ATTRIBUTES: Readonly<ISKU> = Object.freeze({
    defindex: 0,
    quality: 0,
    effect: null,
    australium: false,
    craftable: true,
    tradable: true,
    wear: null,
    paintkit: null,
    elevated: false,
    killstreak: 0,
    target: null,
    festive: false,
    craftnumber: null,
    crateseries: null,
    output: null,
    outputQuality: null,
    paint: null
});

const CHARACTERS: Readonly<AttributePrefix> = Object.freeze({
    effect: "u",
    target: "td-",
    output: "od-",
    outputQuality: "oq-",
    killstreak: "kt-",
    crateseries: "c",
    wear: "w",
    paintkit: "pk",
    craftnumber: "n"
});

/**
 * A static class for formatting Team Fortress 2 items into strings or JSON objects.
 */
export default class SKU {
    /**
     * Prettifies the `target` object by filling in any undefined properties with values from the `source` object.
     * @param target The object to be prettified. If a property is defined in the target, it is preserved.
     * @param source The source object used as a fallback for undefined properties in the target.
     * @returns A new object containing properties from the target where available or from the source where the target properties are undefined.
     */
    private static prettify(target: Partial<ISKU>, source: Readonly<ISKU>) {
        const attributes: Partial<ISKU> = Object.create(Object.prototype);

        for (const key of Object.keys(source)) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                attributes[key] = target[key] !== undefined ? target[key] : source[key];
            }
        }

        return attributes as ISKU;
    }

    /**
     * Converts an `ISKU` object into a stock-keeping unit (SKU) string.
     * @param object The SKU object to be converted to a string.
     * @throws An error if the `ISKU` object cannot be converted into a valid SKU string.
     * @returns The SKU object serialized as a string.
     */
    static stringify(object: Partial<ISKU>): string {
        const builder = new StringBuilder();

        const attributes = SKU.prettify(object, ATTRIBUTES);

        for(const [key, value] of getFilteredObjectEntries(attributes)) {
            if (Object.prototype.hasOwnProperty.call(CHARACTERS, key)) {
                const attribute = combineAttributes(key, value, CHARACTERS);

                builder.append(attribute);

                continue;
            }

            if (isAustralium(key, value) || isFestive(key, value)) {
                builder.append(key);

                continue;
            }

            if (isUntradable(key, value) || isUncraftable(key, value)) {
                const attribute = reverseKey(key);

                builder.append(attribute);

                continue;
            }

            if (isElevated(key, value)) {
                builder.append(ItemQuality.Strange);
                
                continue;
            }
            
            if (key === AttributeKey.Defindex || key === AttributeKey.Quality) {
                builder.append(value);
            }
        }

        return builder.toString();
    }

    /**
     * Parses a stock-keeping unit (SKU) string and converts it into an `ISKU` object.
     * @param text The SKU string to be parsed.
     * @throws An error if the SKU string cannot be parsed into a valid `ISKU` object.
     * @returns A new `ISKU` object created from the parsed SKU string.
     */
    static parse(text: string): ISKU {
        const builder = new StringBuilder(text);

        const defindex = builder.removeInt();
        const quality = builder.removeInt();

        const attributes: Partial<ISKU> = { defindex, quality };

        for (const attribute of builder.getAllStrings()) {
            if (attribute === AttributeKey.Australium || attribute === AttributeKey.Festive) {
                attributes[attribute] = true;
            }

            if (attribute === AttributeKey.Uncraftable || attribute === AttributeKey.Untradable) {
                const key = attribute.substring(2);

                attributes[key] = false;
            }

            if (attribute === AttributeKey.Strange) {
                attributes.elevated = true;
            }

            for (const [key, value] of Object.entries(CHARACTERS)) {
                const suffix = attribute.substring(value.length);
                const number = parseInt(suffix);

                if (attribute.startsWith(value) && !isNaN(number)) {
                    attributes[key] = number;
                }
            }
        }

        return SKU.prettify(attributes, ATTRIBUTES);
    }
}
