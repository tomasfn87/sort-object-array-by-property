import { expect } from "chai";
import sortObjectArrByProps from "../sortObjArrByProps";

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

const objArr2 = [
  { a: 1, b: 1, c: 2 },
  { a: 4, b: 1, c: 1 },
  { a: 3, b: 2, c: 2 },
  { a: 1, b: 1, c: 3 },
  { a: 1, b: 1, c: 4 },
  { a: 1, b: 2, c: 2 },
  { a: 2, b: 3, c: 3 },
  { a: 1, b: 2, c: 1 },
  { a: 1, b: 2, c: 3 },
  { a: 1, b: 1, c: 1 },
  { a: 1, b: 2, c: 4 }
]

const objArr3 = [
  { a: 1, b: 1, c: 2 },
  { a: 4, b: 1, c: 1 },
  { a: 3, b: 2, c: 2 },
  { a: 1, b: 1 },
  { a: 1, b: 1, c: 3 },
  { a: 1, b: 1, c: 4 },
  { a: 1, b: 2, c: 2 },
  { a: 2, b: 3, c: 3 },
  { a: 1, b: 2, c: 1 },
  { a: 1 },
  { a: 1, b: 2, c: 3 },
  { a: 1, b: 1, c: 1 },
  { a: 1, b: 2, c: 4 }
]

