import { expect } from "chai";
import sortObjectArrByPropIndexing from "../sortObjArrByPropIndexing";

const objArr = [
  { a: 7, b: 5 },
  { a: 9, b: 2 },
  { a: 1, b: 7 },
  { a: 4, b: 1 },
  { a: 6, b: 3 },
  { a: 5, b: 4 },
  { a: 2, b: 8 },
  { a: 3, b: 6 },
  { a: 8, b: 9 }
]

const arrArr = [
  [ 7, 5, 2, 3 ],
  [ 9, 2, 4, 5 ],
  [ 1, 7, 5, 9 ],
  [ 4, 1, 7, 1 ],
  [ 6, 3, 1, 4 ],
  [ 5, 4, 9, 7 ],
  [ 2, 8, 3, 2 ],
  [ 3, 6, 8, 6 ],
  [ 8, 9, 6, 8 ]
]

describe('1) Sort Object Array by Property Indexing values and indices separately at first, and then using the indices to sort the object array.', () => {
  it(`1.1) ../sortObjArrByProp.ts.sortObjectArrByPropIndexing(
    [                    ->    [
      { a: 7, b: 5 },    ->      { a: 1, b: 7 },  
      { a: 9, b: 2 },    ->      { a: 2, b: 8 },
      { a: 1, b: 7 },    ->      { a: 3, b: 6 },
      { a: 4, b: 1 },    ->      { a: 4, b: 1 },
      { a: 6, b: 3 },    ->      { a: 5, b: 4 },
      { a: 5, b: 4 },    ->      { a: 6, b: 3 },
      { a: 2, b: 8 },    ->      { a: 7, b: 5 },
      { a: 3, b: 6 },    ->      { a: 8, b: 9 },
      { a: 8, b: 9 }     ->      { a: 9, b: 2 }
    ],                   ->    ]
  "a")`, () => {
    let result = sortObjectArrByPropIndexing(objArr, "a");
      expect(result).to.eql([
        { a: 1, b: 7 },
        { a: 2, b: 8 },
        { a: 3, b: 6 },
        { a: 4, b: 1 },
        { a: 5, b: 4 },
        { a: 6, b: 3 },
        { a: 7, b: 5 },
        { a: 8, b: 9 },
        { a: 9, b: 2 }
      ]);
  });

  it(`1.2) ../sortObjArrByProp.ts.sortObjectArrByPropIndexing(
    [                    ->    [
      { a: 7, b: 5 },    ->      { a: 4, b: 1 },  
      { a: 9, b: 2 },    ->      { a: 9, b: 2 },
      { a: 1, b: 7 },    ->      { a: 6, b: 3 },
      { a: 4, b: 1 },    ->      { a: 5, b: 4 },
      { a: 6, b: 3 },    ->      { a: 7, b: 5 },
      { a: 5, b: 4 },    ->      { a: 3, b: 6 },
      { a: 2, b: 8 },    ->      { a: 1, b: 7 },
      { a: 3, b: 6 },    ->      { a: 2, b: 8 },
      { a: 8, b: 9 }     ->      { a: 8, b: 9 }
    ],                   ->    ]
  "b")`, () => {
    let result = sortObjectArrByPropIndexing(objArr, "b");
      expect(result).to.eql([
        { a: 4, b: 1 },
        { a: 9, b: 2 },
        { a: 6, b: 3 },
        { a: 5, b: 4 },
        { a: 7, b: 5 },
        { a: 3, b: 6 },
        { a: 1, b: 7 },
        { a: 2, b: 8 },
        { a: 8, b: 9 }
      ]);
  });

  it(`1.3) ../sortObjArrByProp.ts.sortObjectArrByPropIndexing(
    [                    ->    [
      { a: 8, b: 9 },    ->      { a: 9, b: 2 },
      { a: 3, b: 6 },    ->      { a: 8, b: 9 },
      { a: 2, b: 8 },    ->      { a: 7, b: 5 },
      { a: 5, b: 4 },    ->      { a: 6, b: 3 },
      { a: 6, b: 3 },    ->      { a: 5, b: 4 },
      { a: 4, b: 1 },    ->      { a: 4, b: 1 },
      { a: 1, b: 7 },    ->      { a: 3, b: 6 },
      { a: 9, b: 2 },    ->      { a: 2, b: 8 },
      { a: 7, b: 5 }     ->      { a: 1, b: 7 }
    ],                   ->    ]
  "a", "i")`, () => {
    let result = sortObjectArrByPropIndexing(objArr, "a", "r");
      expect(result).to.eql([
        { a: 9, b: 2 },
        { a: 8, b: 9 },
        { a: 7, b: 5 },
        { a: 6, b: 3 },
        { a: 5, b: 4 },
        { a: 4, b: 1 },
        { a: 3, b: 6 },
        { a: 2, b: 8 },
        { a: 1, b: 7 }
      ]);
  });

  it(`1.4) ../sortObjArrByProp.ts.sortObjectArrByPropIndexing(
    [                    ->    [
      [ 7, 5, 2, 3 ],    ->      [ 1, 7, 5, 9 ],
      [ 9, 2, 4, 5 ],    ->      [ 2, 8, 3, 2 ],
      [ 1, 7, 5, 9 ],    ->      [ 3, 6, 8, 6 ],
      [ 4, 1, 7, 1 ],    ->      [ 4, 1, 7, 1 ],
      [ 6, 3, 1, 4 ],    ->      [ 5, 4, 9, 7 ],
      [ 5, 4, 9, 7 ],    ->      [ 6, 3, 1, 4 ],
      [ 2, 8, 3, 2 ],    ->      [ 7, 5, 2, 3 ],
      [ 3, 6, 8, 6 ],    ->      [ 8, 9, 6, 8 ],
      [ 8, 9, 6, 8 ]     ->      [ 9, 2, 4, 5 ]
    ],                   ->    ]
  0)`, () => {
    let result = sortObjectArrByPropIndexing(arrArr, 0);
      expect(result).to.eql([
        [ 1, 7, 5, 9 ],
        [ 2, 8, 3, 2 ],
        [ 3, 6, 8, 6 ],
        [ 4, 1, 7, 1 ],
        [ 5, 4, 9, 7 ],
        [ 6, 3, 1, 4 ],
        [ 7, 5, 2, 3 ],
        [ 8, 9, 6, 8 ],
        [ 9, 2, 4, 5 ]
      ]);
  });

  it(`1.5) ../sortObjArrByProp.ts.sortObjectArrByPropIndexing(
    [                    ->    [
      [ 7, 5, 2, 3 ],    ->      [ 4, 1, 7, 1 ],
      [ 9, 2, 4, 5 ],    ->      [ 2, 8, 3, 2 ],
      [ 1, 7, 5, 9 ],    ->      [ 7, 5, 2, 3 ],
      [ 4, 1, 7, 1 ],    ->      [ 6, 3, 1, 4 ],
      [ 6, 3, 1, 4 ],    ->      [ 9, 2, 4, 5 ],
      [ 5, 4, 9, 7 ],    ->      [ 3, 6, 8, 6 ],
      [ 2, 8, 3, 2 ],    ->      [ 5, 4, 9, 7 ],
      [ 3, 6, 8, 6 ],    ->      [ 8, 9, 6, 8 ],
      [ 8, 9, 6, 8 ]     ->      [ 1, 7, 5, 9 ]
    ],                   ->    ]
  3)`, () => {
    let result = sortObjectArrByPropIndexing(arrArr, 3);
      expect(result).to.eql([
        [ 4, 1, 7, 1 ],
        [ 2, 8, 3, 2 ],
        [ 7, 5, 2, 3 ],
        [ 6, 3, 1, 4 ],
        [ 9, 2, 4, 5 ],
        [ 3, 6, 8, 6 ],
        [ 5, 4, 9, 7 ],
        [ 8, 9, 6, 8 ],
        [ 1, 7, 5, 9 ]
      ]);
  });

  it(`1.6) ../sortObjArrByProp.ts.sortObjectArrByPropIndexing(
    [                    ->    [
      [ 7, 5, 2, 3 ],    ->      [ 8, 9, 6, 8 ],
      [ 9, 2, 4, 5 ],    ->      [ 2, 8, 3, 2 ],
      [ 1, 7, 5, 9 ],    ->      [ 1, 7, 5, 9 ],
      [ 4, 1, 7, 1 ],    ->      [ 3, 6, 8, 6 ],
      [ 6, 3, 1, 4 ],    ->      [ 7, 5, 2, 3 ],
      [ 5, 4, 9, 7 ],    ->      [ 5, 4, 9, 7 ],
      [ 2, 8, 3, 2 ],    ->      [ 6, 3, 1, 4 ],
      [ 3, 6, 8, 6 ],    ->      [ 9, 2, 4, 5 ],
      [ 8, 9, 6, 8 ]     ->      [ 4, 1, 7, 1 ]
    ],                   ->    ]
  1, "r")`, () => {
    let result = sortObjectArrByPropIndexing(arrArr, 1, "r");
      expect(result).to.eql([
        [ 8, 9, 6, 8 ],
        [ 2, 8, 3, 2 ],
        [ 1, 7, 5, 9 ],
        [ 3, 6, 8, 6 ],
        [ 7, 5, 2, 3 ],
        [ 5, 4, 9, 7 ],
        [ 6, 3, 1, 4 ],
        [ 9, 2, 4, 5 ],
        [ 4, 1, 7, 1 ]
      ]);
  });
});
