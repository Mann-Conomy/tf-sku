import { describe, expect, test } from "@jest/globals";
import { combineAttributes, reverseKey } from "../src/lib/utils";

describe("combineAttributes()", () => {
    test("should combine 10 with the value from the attributes object", () => {
        // Arrange
        const attributes = {
            effect: "u",
            killstreak: "kt-",
        }

        // Act
        const result = combineAttributes("effect", "10", attributes);

        // Assert
        expect(result).toBe("u10");
    });

    test("should throw if the key does not exist on the attributes object", () => {
        // Arrange
        const attributes = {
            effect: "u",
            killstreak: "kt-",
        }

        // Act and assert
        expect(() => combineAttributes("size", "3", attributes)).toThrow(TypeError);
    });
});

describe("reverseKey()", () => {
    test("should return \"untradable\" if the key is \"tradable\"", () => {
        // Act
        const result = reverseKey("tradable");

        // Assert
        expect(result).toBe("untradable");
    });

    test("should return \"uncraftable\" if the key is \"craftable\"", () => {
        // Act
        const result = reverseKey("craftable");

        // Assert
        expect(result).toBe("uncraftable");
    });

    test("should throw if the key is not \"craftable\" or \"tradable\"", () => {
        // Act and assert
        expect(() => reverseKey("australium")).toThrow(Error);
    });
});
