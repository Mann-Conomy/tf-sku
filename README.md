# tf-sku

A static Node.js class for formatting Team Fortress 2 items into strings or JSON objects.

[![npm version](https://img.shields.io/npm/v/@mann-conomy/tf-sku?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/tf-sku)
[![npm downloads](https://img.shields.io/npm/d18m/@mann-conomy/tf-sku?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/tf-sku)
[![Node.js version](https://img.shields.io/node/v/@mann-conomy/tf-sku?style=flat-square&logo=nodedotjs)](https://nodejs.org/en/about/releases/)
[![GitHub actions](https://img.shields.io/github/actions/workflow/status/Mann-Conomy/tf-sku/test.yml?branch=main&style=flat-square&logo=github&label=test)](https://github.com/Mann-Conomy/tf-sku/blob/main/.github/workflows/test.yml)
[![GitHub license](https://img.shields.io/github/license/Mann-Conomy/tf-sku?style=flat-square&logo=github)](https://github.com/Mann-Conomy/tf-sku/blob/main/LICENSE)

## Installation

Using [npm](https://www.npmjs.com/package/@mann-conomy/tf-sku):

```bash
$ npm install @mann-conomy/tf-sku
```

Using [yarn](https://yarnpkg.com/package/@mann-conomy/tf-sku):

```bash
$ yarn add @mann-conomy/tf-sku
```

## Testing

Using [npm](https://docs.npmjs.com/cli/v8/commands/npm-run-script):
```bash
$ npm test
```

Using [yarn](https://classic.yarnpkg.com/lang/en/docs/cli/run/):
```bash
$ yarn test
```

## Examples

Formatting Team Fortress 2 item objects into concise strings that captures their unique attributes.

```js
import { SKU } from "@mann-conomy/tf-sku";

try {
    // Object representation of a Professional Festivized Australium Medi Gun
    const item = {
        defindex: 211,
        quality: 11,
        australium: true,
        killstreak: 3, 
        festive: true
    }

    // Convert the item object into a SKU string
    const sku = SKU.stringify(item);

    console.log(sku); // 211;11;australium;kt-3;festive
} catch (error) {
    console.error("Error creating SKU string", error.message);
}
```

Converting strings into structured objects that represent the attributes of Team Fortress 2 items.

```js
import { SKU } from "@mann-conomy/tf-sku";

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
} catch (error) {
    console.error("Error parsing SKU string", error.message);
}
```

Some more examples are available in the [examples](https://github.com/Mann-Conomy/tf-sku/tree/main/examples) and [test](https://github.com/Mann-Conomy/tf-sku/tree/main/test) directories.

## Documentation

See the [Wiki pages](https://github.com/Mann-Conomy/tf-sku/wiki) for further documentation.

## License

[MIT](LICENSE)

Copyright 2024, The Mann-Conomy Project
