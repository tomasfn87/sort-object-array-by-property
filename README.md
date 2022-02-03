# sort-object-array-by-property 
Sorts an array of objects or an array of arrays according to a single property or index or an array of properties or indices.

---
written in:
* Typescript
---
1) Install via CLI with: 
  * <a href="http://www.npmjs.com/package/@nighly/sort-object-array-by-property">npm i @nighly/sort-object-array-by-property</a>
---
2) Import function 'sortObjArrByProps' by adding the line above to a Javascript or Typescript file: 
  * import { sortObjectArrByProps } from "@nighly/sort-object-array-by-property/dist/sortObjArrByProps.js";
---
3) Usage:
  - sortObjArrByProps(objArr, objProps)
  - sortObjArrByProps(objArr, objProps, reverse)
---
  * 'sortObjArrByProps' sorts 'objArr', an array containing objects or other arrays according to 'objProps' value(s), that can be either:
      1) a single property - "name" or "_id" (an object's property); 0 or 2 (an array's index);
      2) two, more or all properties - ["name", "age"] or ["type", "price"]; [0, 1] or [2, 5], the former for a list of objects and the latter for a list of arrays.

  * the third and optional parameter, 'reverse', 'sortObjArrByProps' can receive 'r' or 'R' to produce a reversed output.
---
4) examples:
  * sortObjArrByProps([ { a: 4, b: 2 }, { a: 3, b: 5 }, { a: 1, b: 4 }, { a: 5, b: 1 }, { a: 2, b: 3 } ], 'a')
  * sortObjArrByProps([ { a: 4, b: 2 }, { a: 3, b: 5 }, { a: 1, b: 4 }, { a: 5, b: 1 }, { a: 2, b: 3 } ], 'a', 'r')
  * sortObjArrByProps([ { a: 4, b: 2 }, { a: 3, b: 5 }, { a: 1, b: 4 }, { a: 5, b: 1 }, { a: 2, b: 3 } ], 'b')
  * sortObjArrByProps([ { a: 4, b: 2 }, { a: 3, b: 5 }, { a: 1, b: 4 }, { a: 5, b: 1 }, { a: 2, b: 3 } ], 'b', 'r')
  * sortObjArrByProps([ { a: 1, b: 2 }, { a: 2, b: 5 }, { a: 2, b: 4 }, { a: 1, b: 1 }, { a: 3, b: 3 } ], ['a', 'b'])
  * sortObjArrByProps([ { a: 1, b: 2 }, { a: 2, b: 5 }, { a: 2, b: 4 }, { a: 1, b: 1 }, { a: 3, b: 3 } ], ['a', 'b'], 'r')
  * sortObjArrByProps([ { a: 1, b: 2 }, { a: 2, b: 5 }, { a: 2, b: 4 }, { a: 1, b: 1 }, { a: 3, b: 3 } ], ['b', 'a'])
  * sortObjArrByProps([ { a: 1, b: 2 }, { a: 2, b: 5 }, { a: 2, b: 4 }, { a: 1, b: 1 }, { a: 3, b: 3 } ], ['b', 'a'], 'r')
