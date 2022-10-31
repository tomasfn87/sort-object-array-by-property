# sort-object-array-by-property

<br><br>

`sort-object-array-by-property` _sorts an_ `array of objects` _or an_ `array of arrays` _according to a_ __single property__ (`objects`) _or_ __index__ (`arrays`)_, or by_ __multiple properties / indices__, through an __array of properties__ or __indices__, _including the_`length` _property_ (for `arrays` and `strings`).

<br>

- It supports properties from `nested objects` and indices from `nested arrays`.

- Each set of values (_the values that correspond to each property_) can be sorted independently, in `ascending` or `descending` order.

- It supports sorting of texts with accents (`fiancée` _comes after_ `fiancee` _and before_ `fiancf`, _as a text editor would normally behave_), making it more useful for latin language users, for example.

<br><br>

## __Test it on a browser__ ([*__runkit__*](https://runkit.com/)):

[__sort-object-array-by-property__](https://runkit.com/tomasfn87/sort-object-array-by-property)

---

<br><br>

## 1) Install package via [`npm`](http://www.npmjs.com/package/@nighly/sort-object-array-by-property):

```shell
    npm install @nighly/sort-object-array-by-property
```

---

<br><br>

## 2) Import package:

_Import function_ `sortObjectArrByProps` _by adding one of the lines below to a_ `Javascript` _or_ `Typescript` _file_:

<br>

### 2.1) `CommonJs`:

#### _How to import_:

```javascript
    const sortObjs = require( '@nighly/sort-object-array-by-property' );
```

#### _How to call_:

```javascript
//  using a single property as sorting parameter:
    sortObjs.sortObjectArrByProps( object_array, prop_1 );

//  using three properties as sorting parameters:
    sortObjs.sortObjectArrByProps( object_array, [ prop_1, prop_2, prop_3 ] );
```

<br>

#### 2.1.1) `CommonJs` _with_ destructuring (_shorter call_):

##### _How to import_:

```javascript
    const { sortObjectArrByProps } = require( '@nighly/sort-object-array-by-property' );
```

##### _How to call_:

```javascript
//  using a single property as sorting parameter:
    sortObjectArrByProps( object_array, prop_1 );

//  using three properties as sorting parameters:
    sortObjectArrByProps( object_array, [ prop_1, prop_2, prop_3 ] );
```

<br><br>

### 2.2) `ES`:

#### _How to import_:

```javascript
    import { sortObjectArrByProps } from '@nighly/sort-object-array-by-property/dist/sortObjArrByProps.js';
```

#### _How to call_:

_Add_ `"type": "module"` _to_ `package.json` _or change the file extension from_ `.js` _to_ `.mjs`.

```javascript
//  using a single property as sorting parameter:
    sortObjectArrByProps( object_array, prop_1 );

//  using three properties as sorting parameters:
    sortObjectArrByProps( object_array, [ prop_1, prop_2, prop_3 ] );
```

<br><br>

### 2.3) `Typescript`:

#### _How to import_:

```javascript
    import { sortObjectArrByProps } from '@nighly/sort-object-array-by-property';
```

#### _How to call_:

```javascript
//  using a single property as sorting parameter:
    sortObjectArrByProps( object_array, prop_1 );

//  using three properties as sorting parameters:
    sortObjectArrByProps( object_array, [ prop_1, prop_2, prop_3 ] );
```

---

<br><br>

## 3) Usage:

<br>

`sortObjectArrByProps` _sorts_ `objArr`, _an_ `array` _containing_ `objects` _or other_ `arrays` _according to_ `objProps` _value(s)_.

<br>

```javascript
//  using a single property as sorting parameter:
    sortObjectArrByProps( objArr, objProps );

//  using a single property, reversing as sorting parameter:
    sortObjectArrByProps( objArr, objProps, reverse );

//  using multiple properties as sorting parameter:
    sortObjectArrByProps( objArr, [ ...objProps ] );

//  using multiple properties, reversing as sorting parameter:
    sortObjectArrByProps( objArr, [ ...objProps ], reverse );
```

<br><br>

_The_ `arrays` _can be sorted according to_:

### 3.1) a _single property_:

```javascript
//  an object's property
    'name'  /* or */  'id'

//  an array's index
    0  /* or */  2
```

<br>

### 3.2) _two_, _more_ or _all properties_:

```javascript
//  an array of objects' properties
    [ 'name', 'age' ]  /* or */  [ 'type', 'price' ]

//  an array of arrays' indices
    [0, 1]  /* or */  [2, 5]
```

<br><br>

### 3.3) _Using_ `nested objects' properties` _or_ `nested arrays' indices` _to sort_:

<br>

_To use_ `nested objects' properties` _or_ `nested arrays' indices`, _use the syntax below for_ `objProps`:

```javascript
    'a.b.c'  //  ->  { a: { b: { c: 1 } } }  ->  1
    '0.0.0'  //  ->      [ [ [ 2 ] ] ]       ->  2
```

_Also works with combinations of_ `objects` _and_ `arrays`:

```javascript
    'a.0.b'  //  ->   { a: [ { b: 3 } ] }    ->  3
    '0.a.0'  //  ->    [ { a: [ 4 ] } ]      ->  4
```

#### _Examples_:

```javascript
    sorbObjectArrByProps( objArr, 'a.b.c' );
    sortObjectArrByProps( arrArr, '0.0.0' );
```

---

<br><br>

### 3.4) Reversing _all_ or _some values_:

_The third and optional parameter,_ `reverse`_, can receive as argument a_ `string`:
- a single `r` (_or_ `R`) will reverse the whole list;
- if only one set of values or some of the sets of values need to be reversed, a string with `length` greater than `1` containg `r` or `R` must be passed;
- only a `r` or a `R` matters: any other character will just be used to determine which set of values will be reversed, according to the `properties` or `indices` passed in `array` format to `objProps`.

<br><br>

#### _Examples_:

```javascript
//  the whole list will be reversed
    sortObjectArrByProps( peopleArr, [ 'country', 'age', 'first_name' ], 'r' )
```

```javascript
//  (            s           )(           r         )(              s             )
//  by country standard order > by age reverse order > by first_name standard order
    sortObjectArrByProps( peopleArr, [ 'country', 'age', 'first_name' ], 'srs' )
```

<br><br>

#### 3.4.1) `reverse` alternative notations:

_As aforementioned_ (__3.4__), _while_ `s` _is the standard notation_, _any string value different from_ `r` _or_ `R` _will be accepted_:

```javascript
//  (            r          )(               .            )(            .           )
//  by year descending order > by platform ascending order > by title ascending order
    sortObjectArrByProps( gamesArr, [ 'year', 'platform', 'title' ], 'r..' )
```

<br>

_Similarly, the snippet below_ ...

```javascript
    sortObjectArrByProps( objList, [ 'prop1', 'prop2' ], 's' );
//  or
    sortObjectArrByProps( arrList, [ 1, 2 ], 's' );
```

```javascript
    sortObjectArrByProps( objList, [ 'prop1', 'prop2' ] );
//  or
    sortObjectArrByProps( arrList, [ 1, 2 ] );
```

... _produces the same output as the snippet above_.

---

<br><br>

### 4) Dealing with the _output_:

`sortObjectArrByProps` _returns a_ `new array`, _leaving the_ `source array` _untouched_, _so reattribute the ouput to the same variable to update the values_, _or attribute it to a new variable_, _to store the values_:

<br>

#### _Updating_:

```javascript
    usersList = sortObjectArrByProps(         // <- the variable IS NOT being declared;
        usersList, [                          // <- the list to be sorted IS the same variable that will store the result;
            'birth_date',                     // <- 1st order by, then;
            'last_name',                      // <- 2nd order by, then;
            'first_name',                     // <- 3rd order by, then;
            'email',                          // <- 4th order by, end;
        ], '..R'                              // <- reverse string.
    );
```

#### _Storing_:

```javascript
    let sortedList = sortObjectArrByProps(    // <- the variable IS being declared;
        list, [                               // <- the list to be sorted IS NOT the same variable that will store the result;
            'date.year',                      // <- 1st order by, then;
            'date.month',                     // <- 2nd order by, then;
            'date.day',                       // <- 3rd order by, then;
            'date.time',                      // <- 4th order by, then;
            'id'                              // <- 5th order by, end;
       ], 'RrRr.'                             // <- reverse string.
    );
```

---

<br><br>

## 5) _Examples_:

<br>

_The comments represent the_ *__outputs__*:

```javascript
sortObjectArrByProps([
  [ 4, 2 ],                             // ->    [ 1, 4 ],
  [ 3, 5 ],                             // ->    [ 2, 3 ],
  [ 1, 4 ],                             // ->    [ 3, 5 ],
  [ 5, 1 ],                             // ->    [ 4, 2 ],
  [ 2, 3 ]                              // ->    [ 5, 1 ]
], 0 );

sortObjectArrByProps([
  [ 4, 2 ],                             // ->    [ 5, 1 ],
  [ 3, 5 ],                             // ->    [ 4, 2 ],
  [ 1, 4 ],                             // ->    [ 3, 5 ],
  [ 5, 1 ],                             // ->    [ 2, 3 ],
  [ 2, 3 ]                              // ->    [ 1, 4 ]
], 0, 'r' );

sortObjectArrByProps([
  { a: 4, b: 2 },                       // ->    { a: 5, b: 1 },
  { a: 3, b: 5 },                       // ->    { a: 4, b: 2 },
  { a: 1, b: 4 },                       // ->    { a: 2, b: 3 },
  { a: 5, b: 1 },                       // ->    { a: 1, b: 4 },
  { a: 2, b: 3 }                        // ->    { a: 3, b: 5 }
], 'b' );

sortObjectArrByProps([
  { a: 4, b: 2 },                       // ->    { a: 3, b: 5 },
  { a: 3, b: 5 },                       // ->    { a: 1, b: 4 },
  { a: 1, b: 4 },                       // ->    { a: 2, b: 3 },
  { a: 5, b: 1 },                       // ->    { a: 4, b: 2 },
  { a: 2, b: 3 }                        // ->    { a: 5, b: 1 }
], 'b', 'r' );

sortObjectArrByProps([
  { a: 1, b: 2 },                       // ->    { a: 1, b: 1 },
  { a: 2, b: 2 },                       // ->    { a: 1, b: 2 },
  { a: 2, b: 1 },                       // ->    { a: 2, b: 1 },
  { a: 1, b: 1 },                       // ->    { a: 2, b: 2 },
  { a: 3, b: 3 }                        // ->    { a: 3, b: 3 }
], [ 'a', 'b' ] );

sortObjectArrByProps([
  { a: 1, b: 2 },                       // ->    { a: 3, b: 3 },
  { a: 2, b: 2 },                       // ->    { a: 2, b: 2 },
  { a: 2, b: 1 },                       // ->    { a: 2, b: 1 },
  { a: 1, b: 1 },                       // ->    { a: 1, b: 2 },
  { a: 3, b: 3 }                        // ->    { a: 1, b: 1 }
], [ 'a', 'b' ], 'r' );

sortObjectArrByProps([
  { a: 1, b: 2 },                       // ->    { a: 1, b: 1 },
  { a: 2, b: 2 },                       // ->    { a: 2, b: 1 },
  { a: 2, b: 1 },                       // ->    { a: 1, b: 2 },
  { a: 1, b: 1 },                       // ->    { a: 2, b: 2 },
  { a: 3, b: 3 }                        // ->    { a: 3, b: 3 }
], [ 'b', 'a' ] );

sortObjectArrByProps([
  { a: 1, b: 2 },                       // ->    { a: 3, b: 3 },
  { a: 2, b: 2 },                       // ->    { a: 2, b: 2 },
  { a: 2, b: 1 },                       // ->    { a: 1, b: 2 },
  { a: 1, b: 1 },                       // ->    { a: 2, b: 1 },
  { a: 3, b: 3 }                        // ->    { a: 1, b: 1 }
], [ 'b', 'a' ], 'r' );

sortObjectArrByProps([
  { c: '2', d: 5 },                     // ->     { a: { b: false }, c: '2', d: 5 },
  { a: { b: true }, c: '11', d: 11 },   // ->     { a: { b: false }, c: '20', d: 3 },
  { a: { b: false }, c: '3', d: 10 },   // ->     { a: { b: false }, c: '3', d: 10 },
  { a: { b: true }, c: '11', d: 6 },    // ->     { a: { b: true }, c: '11', d: 6 },
  { a: { b: false }, c: '20', d: 3 },   // ->     { a: { b: true }, c: '11', d: 11 },
  { a: { b: false }, c: '2', d: 5 },    // ->     { c: '2', d: 5 },
  { c: '2', d: 10 }                     // ->     { c: '2', d: 10 }
], [ 'a.b', 'c', 'd' ] );

sortObjectArrByProps([
  { c: '2', d: 5 },                     // ->     { a: { b: false }, c: '3', d: 10 },
  { a: { b: true }, c: '11', d: 11 },   // ->     { a: { b: false }, c: '20', d: 3 },
  { a: { b: false }, c: '3', d: 10 },   // ->     { a: { b: false }, c: '2', d: 5 },
  { a: { b: true }, c: '11', d: 6 },    // ->     { a: { b: true }, c: '11', d: 11 },
  { a: { b: false }, c: '20', d: 3 },   // ->     { a: { b: true }, c: '11', d: 6 },
  { a: { b: false }, c: '2', d: 5 },    // ->     { c: '2', d: 10 },
  { c: '2', d: 10 }                     // ->     { c: '2', d: 5 }
], [ 'a.b', 'c', 'd' ], '.rr' );

sortObjectArrByProps([
  [[],[],[],[],[]],                     // ->     [[]],
  [[]],                                 // ->     [[],[]],
  [[],[],[],[],[],[]],                  // ->     [[],[],[]],
  [[],[],[]],                           // ->     [[],[],[],[]],
  [[],[]],                              // ->     [[],[],[],[],[]],
  [[],[],[],[]]                         // ->     [[],[],[],[],[],[]]
], 'length' );

sortObjectArrByProps([
  [[],[],[],[],[]],                     // ->     [[],[],[],[],[],[]],
  [[]],                                 // ->     [[],[],[],[],[]],
  [[],[],[],[],[],[]],                  // ->     [[],[],[],[]],
  [[],[],[]],                           // ->     [[],[],[]],
  [[],[]],                              // ->     [[],[]],
  [[],[],[],[]]                         // ->     [[]]
], 'length, 'r' );
```
