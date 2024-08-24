import SKU from "../src/classes/sku";
import type { ISKU } from "../src/types/attributes";

try {
    // Object representation of a Professional Festivized Australium Medi Gun
    const item: Partial<ISKU> = {
        defindex: 211,
        quality: 11,
        australium: true,
        killstreak: 3, 
        festive: true
    }

    // Convert the item object into a SKU string
    const sku = SKU.stringify(item);

    console.log(sku); // 211;11;australium;kt-3;festive
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error creating SKU string", error.message);
    }
}
