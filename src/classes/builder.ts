import { StringSeparator } from "../resources/enums";

/**
 * 
 */
export default class StringBuilder {
    private readonly values: string[];
    private readonly separator: string;

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
    first(): string {
        if (this.isEmpty()) {
            throw new RangeError("");
        }

        const [value] = this.values;

        if (value === undefined) {
            throw new RangeError("The last Stack element is undefined.");
        }

        return value;
    }

    /**
     * 
     * @returns 
     */
    firstInt(): number {
        const value = this.first();

        return parseInt(value);
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

        throw new RangeError("");
    }

    /**
     * 
     * @returns 
     */
    removeInt(): number {
        const value = this.firstInt();

        if (isNaN(value)) {
            throw new TypeError("The first attribute of the string is not a valid integer.");
        }

        const number = this.remove();

        return parseInt(number);
    }

    /**
     * 
     * @returns 
     */
    size(): number {
        return this.values.length;
    }

    /**
     * 
     * @returns 
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * Converts the values of the StringBuilder to a single concatenated string, separated by the defined separator.
     * @returns A concatenated string of all values in the StringBuilder, separated by the defined separator.
     */
    toString(): string {
        if (this.isEmpty()) {
            throw new RangeError("");
        }

        return this.values.join(this.separator);
    }
}
