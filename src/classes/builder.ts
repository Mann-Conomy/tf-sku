import { StringSeparator } from "../resources/enums";

/**
 * Represents a custom StringBuilder class.
 */
export default class StringBuilder {
    private readonly values: string[];
    private readonly separator: string;

    /**
     * Creates a new instance of StringBuilder.
     * @param values A string or an array of strings to initialize the StringBuilder.
     * @param separator A string to use for separating the input string into an array.
     */
    constructor(values: string | string[] = [], separator?: string) {
        this.separator = (typeof separator === "string") ? separator : StringSeparator.Semicolon;

        this.values = (Array.isArray(values)) ? values : values.split(this.separator);
    }

    /**
     * Retrieves all strings stored in the StringBuilder.
     * @returns An array containing all the strings in the StringBuilder.
     */
    getAllStrings(): string[] {
        return this.values;
    }

    /**
     * Appends a string to the end of the StringBuilder.
     * @param value The string to append to the end of the StringBuilder.
     * @returns The size of the StringBuilder.
     */
    append(value: string): number {
        return this.values.push(value);
    }

    /**
     * Retrieves the first string from the StringBuilder.
     * @throws An error if the StringBuilder is empty or if the first string is undefined.
     * @returns The first string in the StringBuilder.
     */
    first(): string {
        if (this.isEmpty()) {
            throw new RangeError("Could not retrieve the first attribute because the StringBuilder is empty.");
        }

        const [value] = this.values;

        if (value === undefined) {
            throw new RangeError("Could not retrieve the first attribute because the first element is undefined.");
        }

        return value;
    }

    /**
     * Retrieves the first string from the StringBuilder and converts it to an integer.
     * @throws An error if the StringBuilder is empty or if the first string is undefined.
     * @returns The first string parsed as an integer.
     */
    firstInt(): number {
        const value = this.first();

        return parseInt(value);
    }

    /**
     * Removes the first string from the StringBuikder.
     * @throws A RangeError if the StringBuilder is empty.
     * @returns The removed string.
     */
    remove(): string {
        const value = this.values.shift();

        if (value !== undefined) {
            return value;
        }

        throw new RangeError("Could not remove the first attribute because the StringBuilder is empty.");
    }

    /**
     * Removes the first string from the StringBuikder and converts it to an integer.
     * @throws An error if the StringBuilder is empty or if the first string cannot be parsed into a valid integer.
     * @returns The removed string parsed as an integer.
     */
    removeInt(): number {
        const value = this.firstInt();

        if (isNaN(value)) {
            throw new TypeError("The first attribute in the StringBuilder is not a valid integer.");
        }

        const number = this.remove();

        return parseInt(number);
    }

    /**
     * Returns the number of strings in the StringBuilder.
     * @returns The size of the StringBuilder.
     */
    size(): number {
        return this.values.length;
    }

    /**
     * Checks if the StringBuilder is empty.
     * @returns True if the StringBuilder is empty, otherwise false.
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * Converts the values of the StringBuilder to a single concatenated string.
     * @returns A concatenated string of all values in the StringBuilder.
     */
    toString(): string {
        if (this.isEmpty()) {
            throw new RangeError("Could not convert the attributes to a single string because the StringBuilder is empty.");
        }

        return this.values.join(this.separator);
    }
}
