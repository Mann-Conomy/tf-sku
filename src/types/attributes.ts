export type AnyAttribute = any;

export type AttributeValue = string | number | boolean | null;

export type NullableAttributeValue = AttributeValue | null;

export interface UnitAttributes extends Record<string, AttributeValue> {
    defindex: number;
    quality: number;
    craftable: boolean;
    tradable: boolean;
    killstreak: number;
    australium: boolean;
    effect: number | null;
    festive: boolean;
    paintkit: number | null;
    wear: number | null;
    elevated: boolean;
    craftnumber: number | null;
    crateseries: number | null;
    target: number | null;
    output: number | null;
    outputQuality: number | null;
    paint: number | null;
}

export interface ItemAttributePrefix {

}

export interface ItemAttributes {

}

export interface ISKU {
    defindex: number;
    quality: number;
    craftable: boolean;
    tradable: boolean;
    killstreak: number;
    australium: boolean;
    effect: number | null;
    festive: boolean;
    paintkit: number | null;
    wear: number | null;
    elevated: boolean;
    craftnumber: number | null;
    crateseries: number | null;
    target: number | null;
    output: number | null;
    outputQuality: number | null;
    paint: number | null;
}

export type PartialUnitAttributes = Partial<UnitAttributes>;

export interface AttributePrefix extends Record<string, string> {
    effect: string;
    target: string;
    output: string;
    outputQuality: string;
    killstreak: string;
    crateseries: string;
    wear: string;
    paintkit: string;
    craftnumber: string;
}

export interface BuilderOptions {
    values: string | string[],
    separator: string
}
