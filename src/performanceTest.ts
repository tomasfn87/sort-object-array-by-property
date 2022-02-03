import { sortObjectArrByProps } from "./sortObjArrByProps";
import { sortObjectArrByPropDirectly } from "./sortObjArrByPropDirectly";
import { sortObjectArrByPropIndexing } from "./sortObjArrByPropIndexing";
import { NewLongArray, NewArrOfArrs } from "./randomNumberArrayGenerator";

const showTime = (milliseconds:number):string => {
  return `${((milliseconds) / 1000).toFixed(3)} seconds`
}

let numberOfArrays = parseInt(process.argv[2])*1000;
let eachArraySize = parseInt(process.argv[3]);

if (eachArraySize < 5) {
  eachArraySize = 5
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
const arrArrString = NewArrOfArrs(numberOfArrays, NewLongArray, eachArraySize, 's');
const t6 = performance.now();
console.log(
  ` -> { const arrArrString = NewArrOfArrs(${numberOfArrays}, NewLongArray, ${eachArraySize}, 's') }\n    { ${showTime(t6 - t5)} }`
);

// NUMBER
console.log()
const t7 = performance.now();
const arrArrNumber = NewArrOfArrs(numberOfArrays, NewLongArray, eachArraySize);
const t8 = performance.now();
console.log(
  ` -> { const arrArrNumber = NewArrOfArrs(${numberOfArrays}, NewLongArray, ${eachArraySize}) }\n    { ${showTime(t8 - t7)} }`
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

let sortProps = [];
for (let i = 1; i <= eachArraySize; i++) {
  sortProps.push(i)
}

// STRING
console.log()
const t17 = performance.now();
sortObjectArrByProps(arrArrString, sortProps);
const t18 = performance.now();
console.log(
  ` -> { sortObjectArrByProps(arrArrString, [0,1,...,${eachArraySize - 2},${eachArraySize-1}]) }\n    { ${showTime(t18 - t17)} }`
);

// NUMBER
console.log()
const t19 = performance.now();
sortObjectArrByProps(arrArrNumber, sortProps);
const t20 = performance.now();
console.log(
  ` -> { sortObjectArrByProps(arrArrNumber, [0,1,...,${eachArraySize - 2},${eachArraySize-1}]) }\n    { ${showTime(t20 - t19)} }`
);

// STRING
console.log()
const t21 = performance.now();
sortObjectArrByProps(arrArrString, 3);
const t22 = performance.now();
console.log(
  ` -> { sortObjectArrByProps(arrArrString, 3) }\n    { ${showTime(t22 - t21)} }`
);

// NUMBER
console.log()
const t23 = performance.now();
sortObjectArrByProps(arrArrNumber, 3);
const t24 = performance.now();
console.log(
  ` -> { sortObjectArrByProps(arrArrNumber, 3) }\n    { ${showTime(t24 - t23)} }`
);
