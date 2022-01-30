import { expect } from "chai";
import sortObjectArrByProps from "../sortObjArrByProps";

const objArr = [
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
  { a: 1, b: 2, c: 4 },
]

describe('3) Sort Object Array by Properties, takes an array of properties whose items will be used as sorting parameters.', () => {
  it(`3.1) ../sortObjArrByProps.ts.sortObjectArrByProps(
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
    let result = sortObjectArrByProps(objArr, ['a', 'b', 'c']);
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

  it(`3.2) ../sortObjArrByProps.ts.sortObjectArrByProps(
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
    let result = sortObjectArrByProps(objArr, ['a', 'b', 'c']);
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
});