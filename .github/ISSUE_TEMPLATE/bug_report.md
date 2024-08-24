---
name: "Bug report"
about: "Report a bug with the tf-sku library"
title: "[BUG] - "
labels: ["bug"]
---

## Describe the bug

Please provide a clear and concise description of the bug. Include any relevant information that might help us understand the issue.

## Steps to reproduce the behaviour

Please provide detailed steps for reproducing the issue.
1. Import class '...'
2. Call stringify '....'
3. Run '....'
4. Throws error

## Expected behaviour

A clear and concise description of what you expected to happen.

## Actual behaviour

A clear and concise description of what happens.

## Minimal reproducible example
Calling `stringify()` on a `SKU` object returns "Error creating SKU string...".

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

## Environment

- OS: [e.g. Windows 11, macOS 14 Sonoma, Ubuntu 24.04]
- IDE: [e.g. Visual Studio Code, WebStorm]

## Stacktrace

If applicable, add any error messages you are receiving. Please include the full stacktrace or add a screenshot.

## Additional Context

Add any other context about the problem here, such as specific files or configurations that might be causing the issue. If the problem is specific to a particular setup, please provide details.

## Screenshots

If applicable, add screenshots to help explain your problem.

## Potential Solutions

If you have an idea of what might be causing the problem or how to fix it, please share it here.

## Related Issues

If there are any related issues, please link them here.

---

**Please note that if the issue is not reproducible, it may not be addressed. Make sure to provide as much information as possible.**

Your feedback is invaluable. Thank you for helping improve the Mann-Conomy Project!
