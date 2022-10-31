import { expect } from "chai";
import { sortObjectArrByProps } from "../sortObjArrByProps";
import { removeAccents } from "../sortObjArrByProps";

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
  { a: 20, b: 1, c: 2 },
  { a: 1, b: 20, c: 3 },
  { a: 1, b: 1 },
  { a: 1, b: 10, c: 1 },
  { a: 1, b: 1, c: 20 },
  { a: 1, b: 20, c: 4 },
  { a: 10, b: 2, c: 2 },
  { a: 1, b: 1, c: 10 },
  { a: 1, b: 1, c: 1 },
  { a: 1, b: 2, c: 2 },
  { a: 1 },
  { a: 2, b: 3, c: 3 }
]

const objArr5 = [
  { a: 1 },
  { a: 1, b: 2 },
  { b: 1 },
  { a: 1, b: 1, c: 2, d: 1 },
  { c: 1 },
  { a: 1, c: 1 },
  { c: 10 },
  { a: 1, b: 1, c: 1, d: 2 },
  { c: 5 },
  { b: 3 },
  { d: 1 },
  { a: 1, b: 2, c: 1 },
  { a: 1, b: 3, c: 4 },
  { a: 1, b: 1, c: 1 },
  { b: 3, c: 1 },
  { a: 5, b: 3, c: 3 },
  { a: 1, b: 2, c: 2 },
  { b: 3, d: 1 },
  { b: 3, d: 2 },
  { b: 1, c: 4 },
  { a: 2, b: 2, c: 3 },
  { a: 1, b: 1, c: 1, d: 1 },
  { a: 1, b: 2, c: 5 },
  { a: 2, b: 2, c: 1 },
  { b: 1, c: 3 },
  { a: 1, b: 2, c: 4 },
  { a: 5, b: 1, c: 1 },
  { a: 3, b: 3, c: 3 },
  { a: 4, b: 2, c: 2 },
  { a: 1, b: 2, c: 1 },
]

const deepObjArr = [
  { a: { b: { c: 8 } } },
  { a: { b: { c: 10 } } },
  { a: { b: { c: 7 } } },
  { a: { b: { c: 2 } } },
  { a: { b: { c: 5 } } },
  { a: { b: { c: 4 } } },
  { a: { b: { c: 9 } } },
  { a: { b: { c: 1 } } },
  { a: { b: { c: 3 } } },
  { a: { b: { c: 6 } } }
];

const deepArrArr = [
  [[[7]]],
  [[[1]]],
  [[[4]]],
  [[[8]]],
  [[[10]]],
  [[[2]]],
  [[[5]]],
  [[[9]]],
  [[[3]]],
  [[[6]]]
];

const deepObjArrObjArr = [
  { a: [{ b: 9 }] },
  { a: [{ b: 2 }] },
  { a: [{ b: 3 }] },
  { a: [{ b: 8 }] },
  { a: [{ b: 1 }] },
  { a: [{ b: 5 }] },
  { a: [{ b: 7 }] },
  { a: [{ b: 6 }] },
  { a: [{ b: 10 }] },
  { a: [{ b: 4 }] }
];

const deepArrObjArrArr = [
  [{ a: [2] }],
  [{ a: [6] }],
  [{ a: [10] }],
  [{ a: [3] }],
  [{ a: [5] }],
  [{ a: [4] }],
  [{ a: [7] }],
  [{ a: [9] }],
  [{ a: [8] }],
  [{ a: [1] }]
];

const objArrWithBooleans = [
  { a: false, b: 5 },
  { b: 10 },
  { a: false, b: 15 },
  { b: 40 },
  { a: false, b: 30 },
  { a: false, b: 45 },
  { b: 5 },
  { a: false, b: 50 },
  { a: true, b: 5 },
  { b: 20 },
  { a: true, b: 10 },
  { a: true, b: 20 },
  { a: true, b: 25 },
  { b: 30 },
  { a: true, b: 40 }
]

const undefinedDeepObj = [
  { c: '2', d: 5 },
  { a: { b: true }, c: '11', d: 11 },
  { a: { b: false }, c: '3', d: 10 },
  { a: { b: true }, c: '11', d: 6 },
  { a: { b: false }, c: '20', d: 3 },
  { a: { b: false }, c: '2', d: 5 },
  { c: '2', d: 10 }
]

const arrEmptyArrs = [
  [[], [], [], [], []],
  [[]],
  [[], [], [], [], [], []],
  [[], [], []],
  [[], []],
  [[], [], [], []]
]

const arrObjsWithAccentedContent = [
  { a: 'o', b: 6 },
  { a: 'É', b: 4 },
  { a: 'A', b: 3 },
  { a: 'E', b: 1 },
  { a: 'ö', b: 5 },
  { a: 'Á', b: 2 }
]

