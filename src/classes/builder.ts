import { StringSeparator } from "../resources/enums";

export default class StringBuilder {
    private readonly values: string[]
    private readonly separator: string

    /**
     * Creates a new instance of StringBuilder.
     * @param values A string o
     * @param separator A string to use in separating the string. If omitted, a single-element array containing the entire string is returned.
     */
    constructor(values: string | string[] = [], separator?: string) {
        this.separator = (typeof separator === "string") ? separator : StringSeparator.Semicolon;

        this.values = (Array.isArray(values)) ? values : values.split(this.separator);
    }

    /**
     * 
     * @returns 
     */
    get(): string[] {
        return this.values;
    }

    /**
     * Appends a string to the end of the StringBuilder.
     * @param value The string to append to the end of the StringBuilder.
     */
    append(value: string) {
        this.values.push(value);
    }

    /**
     * 
     * @returns 
     */
    remove(): string {
        const value = this.values.shift();

        if (value !== undefined) {
            return value;
        }

        throw new RangeError();
    }

    // Should not throw, but only remove the first value it is a valid number
    // If not it should return a number?
    removeInt(): number {
        const value = this.remove();

        const yikes = parseInt(value);

        if (isNaN(yikes)) {
            throw new TypeError();
        }

        return yikes
    }

    /**
     * 
     * @returns 
     */
    size(): number {
        return this.values.length;
    }

    /**
     * Converts the values of the StringBuilder to a single concatenated string, separated by the defined separator.
     * @returns A concatenated string of all values in the StringBuilder, separated by the defined separator.
     */
    toString(): string {
        if (this.size() === 0) {
            throw new RangeError("");
        }

        return this.values.join(this.separator);
    }
}
