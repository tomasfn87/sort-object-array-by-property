import { expect } from "chai";
import { sortObjectArrByPropDirectly } from "../sortObjArrByPropDirectly";

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
  [7, 5, 2, 3],
  [9, 2, 4, 5],
  [1, 7, 5, 9],
  [4, 1, 7, 1],
  [6, 3, 1, 4],
  [5, 4, 9, 7],
  [2, 8, 3, 2],
  [3, 6, 8, 6],
  [8, 9, 6, 8]
]

describe('2) Sort Object Array by Property Directly, obtaining a list of values and then sorting it and the object array in parallel.', () => {
  it(`2.1) ../sortObjArrByProp.ts.sortObjectArrByPropDirectly(
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
    let result = sortObjectArrByPropDirectly(objArr, "a");
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

  it(`2.2) ../sortObjArrByProp.ts.sortObjectArrByPropDirectly(
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
    let result = sortObjectArrByPropDirectly(objArr, "b");
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

  it(`2.3) ../sortObjArrByProp.ts.sortObjectArrByPropDirectly(
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
  "a", "r")`, () => {
    let result = sortObjectArrByPropDirectly(objArr, "a", "r");
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

  it(`2.4) ../sortObjArrByProp.ts.sortObjectArrByPropDirectly(
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
    let result = sortObjectArrByPropDirectly(arrArr, 0);
    expect(result).to.eql([
      [1, 7, 5, 9],
      [2, 8, 3, 2],
      [3, 6, 8, 6],
      [4, 1, 7, 1],
      [5, 4, 9, 7],
      [6, 3, 1, 4],
      [7, 5, 2, 3],
      [8, 9, 6, 8],
      [9, 2, 4, 5]
    ]);
  });

  it(`2.5) ../sortObjArrByProp.ts.sortObjectArrByPropDirectly(
    [                    ->    [
      [ 7, 5, 2, 3 ],    ->      [ 6, 3, 1, 4 ],
      [ 9, 2, 4, 5 ],    ->      [ 7, 5, 2, 3 ],
      [ 1, 7, 5, 9 ],    ->      [ 2, 8, 3, 2 ],
      [ 4, 1, 7, 1 ],    ->      [ 9, 2, 4, 5 ],
      [ 6, 3, 1, 4 ],    ->      [ 1, 7, 5, 9 ],
      [ 5, 4, 9, 7 ],    ->      [ 8, 9, 6, 8 ],
      [ 2, 8, 3, 2 ],    ->      [ 4, 1, 7, 1 ],
      [ 3, 6, 8, 6 ],    ->      [ 3, 6, 8, 6 ],
      [ 8, 9, 6, 8 ]     ->      [ 5, 4, 9, 7 ]
    ],                   ->    ]
  2)`, () => {
    let result = sortObjectArrByPropDirectly(arrArr, 2);
    expect(result).to.eql([
      [6, 3, 1, 4],
      [7, 5, 2, 3],
      [2, 8, 3, 2],
      [9, 2, 4, 5],
      [1, 7, 5, 9],
      [8, 9, 6, 8],
      [4, 1, 7, 1],
      [3, 6, 8, 6],
      [5, 4, 9, 7]
    ]);
  });

  it(`2.6) ../sortObjArrByProp.ts.sortObjectArrByPropDirectly(
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
    let result = sortObjectArrByPropDirectly(arrArr, 1, "r");
    expect(result).to.eql([
      [8, 9, 6, 8],
      [2, 8, 3, 2],
      [1, 7, 5, 9],
      [3, 6, 8, 6],
      [7, 5, 2, 3],
      [5, 4, 9, 7],
      [6, 3, 1, 4],
      [9, 2, 4, 5],
      [4, 1, 7, 1]
    ]);
  })
});