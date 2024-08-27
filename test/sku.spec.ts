import { describe, expect, test } from "@jest/globals";
import SKU from "../src/classes/sku";

describe("SKU.stringify()", () => {
    test("should return the Strange Purple Energy Villain's Veil as a SKU string", () => {
        // Arrange
        const item = {
            defindex: 393,
            quality: 5,
            effect: 10, 
            elevated: true
        }

        // Act
        const result = SKU.stringify(item);

        // Assert
        expect(result).toBe("393;5;u10;strange");
    });

    test("should return the Professional Festivized Australium Medi Gun as a SKU string", () => {
        // Arrange
        const item = {
            defindex: 211,
            quality: 11,
            australium: true,
            killstreak: 3, 
            festive: true
        }

        // Act
        const result = SKU.stringify(item);

        // Assert
        expect(result).toBe("211;11;australium;kt-3;festive");
    });

    test("should return the Conniver's Kunai Chemistry Set as a SKU string", () => {
        // Arrange
        const item = {
            defindex: 20006,
            quality: 6,
            output: 356,
            outputQuality: 14
        }

        // Act
        const result = SKU.stringify(item);

        // Assert
        expect(result).toBe("20006;6;od-356;oq-14");
    });

    test("should return the Hot Pacific Peacemaker War Paint (Well-Worn) as a SKU string", () => {
        // Arrange
        const item = {
            defindex: 17419,
            quality: 15,
            effect: 701,
            wear: 4,
            paintkit: 419
        }

        // Act
        const result = SKU.stringify(item);

        // Assert
        expect(result).toBe("17419;15;u701;w4;pk419");
    });

    test("should return the Taunt: Conga Unusualifier as a SKU string", () => {
        // Arrange
        const item = {
            defindex: 9258,
            quality: 5,
            craftable: false,
            target: 1118
        }

        // Act
        const result = SKU.stringify(item);

        // Assert
        expect(result).toBe("9258;5;uncraftable;td-1118");
    });

    test("should return the Mann Co. Supply Munition #83 as a SKU string", () => {
        // Arrange
        const item = {
            defindex: 9258,
            quality: 6,
            crateseries: 83
        }

        // Act
        const result = SKU.stringify(item);

        // Assert
        expect(result).toBe("9258;6;c83");
    });

    test("should return the Professional Axtinguisher Kit Fabricator as a SKU string", () => {
        // Arrange
        const item = {
            defindex: 20003,
            quality: 6,
            killstreak: 3,
            target: 38,
            output: 6526,
            outputQuality: 6
        }

        // Act
        const result = SKU.stringify(item);

        // Assert
        expect(result).toBe("20003;6;kt-3;td-38;od-6526;oq-6");
    });

    test("should return the #67 Bruiser's Bandanna as a SKU string", () => {
        // Arrange
        const item = {
            defindex: 30397,
            quality: 6,
            craftnumber: 67
        }

        // Act
        const result = SKU.stringify(item);

        // Assert
        expect(result).toBe("30397;6;n67");
    });

    test("should return the default SKU string if the object is empty", () => {
        // Arrange
        const empty = Object.create(Object.prototype);

        // Act
        const sku = SKU.stringify(empty);

        // Act and assert
        expect(sku).toBe("0;0");
    });
});

describe("SKU.parse()", () => {
    test("should parse 205;11;australium;kt-3;festive into a SKU object", () => {
        // Arrange
        const sku = "205;11;australium;kt-3;festive";

        // Act
        const attributes = SKU.parse(sku);

        // Assert
        expect(attributes.defindex).toBe(205);
        expect(attributes.quality).toBe(11);
        expect(attributes.australium).toBe(true);
        expect(attributes.killstreak).toBe(3);
        expect(attributes.festive).toBe(true);
    });

    test("should parse 9258;5;uncraftable;td-31207 into a SKU object", () => {
        // Arrange
        const sku = "9258;5;uncraftable;td-31207";

        // Act
        const attributes = SKU.parse(sku);

        // Assert
        expect(attributes.defindex).toBe(9258);
        expect(attributes.quality).toBe(5);
        expect(attributes.craftable).toBe(false);
        expect(attributes.target).toBe(31207);
    });

    test("should parse 17419;15;u701;w4;pk419 into a SKU object", () => {
        // Arrange
        const sku = "17419;15;u701;w4;pk419";

        // Act
        const attributes = SKU.parse(sku);

        // Assert
        expect(attributes.defindex).toBe(17419);
        expect(attributes.quality).toBe(15);
        expect(attributes.effect).toBe(701);
        expect(attributes.wear).toBe(4);
        expect(attributes.paintkit).toBe(419);
    });

    test("should parse 393;5;u10;strange into a SKU object", () => {
        // Assert
        const sku = "393;5;u10;strange";

        // Act
        const attributes = SKU.parse(sku);

        // Assert
        expect(attributes.defindex).toBe(393);
        expect(attributes.quality).toBe(5);
        expect(attributes.effect).toBe(10);
        expect(attributes.elevated).toBe(true);
    });

    test("should parse 20002;6;kt-2;td-39;od-6523;oq-6 into a SKU object", () => {
        // Arrange
        const sku = "20002;6;kt-2;td-39;od-6523;oq-6";

        // Act
        const attributes = SKU.parse(sku);

        // Assert
        expect(attributes.defindex).toBe(20002);
        expect(attributes.quality).toBe(6);
        expect(attributes.killstreak).toBe(2);
        expect(attributes.target).toBe(39);
        expect(attributes.output).toBe(6523);
        expect(attributes.outputQuality).toBe(6);
    });

    test("should parse 538;6;n7 into a SKU object", () => {
        // Arrange
        const sku = "538;6;n7";

        // Act
        const attributes = SKU.parse(sku);

        // Assert
        expect(attributes.defindex).toBe(538);
        expect(attributes.quality).toBe(6);
        expect(attributes.craftnumber).toBe(7);
    });

    test("should throw if the string is empty", () => {
        // Act and assert
        expect(() => SKU.parse(String())).toThrow(TypeError);
    });

    test("should throw if the quality attribute is missing", () => {
        // Act and assert
        expect(() => SKU.parse("737")).toThrow(RangeError);
    });

    test("should throw if the defindex is not a valid integer", () => {
        // Arrange
        const sku = "kt-3;160";
    
        // Act and assert
        expect(() => SKU.parse(sku)).toThrow(TypeError);
    });

    test("should throw if the quality is not a valid integer", () => {
        // Arrange
        const sku = "513;australium";
    
        // Act and assert
        expect(() => SKU.parse(sku)).toThrow(TypeError);
    });
});
