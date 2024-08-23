import { describe, expect, test } from "@jest/globals";
import SKU from "../src/classes/sku";

describe("SKU.stringify()", () => {
    test("should return the Strange Purple Energy Villain's Veil as SKU string", () => {
        // Arrange
        const values = {
            defindex: 393,
            quality: 5,
            effect: 10, 
            elevated: true
        }

        // Act
        const result = SKU.stringify(values);

        // Assert
        expect(result).toBe("393;5;u10;strange");
    });

    test("should return the Professional Festivized Australium Medi Gun as SKU string", () => {
        // Arrange
        const values = {
            defindex: 211,
            quality: 11,
            australium: true,
            killstreak: 3, 
            festive: true
        }

        // Act
        const result = SKU.stringify(values);

        // Assert
        expect(result).toBe("211;11;australium;kt-3;festive");
    });

    test("should return the Conniver's Kunai Chemistry Set as SKU string", () => {
        // Arrange
        const values = {
            defindex: 20006,
            quality: 6,
            output: 356,
            outputQuality: 14
        }

        // Act
        const result = SKU.stringify(values);

        // Assert
        expect(result).toBe("20006;6;od-356;oq-14");
    });

    test("should return the Hot Pacific Peacemaker War Paint (Well-Worn) as SKU string", () => {
        // Arrange
        const values = {
            defindex: 17419,
            quality: 15,
            effect: 701,
            wear: 4,
            paintkit: 419
        }

        // Act
        const result = SKU.stringify(values);

        // Assert
        expect(result).toBe("17419;15;u701;w4;pk419");
    });

    test("should return the Taunt: Conga Unusualifier as SKU string", () => {
        // Arrange
        const values = {
            defindex: 9258,
            quality: 5,
            craftable: false,
            target: 1118
        }

        // Act
        const result = SKU.stringify(values);

        // Assert
        expect(result).toBe("9258;5;uncraftable;td-1118");
    });

    test("should return the Mann Co. Supply Munition #83 as SKU string", () => {
        // Arrange
        const values = {
            defindex: 9258,
            quality: 6,
            crateseries: 83
        }

        // Act
        const result = SKU.stringify(values);

        // Assert
        expect(result).toBe("9258;6;c83");
    });
});

describe("SKU.parse()", () => {
    test("should parse a SKU string to an object", () => {
        const sku = "205;11;australium;kt-3;festive";

        const attributes = SKU.parse(sku);

        console.log(attributes)

        expect(attributes.defindex).toBe(205);
        expect(attributes.quality).toBe(11);
        expect(attributes.australium).toBe(true);
        expect(attributes.killstreak).toBe(3);
        expect(attributes.festive).toBe(true);
    });

    test("should parse a SKU string to an object", () => {
        const sku = "9258;5;uncraftable;td-31207";

        const attributes = SKU.parse(sku);

        expect(attributes.defindex).toBe(9258);
        expect(attributes.quality).toBe(5);
        expect(attributes.craftable).toBe(false);
        expect(attributes.target).toBe(31207);
    });

    test("should parse a SKU string to an object", () => {
        const sku = "17419;15;u701;w4;pk419";

        const attributes = SKU.parse(sku);

        expect(attributes.defindex).toBe(17419);
        expect(attributes.quality).toBe(15);
        expect(attributes.effect).toBe(701);
        expect(attributes.wear).toBe(4);
        expect(attributes.paintkit).toBe(419);
    });

    test("should parse a SKU string to an object", () => {
        const sku = "393;5;u10;strange";

        const attributes = SKU.parse(sku);

        expect(attributes.defindex).toBe(393);
        expect(attributes.quality).toBe(5);
        expect(attributes.effect).toBe(10);
        expect(attributes.elevated).toBe(true);
    });
});
