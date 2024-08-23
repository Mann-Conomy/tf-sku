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

    test("should return 2", () => {
        // Arrange
        const sku = "5021;6"
        const builder = new StringBuilder(sku);

        // Act
        const size = builder.size();

        // Assert
        expect(size).toBe(2);
    });

    test("should return 3", () => {
        // Arrange
        const text = "Team Fortress 2"
        const builder = new StringBuilder(text, " ");

        console.log(builder.get())

        // Act
        const size = builder.size();

        // Assert
        expect(size).toBe(3);
    });

    test("should return 3", () => {
        // Arrange
        const attributes = ["1071", "11", "kt-3"];
        const builder = new StringBuilder(attributes);

        // Act
        const size = builder.size();

        // Assert
        expect(size).toBe(3);
    });
});