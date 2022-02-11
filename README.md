# sort-object-array-by-property 
<br>
Sorts an array of objects or an array of arrays according to a single property (objects) or index (arrays), or by multiple properties/indices, through an array of properties or indices. Supports properties from nested objects and indices from nested arrays.

<br><br>
Written in:
* <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>

<br><br>
Test it on your preferred browser:
* <a href="https://runkit.com/tomasfn87/sort-object-array-by-property" target="_blank">sort-object-array-by-property - runkit.com</a>

<br><br>
# 1. Install package:
  * <a href="http://www.npmjs.com/package/@nighly/sort-object-array-by-property" target="_blank">npm i @nighly/sort-object-array-by-property</a>

<br><br>
# 2. Import package: 
  * import function 'sortObjectArrByProps' by adding one of the lines above to a Javascript or Typescript file:

---
  <strong>2.1. CommonJs:</strong>
  * <i>importing:</i>
    * const sortObjs = require("@nighly/sort-object-array-by-property");
  * <i>calling:</i>
    * single property: <strong><i>sortObjs</i>.sortObjectArrByProps( </strong><i>object_array, prop_1</i><strong> )</strong>
    * three properties: <strong><i>sortObjs</i>.sortObjectArrByProps( </strong><i>object_array, [prop_1, prop_2, prop_3]</i><strong> )</strong>

  <strong>2.1.1. CommonJs with destructuring</strong> (shorter call):
  * <i>importing:</i>
    * const { sortObjectArrByProps } = require("@nighly/sort-object-array-by-property");
  * <i>calling:</i>
    * single property: <strong>sortObjectArrByProps( </strong><i>object_array, prop_1</i><strong> )</strong>
    * three properties: <strong>sortObjectArrByProps( </strong><i>object_array, [prop_1, prop_2, prop_3]</i><strong> )</strong>

---  
  <strong>2.2. ES:</strong>
  * <i>importing:</i>
    * import { sortObjectArrByProps } from "@nighly/sort-object-array-by-property/dist/sortObjArrByProps.js";
  * <i>calling:</i>
    * add <strong>"type": "module"</strong> to 'package.json' or change file extension from <strong>'.js'</strong> to <strong>'.mjs'</strong>
    * single property: <strong>sortObjectArrByProps( </strong><i>object_array, prop_1</i><strong> )</strong>
    * three properties: <strong>sortObjectArrByProps( </strong><i>object_array, [ prop_1, prop_2, prop_3 ]</i><strong> )</strong>

---
  <strong>2.3. Typescript:</strong>
  * <i>importing:</i>
    * import { sortObjectArrByProps } from "@nighly/sort-object-array-by-property";
  * <i>calling:</i>
    * single property: <strong>sortObjectArrByProps( </strong><i>object_array, prop_1</i><strong> )</strong>
    * three properties: <strong>sortObjectArrByProps( </strong><i>object_array, [ prop_1, prop_2, prop_3 ]</i><strong> )</strong>

<br><br>
# 3. Usage:
  - <strong>sortObjectArrByProps( </strong><i>objArr, objProps</i><strong> )</strong>
  - <strong>sortObjectArrByProps( </strong><i>objArr, objProps, reverse</i><strong> )</strong>
  - <strong>sortObjectArrByProps( </strong><i>objArr, [ ...objProps ]</i><strong> )</strong>
  - <strong>sortObjectArrByProps( </strong><i>objArr, [ ...objProps ]</i>, reverse<strong> )</strong>
---
  '<strong>sortObjectArrByProps</strong>' sorts '<strong>objArr</strong>', an array containing objects or other arrays according to '<strong>objProps</strong>' value(s), that can be either:

---
  <strong>3.1. a single property:</strong>
  * <i>"name"</i> or <i>"_id"</i> (an object's property); <i>0</i> or <i>2</i> (an array's index)
---
  <strong>3.2. two, more or all properties:</strong>
  * <i>["name", "age"]</i> or <i>["type", "price"]</i>; <i>[0, 1]</i> or <i>[2, 5]</i> (an array of objects' properties; an array of arrays' indices)
---

  <strong>using nested objects' properties or nested arrays' indices to sort:</strong>
  * To use nested objects' properties or nested arrays' indices, use the syntax: 
```
  'a.b.c'    ->    { a: { b: { c: 1 } } }    ->    1
  '0.0.0'    ->        [ [ [ 2 ] ] ]         ->    2
```
---
  * Also works with combinations of objects an arrays:
```  
  'a.0.b'    ->      { a: [ { b: 3 } ] }     ->    3
  '0.a.0'    ->       [ { a: [ 4 ] } ]       ->    4
```
---
  * <i>calling:</i>
    * <strong>sorbObjectArrByProps( </strong><i>objArr</i>, <i>'a.b.c'</i><strong> )</strong>
    * <strong>sortObjectArrByProps( </strong><i>arrArr</i>, <i>'0.0.0'</i><strong> )</strong>
