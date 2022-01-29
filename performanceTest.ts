import sortObjectArrByPropDirectly from "./sortObjArrByPropDirectly";
import sortObjectArrByPropIndexing from "./sortObjArrByPropIndexing";
import { NewLongArray, NewArrOfArrs } from "./randomNumberArrayGenerator";

const showTime = (milliseconds:number):string => {
  return `${((milliseconds) / 1000).toFixed(3)} seconds`
}

// NUMBER
const t1 = performance.now();
NewLongArray(10e6, 'n');
const t2 = performance.now();
console.log(` -> { NewLongArray(10e6, 'n') }\n    { ${showTime(t2 - t1)} }`);

// STRING
console.log();
const t3 = performance.now();
NewLongArray(10e6, 's');
const t4 = performance.now();
console.log(` -> { NewLongArray(10e6, 's') }\n    { ${showTime(t4 - t3)} }`);

// STRING
console.log()
const t5 = performance.now();
const arrArrString = NewArrOfArrs(50000, NewLongArray, 5, 's');
const t6 = performance.now();
console.log(
  ` -> { const arrArrString = NewArrOfArrs(50000, NewLongArray, 5, 's') }\n    { ${showTime(t6 - t5)} }`
);

// NUMBER
console.log()
const t7 = performance.now();
const arrArrNumber = NewArrOfArrs(50000, NewLongArray, 5);
const t8 = performance.now();
console.log(
  ` -> { const arrArrNumber = NewArrOfArrs(50000, NewLongArray, 5) }\n    { ${showTime(t8 - t7)} }`
);

// STRING
console.log()
const t9 = performance.now();
sortObjectArrByPropIndexing(arrArrString, 3);
const t10 = performance.now();
console.log(
  ` -> { sortObjectArrByPropIndexing(arrArrString, 3) }\n    { ${showTime(t10 - t9)} }`
);

// STRING
console.log()
const t11 = performance.now();
sortObjectArrByPropDirectly(arrArrString, 3);
const t12 = performance.now();
console.log(
  ` -> { sortObjectArrByPropDirectly(arrArrString, 3) }\n    { ${showTime(t12 - t11)} }`
);

// NUMBER
console.log()
const t13 = performance.now();
sortObjectArrByPropIndexing(arrArrNumber, 3);
const t14 = performance.now();
console.log(
  ` -> { sortObjectArrByPropIndexing(arrArrNumber, 3) }\n    { ${showTime(t14 - t13)} }`
);

// NUMBER
console.log()
const t15 = performance.now();
sortObjectArrByPropDirectly(arrArrNumber, 3);
const t16 = performance.now();
console.log(
  ` -> { sortObjectArrByPropDirectly(arrArrNumber, 3) }\n    { ${showTime(t16 - t15)} }`
);
