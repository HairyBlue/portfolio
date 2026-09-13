# Case Study: Camote Utils
**Broadsheet Section: `[ FEATURED CASE STUDIES ]` · Open Source & Primitives**  
*Title:* TypeScript Engineering Primitives  
*Ecosystem:* Node.js / TypeScript / NPM  
*Author:* Nicki Marty Pecision ([@HairyBlue](https://github.com/HairyBlue))  

---

## Executive Summary
**Camote Utils** is an open-source TypeScript utility library providing high-performance, strictly typed functional primitives for string manipulation, HTML sanitization, and complex data serialization. Designed to eliminate bloated third-party dependencies, the package delivers lightweight, zero-dependency building blocks for enterprise JavaScript and TypeScript codebases.

---

## The Challenge
Modern web applications frequently require data transformations such as:
1. Transforming nested client query objects into valid, encoded URL query strings.
2. Converting user-supplied text containing reserved or dangerous characters into safe HTML entities.

Too often, teams solve these problems by:
- Importing massive utility libraries with hundreds of unused transitive dependencies.
- Writing ad-hoc inline serialization that fails on edge cases (e.g. arrays of primitives, deeply nested structures, boolean encoding, `null` vs `undefined` handling, unicode symbols).

---

## The Engineering Solution

### 1. Strict Type Safety & Edge Case Handling
Authored robust utility functions adhering to TypeScript's strictest compiler options (`strict: true`, `noImplicitAny`, `exactOptionalPropertyTypes`):

- **`objectToQueryString(obj, options?)`**:
  - Recursively flattens complex nested objects.
  - Automatically encodes URI components.
  - Correctly serializes arrays according to configurable strategies (e.g., bracket notation `key[]=val` or repeat notation `key=val1&key=val2`).
  - Gracefully ignores `undefined` or filtered empty values.

- **`toHtmlEntities(str)`**:
  - Replaces reserved HTML characters (`&`, `<`, `>`, `"`, `'`) with deterministic named or numeric character references.
  - Benchmarked for maximum throughput during high-frequency string transformations.

### 2. Zero-Dependency & Tree-Shakeable Packaging
- Packaged with dual ESM and CommonJS exports to guarantee full compatibility with both modern bundlers (Vite, Rollup, Webpack) and legacy Node environments.
- Maintained a zero runtime dependency footprint, reducing bundle impact to mere bytes.

---

## Key Primitives & API Examples

```typescript
import { objectToQueryString, toHtmlEntities } from 'camote-utils'

// URL Query String Serialization
const params = {
  search: "provincial governance",
  filters: { category: "advisories", active: true },
  tags: ["procurement", "bulletin"]
}

const query = objectToQueryString(params)
// Output: "search=provincial%20governance&filters%5Bcategory%5D=advisories&filters%5Bactive%5D=true&tags%5B%5D=procurement&tags%5B%5D=bulletin"

// HTML Entity Sanitization
const unsafeInput = '<script>alert("XSS & Injection")</script>'
const safeHtml = toHtmlEntities(unsafeInput)
// Output: "&lt;script&gt;alert(&quot;XSS &amp; Injection&quot;)&lt;/script&gt;"
```

---

## Technical Specifications
- **Author:** Nicki Marty Pecision
- **Repository:** [https://github.com/HairyBlue](https://github.com/HairyBlue)
- **Technologies:** TypeScript, JavaScript, Node.js, Vitest, NPM
