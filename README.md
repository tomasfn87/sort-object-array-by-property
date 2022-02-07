# sort-object-array-by-property 
Sorts an array of objects or an array of arrays according to a single property or index or an array of properties or indices.

---
Written in:
* Typescript

---
Test it online:
* <a href="https://runkit.com/tomasfn87/62009884fc3f9f000804f0ba" target="_blank">sort-object-array-by-property - runkit.com</a>

---
# 1. Install via CLI with:
  * <a href="http://www.npmjs.com/package/@nighly/sort-object-array-by-property" target="_blank">npm i @nighly/sort-object-array-by-property</a>
# 2. Importing: 
  * import function 'sortObjectArrByProps' by adding one of the lines above to a Javascript or Typescript file:

---
  <strong>2.1. CommonJs:</strong>
  * <i>importing:</i>
    * var sortObjs = require("@nighly/sort-object-array-by-property");
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

---
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
  * the third and optional parameter, '<strong>reverse</strong>', can receive as argument <strong>'r'</strong> or <strong>'R'</strong> to produce a reversed output
---
  * the original array remains untouched.
# 4. Examples:
---

<ul style="font-family: Cascadia Code, Consolas, monospace;">
  <li>
    <strong>sortObjectArrByProps(</strong>[<br>
    &nbsp;&nbsp;{ a: 4, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 4 },<br>
    &nbsp;&nbsp;{ a: 3, b: 5 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 3 },<br>
    &nbsp;&nbsp;{ a: 1, b: 4 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 3, b: 5 },<br>
    &nbsp;&nbsp;{ a: 5, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 4, b: 2 },<br>
    &nbsp;&nbsp;{ a: 2, b: 3 }&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 5, b: 1 }<br>
    ], 'a'<strong>)</strong>
  </li><br>
  <li>
    <strong>sortObjectArrByProps(</strong>[<br>
    &nbsp;&nbsp;{ a: 4, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 5, b: 1 },<br>
    &nbsp;&nbsp;{ a: 3, b: 5 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 4, b: 2 },<br>
    &nbsp;&nbsp;{ a: 1, b: 4 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 3, b: 5 },<br>
    &nbsp;&nbsp;{ a: 5, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 3 },<br>
    &nbsp;&nbsp;{ a: 2, b: 3 }&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 4 }<br>
    ], 'a', 'r'<strong>)</strong>
  </li><br>
  <li>
    <strong>sortObjectArrByProps(</strong>[<br>
      &nbsp;&nbsp;{ a: 4, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 5, b: 1 },<br>
      &nbsp;&nbsp;{ a: 3, b: 5 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 4, b: 2 },<br>
      &nbsp;&nbsp;{ a: 1, b: 4 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 3 },<br>
      &nbsp;&nbsp;{ a: 5, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 4 },<br>
      &nbsp;&nbsp;{ a: 2, b: 3 }&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 3, b: 5 }<br>
    ], 'b'<strong>)</strong>
  </li><br>
  <li>
    <strong>sortObjectArrByProps(</strong>[<br>
      &nbsp;&nbsp;{ a: 4, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 3, b: 5 },<br>
      &nbsp;&nbsp;{ a: 3, b: 5 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 4 },<br>
      &nbsp;&nbsp;{ a: 1, b: 4 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 3 },<br>
      &nbsp;&nbsp;{ a: 5, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 4, b: 2 },<br>
      &nbsp;&nbsp;{ a: 2, b: 3 }&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 5, b: 1 }<br>
    ], 'b', 'r'<strong>)</strong>
  </li><br>
  <li>
    <strong>sortObjectArrByProps(</strong>[<br>
      &nbsp;&nbsp;{ a: 1, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 1 },<br>
      &nbsp;&nbsp;{ a: 2, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 2 },<br>
      &nbsp;&nbsp;{ a: 2, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 1 },<br>
      &nbsp;&nbsp;{ a: 1, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 2 },<br>
      &nbsp;&nbsp;{ a: 3, b: 3 }&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 3, b: 3 }<br>
    ], [ 'a', 'b' ]<strong>)</strong>
  </li><br>
  <li>
    <strong>sortObjectArrByProps(</strong>[<br>
      &nbsp;&nbsp;{ a: 1, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 3, b: 3 },<br>
      &nbsp;&nbsp;{ a: 2, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 2 },<br>
      &nbsp;&nbsp;{ a: 2, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 1 },<br>
      &nbsp;&nbsp;{ a: 1, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 2 },<br>
      &nbsp;&nbsp;{ a: 3, b: 3 }&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 1 }<br>
    ], [ 'a', 'b' ]</i>, 'r'<strong>)</strong>
  </li><br>
  <li>
    <strong>sortObjectArrByProps(</strong>[<br>
      &nbsp;&nbsp;{ a: 1, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 1 },<br>
      &nbsp;&nbsp;{ a: 2, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 1 },<br>
      &nbsp;&nbsp;{ a: 2, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 2 },<br>
      &nbsp;&nbsp;{ a: 1, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 2 },<br>
      &nbsp;&nbsp;{ a: 3, b: 3 }&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 3, b: 3 }<br>
    ], [ 'b', 'a' ]<strong>)</strong>
  </li><br>
  <li>
    <strong>sortObjectArrByProps(</strong>[<br>
      &nbsp;&nbsp;{ a: 1, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 3, b: 3 },<br>
      &nbsp;&nbsp;{ a: 2, b: 2 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 2 },<br>
      &nbsp;&nbsp;{ a: 2, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 2 },<br>
      &nbsp;&nbsp;{ a: 1, b: 1 },&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 2, b: 1 },<br>
      &nbsp;&nbsp;{ a: 3, b: 3 }&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; ->&nbsp; &nbsp; &nbsp; &nbsp;{ a: 1, b: 1 }<br>
    ], [ 'b', 'a' ]</i>, 'r'<strong>)</strong>
  </li>
</ul>