describe('3) Sort Object Array by Properties, takes an array of properties whose items will be used as sorting parameters.', () => {
  it(`3.1) ../sortObjArrByProps.ts.sortObjectArrByProps(
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
    let result = sortObjectArrByProps(objArr, "a");
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

  it(`3.2) ../sortObjArrByProps.ts.sortObjectArrByProps(
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
    let result = sortObjectArrByProps(objArr, "b");
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

  it(`3.3) ../sortObjArrByProps.ts.sortObjectArrByProps(
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
    let result = sortObjectArrByProps(objArr, "a", "r");
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

  it(`3.4) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                    ->    [
      [ 7, 5, 2, 3 ],    ->      [ 4, 1, 7, 1 ],
      [ 9, 2, 4, 5 ],    ->      [ 9, 2, 4, 5 ],
      [ 1, 7, 5, 9 ],    ->      [ 6, 3, 1, 4 ],
      [ 4, 1, 7, 1 ],    ->      [ 5, 4, 9, 7 ],
      [ 6, 3, 1, 4 ],    ->      [ 7, 5, 2, 3 ],
      [ 5, 4, 9, 7 ],    ->      [ 3, 6, 8, 6 ],
      [ 2, 8, 3, 2 ],    ->      [ 1, 7, 5, 9 ],
      [ 3, 6, 8, 6 ],    ->      [ 2, 8, 3, 2 ],
      [ 8, 9, 6, 8 ]     ->      [ 8, 9, 6, 8 ]
    ],                   ->    ]
  1)`, () => {
    let result = sortObjectArrByProps(arrArr, 1);
    expect(result).to.eql([
      [ 4, 1, 7, 1 ],
      [ 9, 2, 4, 5 ],
      [ 6, 3, 1, 4 ],
      [ 5, 4, 9, 7 ],
      [ 7, 5, 2, 3 ],
      [ 3, 6, 8, 6 ],
      [ 1, 7, 5, 9 ],
      [ 2, 8, 3, 2 ],
      [ 8, 9, 6, 8 ]
    ]);
  });

  it(`3.5) ../sortObjArrByProps.ts.sortObjectArrByProps(
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
    let result = sortObjectArrByProps(arrArr, 3);
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

  it(`3.6) ../sortObjArrByProps.ts.sortObjectArrByProps(
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
    let result = sortObjectArrByProps(arrArr, 1, "r");
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
  })
  
  it(`3.7) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                          ->    [
      { a: 1, b: 1, c: 2 },    ->      { a: 1, b: 1, c: 1 },
      { a: 4, b: 1, c: 1 },    ->      { a: 1, b: 1, c: 2 },
      { a: 3, b: 2, c: 2 },    ->      { a: 1, b: 1, c: 3 },
      { a: 1, b: 1, c: 3 },    ->      { a: 1, b: 1, c: 4 },
      { a: 1, b: 1, c: 4 },    ->      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 2 },    ->      { a: 1, b: 2, c: 2 },
      { a: 2, b: 3, c: 3 },    ->      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 1 },    ->      { a: 1, b: 2, c: 4 },
      { a: 1, b: 2, c: 3 },    ->      { a: 2, b: 3, c: 3 },
      { a: 1, b: 1, c: 1 },    ->      { a: 3, b: 2, c: 2 },
      { a: 1, b: 2, c: 4 }     ->      { a: 4, b: 1, c: 1 }
    ],                         ->    [
  ['a', 'b', 'c'])`, () => {
    let result = sortObjectArrByProps(objArr2, ['a', 'b', 'c']);
    expect(result).to.eql([
      { a: 1, b: 1, c: 1 },
      { a: 1, b: 1, c: 2 },
      { a: 1, b: 1, c: 3 },
      { a: 1, b: 1, c: 4 },
      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 2 },
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 4 },
      { a: 2, b: 3, c: 3 },
      { a: 3, b: 2, c: 2 },
      { a: 4, b: 1, c: 1 }
    ]);
  });

  it(`3.8) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                          ->    [
      { a: 1, b: 1, c: 2 },    ->      { a: 4, b: 1, c: 1 },
      { a: 4, b: 1, c: 1 },    ->      { a: 3, b: 2, c: 2 },
      { a: 3, b: 2, c: 2 },    ->      { a: 2, b: 3, c: 3 },
      { a: 1, b: 1, c: 3 },    ->      { a: 1, b: 2, c: 4 },
      { a: 1, b: 1, c: 4 },    ->      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 2 },    ->      { a: 1, b: 2, c: 2 },
      { a: 2, b: 3, c: 3 },    ->      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 1 },    ->      { a: 1, b: 1, c: 4 },
      { a: 1, b: 2, c: 3 },    ->      { a: 1, b: 1, c: 3 },
      { a: 1, b: 1, c: 1 },    ->      { a: 1, b: 1, c: 2 },
      { a: 1, b: 2, c: 4 }     ->      { a: 1, b: 1, c: 1 }
    ],                         ->    [
  ['a', 'b', 'c'], 'r')`, () => {
    let result = sortObjectArrByProps(objArr2, ['a', 'b', 'c'], 'r');
    expect(result).to.eql([
      { a: 4, b: 1, c: 1 },
      { a: 3, b: 2, c: 2 },
      { a: 2, b: 3, c: 3 },
      { a: 1, b: 2, c: 4 },
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 2 },
      { a: 1, b: 2, c: 1 },
      { a: 1, b: 1, c: 4 },
      { a: 1, b: 1, c: 3 },
      { a: 1, b: 1, c: 2 },
      { a: 1, b: 1, c: 1 }
    ]);
  });

  it(`3.9) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                          ->    [
      { a: 1, b: 1, c: 2 },    ->      { a: 1, b: 1, c: 1 },
      { a: 4, b: 1, c: 1 },    ->      { a: 1, b: 1, c: 2 },
      { a: 3, b: 2, c: 2 },    ->      { a: 1, b: 1, c: 3 },
      { a: 1, b: 1 },          ->      { a: 1, b: 1, c: 4 },
      { a: 1, b: 1, c: 3 },    ->      { a: 1, b: 1 },
      { a: 1, b: 1, c: 4 },    ->      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 2 },    ->      { a: 1, b: 2, c: 2 },
      { a: 2, b: 3, c: 3 },    ->      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 1 },    ->      { a: 1, b: 2, c: 4 },
      { a: 1 },                ->      { a: 1 },
      { a: 1, b: 2, c: 3 },    ->      { a: 2, b: 3, c: 3 },
      { a: 1, b: 1, c: 1 },    ->      { a: 3, b: 2, c: 2 },
      { a: 1, b: 2, c: 4 }     ->      { a: 4, b: 1, c: 1 }
    ]                          ->    [ 
  ['a', 'b', 'c'])`, () => {
    let result = sortObjectArrByProps(objArr3, ['a', 'b', 'c']);
    expect(result).to.eql([
      { a: 1, b: 1, c: 1 },
      { a: 1, b: 1, c: 2 },
      { a: 1, b: 1, c: 3 },
      { a: 1, b: 1, c: 4 },
      { a: 1, b: 1 },
      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 2 },
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 4 },  
      { a: 1 },
      { a: 2, b: 3, c: 3 },
      { a: 3, b: 2, c: 2 },
      { a: 4, b: 1, c: 1 }
    ]);
  });

  it(`3.10) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                          ->    [
      { a: 1, b: 1, c: 2 },    ->      { a: 4, b: 1, c: 1 },
      { a: 4, b: 1, c: 1 },    ->      { a: 3, b: 2, c: 2 },
      { a: 3, b: 2, c: 2 },    ->      { a: 2, b: 3, c: 3 },
      { a: 1, b: 1 },          ->      { a: 1 },
      { a: 1, b: 1, c: 3 },    ->      { a: 1, b: 2, c: 4 },
      { a: 1, b: 1, c: 4 },    ->      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 2 },    ->      { a: 1, b: 2, c: 2 },
      { a: 2, b: 3, c: 3 },    ->      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 1 },    ->      { a: 1, b: 1 },
      { a: 1 },                ->      { a: 1, b: 1, c: 4 },
      { a: 1, b: 2, c: 3 },    ->      { a: 1, b: 1, c: 3 },
      { a: 1, b: 1, c: 1 },    ->      { a: 1, b: 1, c: 2 },
      { a: 1, b: 2, c: 4 }     ->      { a: 1, b: 1, c: 1 }
    ]                          ->    [ 
  ['a', 'b', 'c'], 'r')`, () => {
    let result = sortObjectArrByProps(objArr3, ['a', 'b', 'c'], 'r');
    expect(result).to.eql([
      { a: 4, b: 1, c: 1 },
      { a: 3, b: 2, c: 2 },
      { a: 2, b: 3, c: 3 },
      { a: 1 },
      { a: 1, b: 2, c: 4 },
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 2 },
      { a: 1, b: 2, c: 1 },
      { a: 1, b: 1 },
      { a: 1, b: 1, c: 4 },
      { a: 1, b: 1, c: 3 },
      { a: 1, b: 1, c: 2 },
      { a: 1, b: 1, c: 1 }
    ]);
  });
});
