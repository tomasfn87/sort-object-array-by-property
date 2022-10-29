# sort-object-array-by-property

<br><br><br>

_Sorts an_ `array of objects` _or an_ `array of arrays` _according to a_ __single property__ (`objects`) _or_ __index__ (`arrays`)_, or by_ __multiple properties/indices__, through an __array of properties or indices__, _including the_`length` _property_ (for `arrays` and `strings`). _Supports properties from_ __nested objects__ _and indices from_ __nested arrays__. _Each set of values_ (the values that correspond to each property) _can be sorted in_ __ascending__ _or_ __descending__ _order_.

<br><br>

_Test it on your preferred browser_:
- [__sort-object-array-by-property__](https://runkit.com/tomasfn87/sort-object-array-by-property)

<br>

---
<br><br><br>

## 1) Install package via [`npm`](http://www.npmjs.com/package/@nighly/sort-object-array-by-property):

```shell
npm i @nighly/sort-object-array-by-property
```

<br>

---
<br><br>

## 2) Import package:

- import function `sortObjectArrByProps` by adding one of the lines below to a `Javascript` or `Typescript` file:

<br>

### 2.1) `CommonJs`:

- `importing`:

```javascript
const sortObjs = require('@nighly/sort-object-array-by-property');
```

- `calling`:

```javascript
/* single property:    */  sortObjs.sortObjectArrByProps( object_array, prop_1 );
/* three properties:   */  sortObjs.sortObjectArrByProps( object_array, [ prop_1, prop_2, prop_3 ] );
```

<br>

#### 2.1.1) `CommonJs` with _destructuring_ (_shorter call_):

- `importing`:

```javascript
const { sortObjectArrByProps } = require("@nighly/sort-object-array-by-property");
```

  - `calling`:

```javascript
// single property:
sortObjectArrByProps( object_array, prop_1 );
// three properties:
sortObjectArrByProps( object_array, [ prop_1, prop_2, prop_3 ] );
```

<br><br>

### 2.2) `ES`:

- `importing`:

```javascript
import { sortObjectArrByProps } from '@nighly/sort-object-array-by-property/dist/sortObjArrByProps.js';
```

- `calling`:
  - add `"type": "module"` to `package.json` or change file extension from `.js` to `.mjs`

```javascript
// single property:
sortObjectArrByProps( object_array, prop_1 );
// three properties:
sortObjectArrByProps( object_array, [ prop_1, prop_2, prop_3 ] );
```

<br><br>

### 2.3) `Typescript`:

- `importing`:

```javascript
import { sortObjectArrByProps } from "@nighly/sort-object-array-by-property";
```

- `calling`:

```javascript
// single property:
sortObjectArrByProps( object_array, prop_1 );
// three properties:
sortObjectArrByProps( object_array, [ prop_1, prop_2, prop_3 ] );
```

<br><br>

## 3) Usage:

```javascript
sortObjectArrByProps( objArr, objProps );
sortObjectArrByProps( objArr, objProps, reverse );
sortObjectArrByProps( objArr, [ ...objProps ] );
sortObjectArrByProps( objArr, [ ...objProps ], reverse );
```

---

`sortObjectArrByProps` sorts `objArr`, an `array` containing `objects` or other `arrays` according to `objProps` value(s), that can be either:

<br><br>

### 3.1) a _single property_:

- `"name"` or `"id"` (an `object's property`); `0` or `2` (an `array's index`)

<br><br>

### 3.2) _two, more or all properties_:

- `["name", "age"]` or `["type", "price"]`; `[0, 1]` or `[2, 5]` (an `array of objects' properties`; an `array of arrays' indices`)

<br><br>

#### _Using_ `nested objects' properties` _or_ `nested arrays' indices` _to sort_:

- to use `nested objects' properties` or `nested arrays' indices`, use the syntax:

```javascript
  'a.b.c' //  ->  { a: { b: { c: 1 } } }  ->  1
  '0.0.0' //  ->      [ [ [ 2 ] ] ]       ->  2
```

<br>

- _also works with combinations of objects an arrays_:

```javascript
  'a.0.b' //  ->   { a: [ { b: 3 } ] }    ->  3
  '0.a.0' //  ->    [ { a: [ 4 ] } ]      ->  4
```

<br>

- `calling`:

```javascript
sorbObjectArrByProps( objArr, 'a.b.c' );
sortObjectArrByProps( arrArr, '0.0.0' );
```

---

<br><br>

- _the third and optional parameter,_ `reverse`_, can receive as argument a_ `string`:
  - a single `r` (or `R`) will reverse the whole list;
  - if only one set of values or some of the sets of values need to be reversed, a string with `length` greater than `1` containg `r` or `R` must be passed;
  - only a `r` or a `R` matters: any other character will just be used to determine which set of values will be reversed, according to the `properties` or `indices` passed in `array` format to `objProps`.

<br><br>

### _Examples_:

```javascript
   sortObjectArrByProps(peopleArr, ["country", "age", "first_name"], 'r')
// the whole list will be reversed
```

<br>

```javascript
   sortObjectArrByProps(peopleArr, ["country", "age", "first_name"], 'srs')
/* (            s           )(           r         )(              s             )
   by country standard order > by age reverse order > by first_name standard order */
```

<br>

* While `s` is the standard notation, any string value different from `r` or `R` will be accepted:

```javascript
   sortObjectArrByProps(gamesArr, ["year", "platform", "title"], 'r..')
/* (            r          )(               .            )(            .           )
   by year descending order > by platform ascending order > by title ascending order */
```

<br><br>

- _the same way_

```javascript
   sortObjectArrByProps(objList, ["prop1", "prop2"], 's')

// or

   sortObjectArrByProps(arrList, [1, 2], 's')
```

<br>

- _produces the same output as_

```javascript
   sortObjectArrByProps(objList, ["prop1", "prop2"])

// or

   sortObjectArrByProps(arrList, [1, 2])
```

<br><br>

- `sortObjectArrByProps` returns a `new array`, leaving the `source array` untouched, so (re)attribute it to a variable to store or update the values:

```javascript
// updating
   users.list = sortObjectArrByProps(users.list, ["birth_date", "email", "first_name"], "..R")
// or
// storing
   let sorted_orders = sortObjectArrByProps(order, ["date.year", "date.month", "date.day", "date.time", "id"], "RrRr.")
```

---

<br><br>

## 4) _Examples_:

<br><br>

_The comments represent the outputs_.

```javascript
sortObjectArrByProps([
  [ 4, 2 ],                             // ->    [ 1, 4 ],
  [ 3, 5 ],                             // ->    [ 2, 3 ],
  [ 1, 4 ],                             // ->    [ 3, 5 ],
  [ 5, 1 ],                             // ->    [ 4, 2 ],
  [ 2, 3 ]                              // ->    [ 5, 1 ]
], 0);

sortObjectArrByProps([
  [ 4, 2 ],                             // ->    [ 5, 1 ],
  [ 3, 5 ],                             // ->    [ 4, 2 ],
  [ 1, 4 ],                             // ->    [ 3, 5 ],
  [ 5, 1 ],                             // ->    [ 2, 3 ],
  [ 2, 3 ]                              // ->    [ 1, 4 ]
], 0, 'r');

sortObjectArrByProps([
  { a: 4, b: 2 },                       // ->    { a: 5, b: 1 },
  { a: 3, b: 5 },                       // ->    { a: 4, b: 2 },
  { a: 1, b: 4 },                       // ->    { a: 2, b: 3 },
  { a: 5, b: 1 },                       // ->    { a: 1, b: 4 },
  { a: 2, b: 3 }                        // ->    { a: 3, b: 5 }
], 'b');

sortObjectArrByProps([
  { a: 4, b: 2 },                       // ->    { a: 3, b: 5 },
  { a: 3, b: 5 },                       // ->    { a: 1, b: 4 },
  { a: 1, b: 4 },                       // ->    { a: 2, b: 3 },
  { a: 5, b: 1 },                       // ->    { a: 4, b: 2 },
  { a: 2, b: 3 }                        // ->    { a: 5, b: 1 }
], 'b', 'r');

sortObjectArrByProps([
  { a: 1, b: 2 },                       // ->    { a: 1, b: 1 },
  { a: 2, b: 2 },                       // ->    { a: 1, b: 2 },
  { a: 2, b: 1 },                       // ->    { a: 2, b: 1 },
  { a: 1, b: 1 },                       // ->    { a: 2, b: 2 },
  { a: 3, b: 3 }                        // ->    { a: 3, b: 3 }
], [ 'a', 'b' ]);

sortObjectArrByProps([
  { a: 1, b: 2 },                       // ->    { a: 3, b: 3 },
  { a: 2, b: 2 },                       // ->    { a: 2, b: 2 },
  { a: 2, b: 1 },                       // ->    { a: 2, b: 1 },
  { a: 1, b: 1 },                       // ->    { a: 1, b: 2 },
  { a: 3, b: 3 }                        // ->    { a: 1, b: 1 }
], [ 'a', 'b' ], 'r');

sortObjectArrByProps([
  { a: 1, b: 2 },                       // ->    { a: 1, b: 1 },
  { a: 2, b: 2 },                       // ->    { a: 2, b: 1 },
  { a: 2, b: 1 },                       // ->    { a: 1, b: 2 },
  { a: 1, b: 1 },                       // ->    { a: 2, b: 2 },
  { a: 3, b: 3 }                        // ->    { a: 3, b: 3 }
], [ 'b', 'a' ]);

sortObjectArrByProps([
  { a: 1, b: 2 },                       // ->    { a: 3, b: 3 },
  { a: 2, b: 2 },                       // ->    { a: 2, b: 2 },
  { a: 2, b: 1 },                       // ->    { a: 1, b: 2 },
  { a: 1, b: 1 },                       // ->    { a: 2, b: 1 },
  { a: 3, b: 3 }                        // ->    { a: 1, b: 1 }
], [ 'b', 'a' ], 'r');

sortObjectArrByProps([
  { c: '2', d: 5 },                     // ->     { a: { b: false }, c: '2', d: 5 },
  { a: { b: true }, c: '11', d: 11 },   // ->     { a: { b: false }, c: '20', d: 3 },
  { a: { b: false }, c: '3', d: 10 },   // ->     { a: { b: false }, c: '3', d: 10 },
  { a: { b: true }, c: '11', d: 6 },    // ->     { a: { b: true }, c: '11', d: 6 },
  { a: { b: false }, c: '20', d: 3 },   // ->     { a: { b: true }, c: '11', d: 11 },
  { a: { b: false }, c: '2', d: 5 },    // ->     { c: '2', d: 5 },
  { c: '2', d: 10 }                     // ->     { c: '2', d: 10 }
], [ 'a.b', 'c', 'd' ]);

sortObjectArrByProps([
  { c: '2', d: 5 },                     // ->     { a: { b: false }, c: '3', d: 10 },
  { a: { b: true }, c: '11', d: 11 },   // ->     { a: { b: false }, c: '20', d: 3 },
  { a: { b: false }, c: '3', d: 10 },   // ->     { a: { b: false }, c: '2', d: 5 },
  { a: { b: true }, c: '11', d: 6 },    // ->     { a: { b: true }, c: '11', d: 11 },
  { a: { b: false }, c: '20', d: 3 },   // ->     { a: { b: true }, c: '11', d: 6 },
  { a: { b: false }, c: '2', d: 5 },    // ->     { c: '2', d: 10 },
  { c: '2', d: 10 }                     // ->     { c: '2', d: 5 }
], [ 'a.b', 'c', 'd' ], '.rr');

sortObjectArrByProps([
  [[],[],[],[],[]],                     // ->     [[]],
  [[]],                                 // ->     [[],[]],
  [[],[],[],[],[],[]],                  // ->     [[],[],[]],
  [[],[],[]],                           // ->     [[],[],[],[]],
  [[],[]],                              // ->     [[],[],[],[],[]],
  [[],[],[],[]]                         // ->     [[],[],[],[],[],[]]
], 'length');

sortObjectArrByProps([
  [[],[],[],[],[]],                     // ->     [[],[],[],[],[],[]],
  [[]],                                 // ->     [[],[],[],[],[]],
  [[],[],[],[],[],[]],                  // ->     [[],[],[],[]],
  [[],[],[]],                           // ->     [[],[],[]],
  [[],[]],                              // ->     [[],[]],
  [[],[],[],[]]                         // ->     [[]]
], 'length, 'r');
```
