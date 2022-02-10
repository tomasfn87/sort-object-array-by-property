import { expect } from "chai";
import { getDeepProp, getDeepPropValue } from "../getDeepPropValue";

const deepObj = { a: { b: { c: 10 } } };
const deepProp1 = 'a.b.c';
const deepArr = [ [ [ 20 ] ] ];
const deepProp2 = '0.0.0';
const deepObjArr = { a: [ { b: 30 } ] };
const deepProp3 = 'a.0.b';
const deepArrObj = [ { a: [ 40 ] } ];
const deepProp4 = '0.a.0';

describe('4.1) Get Deep Property, receives a string and checks if one of its characters is a "." (a period); if yes, it means that an object inside an object or an array inside an array (or any combination between objects and arrays) is trying to be accessed; else, a regular, one-level deep property is trying to be accessed. The function returns an array if a deep property is received, or a number or a string if a simple, shallow property is received.', () => {
  it(`4.1.1) getDeepProp('a.b.c')    -> ['a', 'b', 'c']`, () => {
    let result = getDeepProp(deepProp1);
    expect(result).to.eql(['a', 'b', 'c']);
  });

  it(`4.1.2) getDeepProp('0.0.0')    -> ['0', '0', '0']`, () => {
    let result = getDeepProp(deepProp2);
    expect(result).to.eql(['0', '0', '0']);
  });

  it(`4.1.3) getDeepProp('a.0.b')    -> ['a', '0', 'b']`, () => {
    let result = getDeepProp(deepProp3);
    expect(result).to.eql(['a', '0', 'b']);
  });

  it(`4.1.4) getDeepProp('0.a.0')    -> ['0', 'a', '0']`, () => {
    let result = getDeepProp(deepProp4);
    expect(result).to.eql(['0', 'a', '0']);
  });

  it(`4.1.5) getDeepProp(0)          -> 0`, () => {
    let result = getDeepProp(0);
    expect(result).to.eql(0);
  });

  it(`4.1.6) getDeepProp(0.5)        -> 0`, () => {
    let result = getDeepProp(0.5);
    expect(result).to.eql(0);
  });
});


describe(`4.2) Get Deep Property's Value, access a object's deep property through the notation 'a.b.c' -> { a: { b: { c: 1 } } }`, () => {
  it(`4.2.1) getDeepPropValue({ a: { b: { c: 10 } } }, 'a.b.c')    -> 10`, () => {
    let result = getDeepPropValue(deepObj, deepProp1);
    expect(result).to.eql(10);
  });

  it(`4.2.2) getDeepPropValue([ [ [ 20 ] ] ], '0.0.0')             -> 20`, () => {
    let result = getDeepPropValue(deepArr, deepProp2);
    expect(result).to.eql(20);
  });

  it(`4.2.3) getDeepPropValue({ a: [ { b: 30 } ] }, 'a.0.b')       -> 30`, () => {
    let result = getDeepPropValue(deepObjArr, deepProp3);
    expect(result).to.eql(30);
  });

  it(`4.2.4) getDeepPropValue([ { a: [ 40 ] } ], '0.a.0')          -> 40`, () => {
    let result = getDeepPropValue(deepArrObj, deepProp4);
    expect(result).to.eql(40);
  });

  it(`4.2.5) getDeepPropValue([ 50 ], 0)                           -> 50`, () => {
    let result = getDeepPropValue([ 50 ], 0);
    expect(result).to.eql(50);
  });

  it(`4.2.6) getDeepPropValue({ a: 60 }, 'a')                      -> 60`, () => {
    let result = getDeepPropValue({ a: 60 }, 'a');
    expect(result).to.eql(60);
  });
});





