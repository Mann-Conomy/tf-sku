import SKU from "../src/classes/sku";

try {
    // Professional Festivized Australium Medi Gun
    const item = {
        defindex: 211,
        quality: 11,
        australium: true,
        killstreak: 3, 
        festive: true
    }

    // Stringify the item object
    const sku = SKU.stringify(item);

    console.log(sku); // 211;11;australium;kt-3;festive
} catch (error) {
    console.error();
}
