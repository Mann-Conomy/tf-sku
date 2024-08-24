import SKU from "../src/classes/sku";

try {
    // String representation of a Strange Purple Energy Villain's Veil
    const sku = "393;5;u10;strange";

    // Parse the SKU string into an item object
    const item = SKU.parse(sku);

    console.log(item);
    /*
    {
        defindex: 393,
        quality: 5,
        effect: 10,
        australium: false,
        craftable: true,
        tradable: true,
        wear: null,
        paintkit: null,
        elevated: true,
        killstreak: 0,
        target: null,
        festive: false,
        craftnumber: null,
        crateseries: null,
        output: null,
        outputQuality: null,
        paint: null
    }
    */
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error parsing SKU string", error.message);
    }
}