const accentRemovalTest1 = 'É só um teste de conversão de caracteres.';

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
  "a", "r")`, () => {
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
      [4, 1, 7, 1],
      [9, 2, 4, 5],
      [6, 3, 1, 4],
      [5, 4, 9, 7],
      [7, 5, 2, 3],
      [3, 6, 8, 6],
      [1, 7, 5, 9],
      [2, 8, 3, 2],
      [8, 9, 6, 8]
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
      [4, 1, 7, 1],
      [2, 8, 3, 2],
      [7, 5, 2, 3],
      [6, 3, 1, 4],
      [9, 2, 4, 5],
      [3, 6, 8, 6],
      [5, 4, 9, 7],
      [8, 9, 6, 8],
      [1, 7, 5, 9]
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
    [                           ->    [
      { a: 1, b: 1, c: 2 },     ->      { a: 1, b: 1, c: 1 },
      { a: 20, b: 1, c: 2 },    ->      { a: 1, b: 1, c: 2 },
      { a: 1, b: 20, c: 3 },    ->      { a: 1, b: 1, c: 10 },
      { a: 1, b: 1 },           ->      { a: 1, b: 1, c: 20 },
      { a: 1, b: 10, c: 1 },    ->      { a: 1, b: 1 },
      { a: 1, b: 1, c: 20 },    ->      { a: 1, b: 2, c: 2 },
      { a: 1, b: 20, c: 4 },    ->      { a: 1, b: 10, c: 1 },
      { a: 10, b: 2, c: 2 },    ->      { a: 1, b: 20, c: 3 },
      { a: 1, b: 1, c: 10 },    ->      { a: 1, b: 20, c: 4 }
      { a: 1, b: 1, c: 1 },     ->      { a: 1 },
      { a: 1, b: 2, c: 2 },     ->      { a: 2, b: 3, c: 3 },
      { a: 1 },                 ->      { a: 10, b: 2, c: 2 },
      { a: 2, b: 3, c: 3 }      ->      { a: 20, b: 1, c: 2 }
    ]                           ->    [
  ['a', 'b', 'c'])`, () => {
    let result = sortObjectArrByProps(objArr3, ['a', 'b', 'c']);
    expect(result).to.eql([
      { a: 1, b: 1, c: 1 },
      { a: 1, b: 1, c: 2 },
      { a: 1, b: 1, c: 10 },
      { a: 1, b: 1, c: 20 },
      { a: 1, b: 1 },
      { a: 1, b: 2, c: 2 },
      { a: 1, b: 10, c: 1 },
      { a: 1, b: 20, c: 3 },
      { a: 1, b: 20, c: 4 },
      { a: 1 },
      { a: 2, b: 3, c: 3 },
      { a: 10, b: 2, c: 2 },
      { a: 20, b: 1, c: 2 }
    ]);
  });

  it(`3.10) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                           ->    [
      { a: 1, b: 1, c: 2 },     ->      { a: 20, b: 1, c: 2 },
      { a: 20, b: 1, c: 2 },    ->      { a: 10, b: 2, c: 2 },
      { a: 1, b: 20, c: 3 },    ->      { a: 2, b: 3, c: 3 },
      { a: 1, b: 1 },           ->      { a: 1 },
      { a: 1, b: 10, c: 1 },    ->      { a: 1, b: 20, c: 4 },
      { a: 1, b: 1, c: 20 },    ->      { a: 1, b: 20, c: 3 },
      { a: 1, b: 20, c: 4 },    ->      { a: 1, b: 10, c: 1 },
      { a: 10, b: 2, c: 2 },    ->      { a: 1, b: 2, c: 2 },
      { a: 1, b: 1, c: 10 },    ->      { a: 1, b: 1 },
      { a: 1, b: 1, c: 1 },     ->      { a: 1, b: 1, c: 20 },
      { a: 1, b: 2, c: 2 },     ->      { a: 1, b: 1, c: 10 },
      { a: 1 },                 ->      { a: 1, b: 1, c: 2 },
      { a: 2, b: 3, c: 3 }      ->      { a: 1, b: 1, c: 1 }
    ]                           ->    [
  ['a', 'b', 'c'], 'r')`, () => {
    let result = sortObjectArrByProps(objArr3, ['a', 'b', 'c'], 'r');
    expect(result).to.eql([
      { a: 20, b: 1, c: 2 },
      { a: 10, b: 2, c: 2 },
      { a: 2, b: 3, c: 3 },
      { a: 1 },
      { a: 1, b: 20, c: 4 },
      { a: 1, b: 20, c: 3 },
      { a: 1, b: 10, c: 1 },
      { a: 1, b: 2, c: 2 },
      { a: 1, b: 1 },
      { a: 1, b: 1, c: 20 },
      { a: 1, b: 1, c: 10 },
      { a: 1, b: 1, c: 2 },
      { a: 1, b: 1, c: 1 }
    ]);
  });

  it(`3.11) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                ->    [
      { a: 1 },                      ->      { a: 1, b: 1, c: 1, d: 1 },
      { a: 1, b: 2 },                ->      { a: 1, b: 1, c: 1, d: 2 },
      { b: 1 },                      ->      { a: 1, b: 1, c: 1 },
      { a: 1, b: 1, c: 2, d: 1 },    ->      { a: 1, b: 1, c: 2, d: 1 },
      { c: 1 },                      ->      { a: 1, b: 2, c: 1 },
      { a: 1, c: 1 },                ->      { a: 1, b: 2, c: 1 },
      { c: 10 },                     ->      { a: 1, b: 2, c: 2 },
      { a: 1, b: 1, c: 1, d: 2 },    ->      { a: 1, b: 2, c: 4 },
      { c: 5 },                      ->      { a: 1, b: 2, c: 5 },
      { b: 3 },                      ->      { a: 1, b: 2 },
      { d: 1 },                      ->      { a: 1, b: 3, c: 4 },
      { a: 1, b: 2, c: 1 },          ->      { a: 1, c: 1 },
      { a: 1, b: 3, c: 4 },          ->      { a: 1 },
      { a: 1, b: 1, c: 1 },          ->      { a: 2, b: 2, c: 1 },
      { b: 3, c: 1 },                ->      { a: 2, b: 2, c: 3 },
      { a: 5, b: 3, c: 3 },          ->      { a: 3, b: 3, c: 3 },
      { a: 1, b: 2, c: 2 },          ->      { a: 4, b: 2, c: 2 },
      { b: 3, d: 1 },                ->      { a: 5, b: 1, c: 1 },
      { b: 3, d: 2 },                ->      { a: 5, b: 3, c: 3 },
      { b: 1, c: 4 },                ->      { b: 1, c: 3 },
      { a: 2, b: 2, c: 3 },          ->      { b: 1, c: 4 },
      { a: 1, b: 1, c: 1, d: 1 },    ->      { b: 1 },
      { a: 1, b: 2, c: 5 },          ->      { b: 3, c: 1 },
      { a: 2, b: 2, c: 1 },          ->      { b: 3, d: 1 },
      { b: 1, c: 3 },                ->      { b: 3, d: 2 },
      { a: 1, b: 2, c: 4 },          ->      { b: 3 },
      { a: 5, b: 1, c: 1 },          ->      { c: 1 },
      { a: 3, b: 3, c: 3 },          ->      { c: 5 },
      { a: 4, b: 2, c: 2 },          ->      { c: 10 },
      { a: 1, b: 2, c: 1 }           ->      { d: 1 }
    ]                                ->    ]
  ['a', 'b', 'c', 'd'])`, () => {
    let result = sortObjectArrByProps(objArr5, ['a', 'b', 'c', 'd']);
    expect(result).to.eql([
      { a: 1, b: 1, c: 1, d: 1 },
      { a: 1, b: 1, c: 1, d: 2 },
      { a: 1, b: 1, c: 1 },
      { a: 1, b: 1, c: 2, d: 1 },
      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 2 },
      { a: 1, b: 2, c: 4 },
      { a: 1, b: 2, c: 5 },
      { a: 1, b: 2 },
      { a: 1, b: 3, c: 4 },
      { a: 1, c: 1 },
      { a: 1 },
      { a: 2, b: 2, c: 1 },
      { a: 2, b: 2, c: 3 },
      { a: 3, b: 3, c: 3 },
      { a: 4, b: 2, c: 2 },
      { a: 5, b: 1, c: 1 },
      { a: 5, b: 3, c: 3 },
      { b: 1, c: 3 },
      { b: 1, c: 4 },
      { b: 1 },
      { b: 3, c: 1 },
      { b: 3, d: 1 },
      { b: 3, d: 2 },
      { b: 3 },
      { c: 1 },
      { c: 5 },
      { c: 10 },
      { d: 1 }
    ]);
  });

  it(`3.12) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                ->    [
      { a: 1 },                      ->      { d: 1 },
      { a: 1, b: 2 },                ->      { c: 10 },
      { b: 1 },                      ->      { c: 5 },
      { a: 1, b: 1, c: 2, d: 1 },    ->      { c: 1 },
      { c: 1 },                      ->      { b: 3 },
      { a: 1, c: 1 },                ->      { b: 3, d: 2 },
      { c: 10 },                     ->      { b: 3, d: 1 },
      { a: 1, b: 1, c: 1, d: 2 },    ->      { b: 3, c: 1 },
      { c: 5 },                      ->      { b: 1 },
      { b: 3 },                      ->      { b: 1, c: 4 },
      { d: 1 },                      ->      { b: 1, c: 3 },
      { a: 1, b: 2, c: 1 },          ->      { a: 5, b: 3, c: 3 },
      { a: 1, b: 3, c: 4 },          ->      { a: 5, b: 1, c: 1 },
      { a: 1, b: 1, c: 1 },          ->      { a: 4, b: 2, c: 2 },
      { b: 3, c: 1 },                ->      { a: 3, b: 3, c: 3 },
      { a: 5, b: 3, c: 3 },          ->      { a: 2, b: 2, c: 3 },
      { a: 1, b: 2, c: 2 },          ->      { a: 2, b: 2, c: 1 },
      { b: 3, d: 1 },                ->      { a: 1 },
      { b: 3, d: 2 },                ->      { a: 1, c: 1 },
      { b: 1, c: 4 },                ->      { a: 1, b: 3, c: 4 },
      { a: 2, b: 2, c: 3 },          ->      { a: 1, b: 2 },
      { a: 1, b: 1, c: 1, d: 1 },    ->      { a: 1, b: 2, c: 5 },
      { a: 1, b: 2, c: 5 },          ->      { a: 1, b: 2, c: 4 },
      { a: 2, b: 2, c: 1 },          ->      { a: 1, b: 2, c: 2 },
      { b: 1, c: 3 },                ->      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 4 },          ->      { a: 1, b: 2, c: 1 },
      { a: 5, b: 1, c: 1 },          ->      { a: 1, b: 1, c: 2, d: 1 },
      { a: 3, b: 3, c: 3 },          ->      { a: 1, b: 1, c: 1 },
      { a: 4, b: 2, c: 2 },          ->      { a: 1, b: 1, c: 1, d: 2 },
      { a: 1, b: 2, c: 1 }           ->      { a: 1, b: 1, c: 1, d: 1 }
    ]                                ->    ]
  ['a', 'b', 'c', 'd'], 'r')`, () => {
    let result = sortObjectArrByProps(objArr5, ['a', 'b', 'c', 'd'], 'r');
    expect(result).to.eql([
      { d: 1 },
      { c: 10 },
      { c: 5 },
      { c: 1 },
      { b: 3 },
      { b: 3, d: 2 },
      { b: 3, d: 1 },
      { b: 3, c: 1 },
      { b: 1 },
      { b: 1, c: 4 },
      { b: 1, c: 3 },
      { a: 5, b: 3, c: 3 },
      { a: 5, b: 1, c: 1 },
      { a: 4, b: 2, c: 2 },
      { a: 3, b: 3, c: 3 },
      { a: 2, b: 2, c: 3 },
      { a: 2, b: 2, c: 1 },
      { a: 1 },
      { a: 1, c: 1 },
      { a: 1, b: 3, c: 4 },
      { a: 1, b: 2 },
      { a: 1, b: 2, c: 5 },
      { a: 1, b: 2, c: 4 },
      { a: 1, b: 2, c: 2 },
      { a: 1, b: 2, c: 1 },
      { a: 1, b: 2, c: 1 },
      { a: 1, b: 1, c: 2, d: 1 },
      { a: 1, b: 1, c: 1 },
      { a: 1, b: 1, c: 1, d: 2 },
      { a: 1, b: 1, c: 1, d: 1 }
    ]);
  });

  it(`3.13) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                             ->    [
      { a: { b: { c: 8 } } },     ->      { a: { b: { c: 1 } } },
      { a: { b: { c: 10 } } },    ->      { a: { b: { c: 2 } } },
      { a: { b: { c: 7 } } },     ->      { a: { b: { c: 3 } } },
      { a: { b: { c: 2 } } },     ->      { a: { b: { c: 4 } } },
      { a: { b: { c: 5 } } },     ->      { a: { b: { c: 5 } } },
      { a: { b: { c: 4 } } },     ->      { a: { b: { c: 6 } } },
      { a: { b: { c: 9 } } },     ->      { a: { b: { c: 7 } } },
      { a: { b: { c: 1 } } },     ->      { a: { b: { c: 8 } } },
      { a: { b: { c: 3 } } },     ->      { a: { b: { c: 9 } } },
      { a: { b: { c: 6 } } }      ->      { a: { b: { c: 10 } } }
    ],                            ->    ]
  "a.b.c")`, () => {
    let result = sortObjectArrByProps(deepObjArr, "a.b.c");
    expect(result).to.eql([
      { a: { b: { c: 1 } } },
      { a: { b: { c: 2 } } },
      { a: { b: { c: 3 } } },
      { a: { b: { c: 4 } } },
      { a: { b: { c: 5 } } },
      { a: { b: { c: 6 } } },
      { a: { b: { c: 7 } } },
      { a: { b: { c: 8 } } },
      { a: { b: { c: 9 } } },
      { a: { b: { c: 10 } } }
    ]);
  });

  it(`3.14) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                             ->    [
      { a: { b: { c: 8 } } },     ->      { a: { b: { c: 10 } } },
      { a: { b: { c: 10 } } },    ->      { a: { b: { c: 9 } } },
      { a: { b: { c: 7 } } },     ->      { a: { b: { c: 8 } } },
      { a: { b: { c: 2 } } },     ->      { a: { b: { c: 7 } } },
      { a: { b: { c: 5 } } },     ->      { a: { b: { c: 6 } } },
      { a: { b: { c: 4 } } },     ->      { a: { b: { c: 5 } } },
      { a: { b: { c: 9 } } },     ->      { a: { b: { c: 4 } } },
      { a: { b: { c: 1 } } },     ->      { a: { b: { c: 3 } } },
      { a: { b: { c: 3 } } },     ->      { a: { b: { c: 2 } } },
      { a: { b: { c: 6 } } }      ->      { a: { b: { c: 1 } } }
    ],                            ->    ]
  "a.b.c")`, () => {
    let result = sortObjectArrByProps(deepObjArr, "a.b.c", "r");
    expect(result).to.eql([
      { a: { b: { c: 10 } } },
      { a: { b: { c: 9 } } },
      { a: { b: { c: 8 } } },
      { a: { b: { c: 7 } } },
      { a: { b: { c: 6 } } },
      { a: { b: { c: 5 } } },
      { a: { b: { c: 4 } } },
      { a: { b: { c: 3 } } },
      { a: { b: { c: 2 } } },
      { a: { b: { c: 1 } } }
    ]);
  });

  it(`3.15) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                    ->    [
      [ [ [ 7 ] ] ],     ->      [ [ [ 1 ] ] ],
      [ [ [ 1 ] ] ],     ->      [ [ [ 2 ] ] ],
      [ [ [ 4 ] ] ],     ->      [ [ [ 3 ] ] ],
      [ [ [ 8 ] ] ],     ->      [ [ [ 4 ] ] ],
      [ [ [ 10 ] ] ],    ->      [ [ [ 5 ] ] ],
      [ [ [ 2 ] ] ],     ->      [ [ [ 6 ] ] ],
      [ [ [ 5 ] ] ],     ->      [ [ [ 7 ] ] ],
      [ [ [ 9 ] ] ],     ->      [ [ [ 8 ] ] ],
      [ [ [ 3 ] ] ],     ->      [ [ [ 9 ] ] ],
      [ [ [ 6 ] ] ]      ->      [ [ [ 10 ] ] ]
    ],                   ->    ]
  "0.0.0")`, () => {
    let result = sortObjectArrByProps(deepArrArr, "0.0.0");
    expect(result).to.eql([
      [[[1]]],
      [[[2]]],
      [[[3]]],
      [[[4]]],
      [[[5]]],
      [[[6]]],
      [[[7]]],
      [[[8]]],
      [[[9]]],
      [[[10]]]
    ]);
  });

  it(`3.16) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                    ->    [
      [ [ [ 7 ] ] ],     ->      [ [ [ 10 ] ] ],
      [ [ [ 1 ] ] ],     ->      [ [ [ 9 ] ] ],
      [ [ [ 4 ] ] ],     ->      [ [ [ 8 ] ] ],
      [ [ [ 8 ] ] ],     ->      [ [ [ 7 ] ] ],
      [ [ [ 10 ] ] ],    ->      [ [ [ 6 ] ] ],
      [ [ [ 2 ] ] ],     ->      [ [ [ 5 ] ] ],
      [ [ [ 5 ] ] ],     ->      [ [ [ 4 ] ] ],
      [ [ [ 9 ] ] ],     ->      [ [ [ 3 ] ] ],
      [ [ [ 3 ] ] ],     ->      [ [ [ 2 ] ] ],
      [ [ [ 6 ] ] ]      ->      [ [ [ 1 ] ] ],
    ],                   ->    ]
  "0.0.0", "r")`, () => {
    let result = sortObjectArrByProps(deepArrArr, "0.0.0", "r");
    expect(result).to.eql([
      [[[10]]],
      [[[9]]],
      [[[8]]],
      [[[7]]],
      [[[6]]],
      [[[5]]],
      [[[4]]],
      [[[3]]],
      [[[2]]],
      [[[1]]]
    ]);
  });

  it(`3.17) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                          ->    [
      { a: [ { b: 9 } ] },     ->      { a: [ { b: 1 } ] },
      { a: [ { b: 2 } ] },     ->      { a: [ { b: 2 } ] },
      { a: [ { b: 3 } ] },     ->      { a: [ { b: 3 } ] },
      { a: [ { b: 8 } ] },     ->      { a: [ { b: 4 } ] },
      { a: [ { b: 1 } ] },     ->      { a: [ { b: 5 } ] },
      { a: [ { b: 5 } ] },     ->      { a: [ { b: 6 } ] },
      { a: [ { b: 7 } ] },     ->      { a: [ { b: 7 } ] },
      { a: [ { b: 6 } ] },     ->      { a: [ { b: 8 } ] },
      { a: [ { b: 10 } ] },    ->      { a: [ { b: 9 } ] },
      { a: [ { b: 4 } ] }      ->      { a: [ { b: 10 } ] }
    ],                         ->    ]
  "a.0.b")`, () => {
    let result = sortObjectArrByProps(deepObjArrObjArr, "a.0.b");
    expect(result).to.eql([
      { a: [{ b: 1 }] },
      { a: [{ b: 2 }] },
      { a: [{ b: 3 }] },
      { a: [{ b: 4 }] },
      { a: [{ b: 5 }] },
      { a: [{ b: 6 }] },
      { a: [{ b: 7 }] },
      { a: [{ b: 8 }] },
      { a: [{ b: 9 }] },
      { a: [{ b: 10 }] }
    ]);
  });

  it(`3.18) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                          ->    [
      { a: [ { b: 9 } ] },     ->      { a: [ { b: 10 } ] },
      { a: [ { b: 2 } ] },     ->      { a: [ { b: 9 } ] },
      { a: [ { b: 3 } ] },     ->      { a: [ { b: 8 } ] },
      { a: [ { b: 8 } ] },     ->      { a: [ { b: 7 } ] },
      { a: [ { b: 1 } ] },     ->      { a: [ { b: 6 } ] },
      { a: [ { b: 5 } ] },     ->      { a: [ { b: 5 } ] },
      { a: [ { b: 7 } ] },     ->      { a: [ { b: 4 } ] },
      { a: [ { b: 6 } ] },     ->      { a: [ { b: 3 } ] },
      { a: [ { b: 10 } ] },    ->      { a: [ { b: 2 } ] },
      { a: [ { b: 4 } ] }      ->      { a: [ { b: 1 } ] }
    ],                         ->    ]
  "a.0.b", "r")`, () => {
    let result = sortObjectArrByProps(deepObjArrObjArr, "a.0.b", "r");
    expect(result).to.eql([
      { a: [{ b: 10 }] },
      { a: [{ b: 9 }] },
      { a: [{ b: 8 }] },
      { a: [{ b: 7 }] },
      { a: [{ b: 6 }] },
      { a: [{ b: 5 }] },
      { a: [{ b: 4 }] },
      { a: [{ b: 3 }] },
      { a: [{ b: 2 }] },
      { a: [{ b: 1 }] }
    ]);
  });

  it(`3.19) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                       ->    [
      [ { a: [ 2 ] } ],     ->      [ { a: [ 1 ] } ],
      [ { a: [ 6 ] } ],     ->      [ { a: [ 2 ] } ],
      [ { a: [ 10 ] } ],    ->      [ { a: [ 3 ] } ],
      [ { a: [ 3 ] } ],     ->      [ { a: [ 4 ] } ],
      [ { a: [ 5 ] } ],     ->      [ { a: [ 5 ] } ],
      [ { a: [ 4 ] } ],     ->      [ { a: [ 6 ] } ],
      [ { a: [ 7 ] } ],     ->      [ { a: [ 7 ] } ],
      [ { a: [ 9 ] } ],     ->      [ { a: [ 8 ] } ],
      [ { a: [ 8 ] } ],     ->      [ { a: [ 9 ] } ],
      [ { a: [ 1 ] } ]      ->      [ { a: [ 10 ] } ]
    ],                      ->    ]
  "0.a.0")`, () => {
    let result = sortObjectArrByProps(deepArrObjArrArr, "0.a.0");
    expect(result).to.eql([
      [{ a: [1] }],
      [{ a: [2] }],
      [{ a: [3] }],
      [{ a: [4] }],
      [{ a: [5] }],
      [{ a: [6] }],
      [{ a: [7] }],
      [{ a: [8] }],
      [{ a: [9] }],
      [{ a: [10] }]
    ]);
  });

  it(`3.20) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                       ->    [
      [ { a: [ 2 ] } ],     ->      [ { a: [ 10 ] } ],
      [ { a: [ 6 ] } ],     ->      [ { a: [ 9 ] } ],
      [ { a: [ 10 ] } ],    ->      [ { a: [ 8 ] } ],
      [ { a: [ 3 ] } ],     ->      [ { a: [ 7 ] } ],
      [ { a: [ 5 ] } ],     ->      [ { a: [ 6 ] } ],
      [ { a: [ 4 ] } ],     ->      [ { a: [ 5 ] } ],
      [ { a: [ 7 ] } ],     ->      [ { a: [ 4 ] } ],
      [ { a: [ 9 ] } ],     ->      [ { a: [ 3 ] } ],
      [ { a: [ 8 ] } ],     ->      [ { a: [ 2 ] } ],
      [ { a: [ 1 ] } ]      ->      [ { a: [ 1 ] } ]
    ],                      ->    ]
  "0.a.0", "r")`, () => {
    let result = sortObjectArrByProps(deepArrObjArrArr, "0.a.0", "r");
    expect(result).to.eql([
      [{ a: [10] }],
      [{ a: [9] }],
      [{ a: [8] }],
      [{ a: [7] }],
      [{ a: [6] }],
      [{ a: [5] }],
      [{ a: [4] }],
      [{ a: [3] }],
      [{ a: [2] }],
      [{ a: [1] }]
    ]);
  });

  it(`3.21) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                         ->    [
      { a: false, b: 5 },     ->      { a: false, b: 5 },
      { b: 10 },              ->      { a: false, b: 15 },
      { a: false, b: 15 },    ->      { a: false, b: 30 },
      { b: 40 },              ->      { a: false, b: 45 },
      { a: false, b: 30 },    ->      { a: false, b: 50 },
      { a: false, b: 45 },    ->      { a: true, b: 5 },
      { b: 5 },               ->      { a: true, b: 10 },
      { a: false, b: 50 },    ->      { a: true, b: 20 },
      { a: true, b: 5 },      ->      { a: true, b: 25 },
      { b: 20 },              ->      { a: true, b: 40 },
      { a: true, b: 10 },     ->      { b: 5 },
      { a: true, b: 20 },     ->      { b: 10 },
      { a: true, b: 25 },     ->      { b: 20 },
      { b: 30 },              ->      { b: 30 },
      { a: true, b: 40 }      ->      { b: 40 }
    ],                        ->    ]
  ["a", "b"])`, () => {
    let result = sortObjectArrByProps(objArrWithBooleans, ["a", "b"]);
    expect(result).to.eql([
      { a: false, b: 5 },
      { a: false, b: 15 },
      { a: false, b: 30 },
      { a: false, b: 45 },
      { a: false, b: 50 },
      { a: true, b: 5 },
      { a: true, b: 10 },
      { a: true, b: 20 },
      { a: true, b: 25 },
      { a: true, b: 40 },
      { b: 5 },
      { b: 10 },
      { b: 20 },
      { b: 30 },
      { b: 40 }
    ]);
  });

  it(`3.22) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                         ->    [
      { a: false, b: 5 },     ->      { b: 40 },
      { b: 10 },              ->      { b: 30 },
      { a: false, b: 15 },    ->      { b: 20 },
      { b: 40 },              ->      { b: 10 },
      { a: false, b: 30 },    ->      { b: 5 },
      { a: false, b: 45 },    ->      { a: true, b: 40 },
      { b: 5 },               ->      { a: true, b: 25 },
      { a: false, b: 50 },    ->      { a: true, b: 20 },
      { a: true, b: 5 },      ->      { a: true, b: 10 },
      { b: 20 },              ->      { a: true, b: 5 },
      { a: true, b: 10 },     ->      { a: false, b: 50 },
      { a: true, b: 20 },     ->      { a: false, b: 45 },
      { a: true, b: 25 },     ->      { a: false, b: 30 },
      { b: 30 },              ->      { a: false, b: 15 },
      { a: true, b: 40 }      ->      { a: false, b: 5 }
    ],                        ->    ]
  ["a", "b"], "r")`, () => {
    let result = sortObjectArrByProps(objArrWithBooleans, ["a", "b"], "r");
    expect(result).to.eql([
      { b: 40 },
      { b: 30 },
      { b: 20 },
      { b: 10 },
      { b: 5 },
      { a: true, b: 40 },
      { a: true, b: 25 },
      { a: true, b: 20 },
      { a: true, b: 10 },
      { a: true, b: 5 },
      { a: false, b: 50 },
      { a: false, b: 45 },
      { a: false, b: 30 },
      { a: false, b: 15 },
      { a: false, b: 5 }
    ]);
  });

  it(`3.23) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                        ->    [
      { c: '2', d: 5 },                      ->      { a: { b: false }, c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 11 },    ->      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '3', d: 10 },    ->      { a: { b: false }, c: '3', d: 10 },
      { a: { b: true }, c: '11', d: 6 },     ->      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '20', d: 3 },    ->      { a: { b: true }, c: '11', d: 11 },
      { a: { b: false }, c: '2', d: 5 },     ->      { c: '2', d: 5 },
      { c: '2', d: 10 }                      ->      { c: '2', d: 10 }
    ],                                       ->    ]
  ["a.b", "c", "d"])`, () => {
    let result = sortObjectArrByProps(undefinedDeepObj, ["a.b", "c", "d"]);
    expect(result).to.eql([
      { a: { b: false }, c: '2', d: 5 },
      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '3', d: 10 },
      { a: { b: true }, c: '11', d: 6 },
      { a: { b: true }, c: '11', d: 11 },
      { c: '2', d: 5 },
      { c: '2', d: 10 }
    ]);
  });

  it(`3.24) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                        ->    [
      { c: '2', d: 5 },                      ->      { c: '2', d: 10 },
      { a: { b: true }, c: '11', d: 11 },    ->      { c: '2', d: 5 },
      { a: { b: false }, c: '3', d: 10 },    ->      { a: { b: true }, c: '11', d: 11 },
      { a: { b: true }, c: '11', d: 6 },     ->      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '20', d: 3 },    ->      { a: { b: false }, c: '3', d: 10 },
      { a: { b: false }, c: '2', d: 5 },     ->      { a: { b: false }, c: '20', d: 3 },
      { c: '2', d: 10 }                      ->      { a: { b: false }, c: '2', d: 5 }
    ],                                       ->    ]
  ["a.b", "c", "d"], "r")`, () => {
    let result = sortObjectArrByProps(undefinedDeepObj, ["a.b", "c", "d"], "r");
    expect(result).to.eql([
      { c: '2', d: 10 },
      { c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 11 },
      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '3', d: 10 },
      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '2', d: 5 }
    ]);
  });

  it(`3.25) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                        ->    [
      { c: '2', d: 5 },                      ->      { a: { b: false }, c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 11 },    ->      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '3', d: 10 },    ->      { a: { b: false }, c: '3', d: 10 },
      { a: { b: true }, c: '11', d: 6 },     ->      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '20', d: 3 },    ->      { a: { b: true }, c: '11', d: 11 },
      { a: { b: false }, c: '2', d: 5 },     ->      { c: '2', d: 5 },
      { c: '2', d: 10 }                      ->      { c: '2', d: 10 }
    ],                                       ->    ]
  ["a.b", "c", "d"], "s")`, () => {
    let result = sortObjectArrByProps(undefinedDeepObj, ["a.b", "c", "d"], "s");
    expect(result).to.eql([
      { a: { b: false }, c: '2', d: 5 },
      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '3', d: 10 },
      { a: { b: true }, c: '11', d: 6 },
      { a: { b: true }, c: '11', d: 11 },
      { c: '2', d: 5 },
      { c: '2', d: 10 }
    ]);
  });

  it(`3.26) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                        ->    [
      { c: '2', d: 5 },                      ->      { c: '2', d: 10 },
      { a: { b: true }, c: '11', d: 11 },    ->      { c: '2', d: 5 },
      { a: { b: false }, c: '3', d: 10 },    ->      { a: { b: true }, c: '11', d: 11 },
      { a: { b: true }, c: '11', d: 6 },     ->      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '20', d: 3 },    ->      { a: { b: false }, c: '3', d: 10 },
      { a: { b: false }, c: '2', d: 5 },     ->      { a: { b: false }, c: '20', d: 3 },
      { c: '2', d: 10 }                      ->      { a: { b: false }, c: '2', d: 5 }
    ],                                       ->    ]
  ["a.b", "c", "d"], "r")`, () => {
    let result = sortObjectArrByProps(undefinedDeepObj, ["a.b", "c", "d"], "r");
    expect(result).to.eql([
      { c: '2', d: 10 },
      { c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 11 },
      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '3', d: 10 },
      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '2', d: 5 }
    ]);
  });

  it(`3.27) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                        ->    [
      { c: '2', d: 5 },                      ->      { a: { b: false }, c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 11 },    ->      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '3', d: 10 },    ->      { a: { b: false }, c: '3', d: 10 },
      { a: { b: true }, c: '11', d: 6 },     ->      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '20', d: 3 },    ->      { a: { b: true }, c: '11', d: 11 },
      { a: { b: false }, c: '2', d: 5 },     ->      { c: '2', d: 5 },
      { c: '2', d: 10 }                      ->      { c: '2', d: 10 }
    ],                                       ->    ]
  ["a.b", "c", "d"], "....")`, () => {
    let result = sortObjectArrByProps(undefinedDeepObj, ["a.b", "c", "d"], "....");
    expect(result).to.eql([
      { a: { b: false }, c: '2', d: 5 },
      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '3', d: 10 },
      { a: { b: true }, c: '11', d: 6 },
      { a: { b: true }, c: '11', d: 11 },
      { c: '2', d: 5 },
      { c: '2', d: 10 }
    ]);
  });

  it(`3.28) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                        ->    [
      { c: '2', d: 5 },                      ->      { c: '2', d: 10 },
      { a: { b: true }, c: '11', d: 11 },    ->      { c: '2', d: 5 },
      { a: { b: false }, c: '3', d: 10 },    ->      { a: { b: true }, c: '11', d: 11 },
      { a: { b: true }, c: '11', d: 6 },     ->      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '20', d: 3 },    ->      { a: { b: false }, c: '3', d: 10 },
      { a: { b: false }, c: '2', d: 5 },     ->      { a: { b: false }, c: '20', d: 3 },
      { c: '2', d: 10 }                      ->      { a: { b: false }, c: '2', d: 5 }
    ],                                       ->    ]
  ["a.b", "c", "d"], "RrR")`, () => {
    let result = sortObjectArrByProps(undefinedDeepObj, ["a.b", "c", "d"], "RrR");
    expect(result).to.eql([
      { c: '2', d: 10 },
      { c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 11 },
      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '3', d: 10 },
      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '2', d: 5 }
    ]);
  });

  it(`3.29) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                        ->    [
      { c: '2', d: 5 },                      ->      { a: { b: false }, c: '3', d: 10 },
      { a: { b: true }, c: '11', d: 11 },    ->      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '3', d: 10 },    ->      { a: { b: false }, c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 6 },     ->      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '20', d: 3 },    ->      { a: { b: true }, c: '11', d: 11 },
      { a: { b: false }, c: '2', d: 5 },     ->      { c: '2', d: 5 },
      { c: '2', d: 10 }                      ->      { c: '2', d: 10 }
    ],                                       ->    ]
  ["a.b", "c", "d"], "ara")`, () => {
    let result = sortObjectArrByProps(undefinedDeepObj, ["a.b", "c", "d"], "ara");
    expect(result).to.eql([
      { a: { b: false }, c: '3', d: 10 },
      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 6 },
      { a: { b: true }, c: '11', d: 11 },
      { c: '2', d: 5 },
      { c: '2', d: 10 }
    ]);
  });

  it(`3.30) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                                        ->    [
      { c: '2', d: 5 },                      ->      { c: '2', d: 10 },
      { a: { b: true }, c: '11', d: 11 },    ->      { c: '2', d: 5 },
      { a: { b: false }, c: '3', d: 10 },    ->      { a: { b: true }, c: '11', d: 11 },
      { a: { b: true }, c: '11', d: 6 },     ->      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '20', d: 3 },    ->      { a: { b: false }, c: '2', d: 5 },
      { a: { b: false }, c: '2', d: 5 },     ->      { a: { b: false }, c: '20', d: 3 },
      { c: '2', d: 10 }                      ->      { a: { b: false }, c: '3', d: 10 }
    ],                                       ->    ]
  ["a.b", "c", "d"], "r R")`, () => {
    let result = sortObjectArrByProps(undefinedDeepObj, ["a.b", "c", "d"], "r R");
    expect(result).to.eql([
      { c: '2', d: 10 },
      { c: '2', d: 5 },
      { a: { b: true }, c: '11', d: 11 },
      { a: { b: true }, c: '11', d: 6 },
      { a: { b: false }, c: '2', d: 5 },
      { a: { b: false }, c: '20', d: 3 },
      { a: { b: false }, c: '3', d: 10 }
    ]);
  });

  it(`3.31) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                         ->    [
      [[],[],[],[],[]],       ->      [[]],
      [[]],                   ->      [[],[]],
      [[],[],[],[],[],[]],    ->      [[],[],[]],
      [[],[],[]],             ->      [[],[],[],[]],
      [[],[],],               ->      [[],[],[],[],[]],
      [[],[],[],[]]           ->      [[],[],[],[],[],[]]
    ],                        ->    ]
  ["length"])`, () => {
    let result = sortObjectArrByProps(arrEmptyArrs, "length");
    expect(result).to.eql([
      [[]],
      [[], []],
      [[], [], []],
      [[], [], [], []],
      [[], [], [], [], []],
      [[], [], [], [], [], []]
    ]);
  });

  it(`3.32) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [                         ->    [
      [[],[],[],[],[]],       ->      [[],[],[],[],[],[]],
      [[]],                   ->      [[],[],[],[],[]],
      [[],[],[],[],[],[]],    ->      [[],[],[],[]],
      [[],[],[]],             ->      [[],[],[]],
      [[],[],],               ->      [[],[]],
      [[],[],[],[]]           ->      [[]]
    ],                        ->    ]
  ["length", "r"])`, () => {
    let result = sortObjectArrByProps(arrEmptyArrs, "length", "r");
    expect(result).to.eql([
      [[], [], [], [], [], []],
      [[], [], [], [], []],
      [[], [], [], []],
      [[], [], []],
      [[], []],
      [[]]
    ]);
  });

  it(`3.33) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [
      { a: 'o', b: 6 },
      { a: 'É', b: 4 },
      { a: 'A', b: 3 },
      { a: 'E', b: 1 },
      { a: 'ö', b: 5 },
      { a: 'Á', b: 2 }
    ]
  )`, () => {
    let result = sortObjectArrByProps(arrObjsWithAccentedContent, "a");
    expect(result).to.eql([
      { a: 'A', b: 3 },
      { a: 'Á', b: 2 },
      { a: 'E', b: 1 },
      { a: 'É', b: 4 },
      { a: 'o', b: 6 },
      { a: 'ö', b: 5 }
    ]);
  });

  it(`3.34) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [
      { a: 'o', b: 6 },
      { a: 'É', b: 4 },
      { a: 'A', b: 3 },
      { a: 'E', b: 1 },
      { a: 'ö', b: 5 },
      { a: 'Á', b: 2 }
    ]
  )`, () => {
    let result = sortObjectArrByProps(arrObjsWithAccentedContent, ["a", "b"]);
    expect(result).to.eql([
      { a: 'A', b: 3 },
      { a: 'Á', b: 2 },
      { a: 'E', b: 1 },
      { a: 'É', b: 4 },
      { a: 'o', b: 6 },
      { a: 'ö', b: 5 }
    ]);
  });

  it(`3.35) ../sortObjArrByProps.ts.sortObjectArrByProps(
    [
      { a: 'o', b: 6 },
      { a: 'É', b: 4 },
      { a: 'A', b: 3 },
      { a: 'E', b: 1 },
      { a: 'ö', b: 5 },
      { a: 'Á', b: 2 }
    ]
  )`, () => {
    let result = sortObjectArrByProps(arrObjsWithAccentedContent, ["b", "a"]);
    expect(result).to.eql([
      { a: 'E', b: 1 },
      { a: 'Á', b: 2 },
      { a: 'A', b: 3 },
      { a: 'É', b: 4 },
      { a: 'ö', b: 5 },
      { a: 'o', b: 6 }
    ]);
  });

  it(`3.36) ../sortObjArrByProps.ts.removeAccents(
      'É só um teste de conversão de caracteres.' --> 'E so um teste de conversao de caracteres.'
    )`, () => {
    let result = removeAccents(accentRemovalTest1);
    expect(result).to.eql('E so um teste de conversao de caracteres.');
  });
});