---
  * the third and optional parameter, '<strong>reverse</strong>', can receive as argument <strong>'r'</strong> or <strong>'R'</strong> to produce a reversed output
---
  * the original array remains untouched.

<br><br>
# 4. Examples:
---

```
sortObjectArrByProps([
  { a: 4, b: 2 },    ->   { a: 1, b: 4 },
  { a: 3, b: 5 },    ->   { a: 2, b: 3 },
  { a: 1, b: 4 },    ->   { a: 3, b: 5 },
  { a: 5, b: 1 },    ->   { a: 4, b: 2 },
  { a: 2, b: 3 }     ->   { a: 5, b: 1 }
], 'a')

sortObjectArrByProps([
  { a: 4, b: 2 },    ->   { a: 5, b: 1 },
  { a: 3, b: 5 },    ->   { a: 4, b: 2 },
  { a: 1, b: 4 },    ->   { a: 3, b: 5 },
  { a: 5, b: 1 },    ->   { a: 2, b: 3 },
  { a: 2, b: 3 }     ->   { a: 1, b: 4 }
], 'a', 'r')

sortObjectArrByProps([
  { a: 4, b: 2 },    ->   { a: 5, b: 1 },
  { a: 3, b: 5 },    ->   { a: 4, b: 2 },
  { a: 1, b: 4 },    ->   { a: 2, b: 3 },
  { a: 5, b: 1 },    ->   { a: 1, b: 4 },
  { a: 2, b: 3 }     ->   { a: 3, b: 5 }
], 'b')

sortObjectArrByProps([
  { a: 4, b: 2 },    ->   { a: 3, b: 5 },
  { a: 3, b: 5 },    ->   { a: 1, b: 4 },
  { a: 1, b: 4 },    ->   { a: 2, b: 3 },
  { a: 5, b: 1 },    ->   { a: 4, b: 2 },
  { a: 2, b: 3 }     ->   { a: 5, b: 1 }
], 'b', 'r')

sortObjectArrByProps([
  { a: 1, b: 2 },    ->   { a: 1, b: 1 },
  { a: 2, b: 2 },    ->   { a: 1, b: 2 },
  { a: 2, b: 1 },    ->   { a: 2, b: 1 },
  { a: 1, b: 1 },    ->   { a: 2, b: 2 },
  { a: 3, b: 3 }     ->   { a: 3, b: 3 }
], [ 'a', 'b' ])

sortObjectArrByProps([
  { a: 1, b: 2 },    ->   { a: 3, b: 3 },
  { a: 2, b: 2 },    ->   { a: 2, b: 2 },
  { a: 2, b: 1 },    ->   { a: 2, b: 1 },
  { a: 1, b: 1 },    ->   { a: 1, b: 2 },
  { a: 3, b: 3 }     ->   { a: 1, b: 1 }
], [ 'a', 'b' ], 'r')

sortObjectArrByProps([
  { a: 1, b: 2 },    ->   { a: 1, b: 1 },
  { a: 2, b: 2 },    ->   { a: 2, b: 1 },
  { a: 2, b: 1 },    ->   { a: 1, b: 2 },
  { a: 1, b: 1 },    ->   { a: 2, b: 2 },
  { a: 3, b: 3 }     ->   { a: 3, b: 3 }
], [ 'b', 'a' ])

sortObjectArrByProps([
  { a: 1, b: 2 },    ->   { a: 3, b: 3 },
  { a: 2, b: 2 },    ->   { a: 2, b: 2 },
  { a: 2, b: 1 },    ->   { a: 1, b: 2 },
  { a: 1, b: 1 },    ->   { a: 2, b: 1 },
  { a: 3, b: 3 }     ->   { a: 1, b: 1 }
], [ 'b', 'a' ], 'r')

sortObjectArrByProps([
  { c: '2', d: 5 },                      ->    { a: { b: false }, c: '2', d: 5 },
  { a: { b: true }, c: '11', d: 11 },    ->    { a: { b: false }, c: '20', d: 3 },
  { a: { b: false }, c: '3', d: 10 },    ->    { a: { b: false }, c: '3', d: 10 },
  { a: { b: true }, c: '11', d: 6 },     ->    { a: { b: true }, c: '11', d: 6 },
  { a: { b: false }, c: '20', d: 3 },    ->    { a: { b: true }, c: '11', d: 11 },
  { a: { b: false }, c: '2', d: 5 },     ->    { c: '2', d: 5 },
  { c: '2', d: 10 }                      ->    { c: '2', d: 10 }
], [ 'a.b', 'c', 'd' ])
```
