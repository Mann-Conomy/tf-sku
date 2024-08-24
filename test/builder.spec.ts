import { describe, expect, test } from "@jest/globals";
import StringBuilder from "../src/classes/builder";

describe("size()", () => {
    test("should return zero when the StringBuilder is empty", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act
        const size = builder.size();

        // Assert
        expect(size).toBe(0);
    });

    test("should return 2 when the string contains 1 separator character", () => {
        // Arrange
        const sku = "5021;6"
        const builder = new StringBuilder(sku);

        // Act
        const size = builder.size();

        // Assert
        expect(size).toBe(2);
    });

    test("should return 3 when the string contains 2 separator characters", () => {
        // Arrange
        const text = "Team Fortress 2"
        const builder = new StringBuilder(text, String.fromCharCode(32));

        // Act
        const size = builder.size();

        // Assert
        expect(size).toBe(3);
    });

    test("should return 3 when the array contains 3 elements", () => {
        // Arrange
        const attributes = ["1071", "11", "kt-3"];
        const builder = new StringBuilder(attributes);

        // Act
        const size = builder.size();

        // Assert
        expect(size).toBe(attributes.length);
    });
});

describe("get()", () => {
    test("should return zero elements when the StringBuilder is empty", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act
        const result = builder.get();

        // Assert
        expect(result.length).toBe(0);
    });

    test("should return 4 elements when the string contains 3 separator characters", () => {
        // Arrange
        const sku = "20006;6;od-356;oq-14";
        const builder = new StringBuilder(sku);

        // Act
        const result = builder.get();

        // Assert
        expect(result.length).toBe(4);
    });

    test("should return 4 elements when the StringBuilder is constructed with an array", () => {
        // Arrange
        const values = ["9258", "5", "uncraftable", "td-31207"];
        const builder = new StringBuilder(values);

        // Act
        const result = builder.get();

        // Assert
        expect(result.length).toBe(values.length);
    });
});

describe("toString()", () => {
    test("should return the orginal string if no seperator characters are present", () => {
        // Arrange
        const text = "Spellbook Magazine";
        const builder = new StringBuilder(text);

        // Act
        const first = builder.toString();

        // Assert
        expect(first).toBe(text);
    });

    test("should return the strings joined together by the default seperator", () => {
        // Arrange
        const values = ["393", "5", "u10", "strange"];
        const builder = new StringBuilder(values);

        // Act
        const result = builder.toString();

        // Assert
        expect(result).toBe("393;5;u10;strange");
    });

    test("should return the strings joined together by a custom seperator", () => {
        // Arrange
        const values = ["Team", "Fortress", "2"];
        const builder = new StringBuilder(values, String.fromCharCode(32));

        // Act
        const result = builder.toString();

        // Assert
        expect(result).toBe("Team Fortress 2");
    });

    test("should throw if the StringBuilder is empty", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act and Assert
        expect(() => builder.toString()).toThrow(RangeError);
    });
});

describe("remove()", () => {
    test("should remove the first string from the StringBuilder()", () => {
        // Arrange
        const values = ["160", "3", "kt-2"];
        const builder = new StringBuilder(values);

        // Act
        const value = builder.remove();
        const size = builder.size();

        // Assert
        expect(value).toBe("160");
        expect(size).toBe(2);
    });

    test("should throw if the StringBuilder is empty", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act and assert
        expect(() => builder.remove()).toThrow(RangeError);
    });
});

describe("first()", () => {
    test("should return the first string in the StringBuilder", () => {
        // Arrange
        const values = ["5021", "6"];
        const builder = new StringBuilder(values);

        // Act
        const value = builder.first();

        // Assert
        expect(value).toBe("5021");
    });

    test("should throw if the StringBuilder is empty", () => {
        // Arrange
        const builder = new StringBuilder();

        // Act and arrange
        expect(() => builder.first()).toThrow(RangeError);
    });

    test("should throw if the first value in the StringBuilder is undefined", () => {
        // Arrange
        const values = [undefined, "11"] as string[];
        const builder = new StringBuilder(values);

        // Act and arrange
        expect(() => builder.first()).toThrow(RangeError);
    });
});
