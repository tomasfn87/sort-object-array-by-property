export default function sortObjectArrByProps<Type>(
  objArr: Type[] | any,
  objProps: string | number | string[] | number[],
  reverse: 's' | 'S' | 'r' | 'R' = 's'
  ):Type[] | any {
  
  let sortedObjectArray:Type[] = [];
  let values:string[] | number[] | string[][] | number[][] | any[] | any[][] = [];
  let indices:number[] = [];
  
  if (Array.isArray(objProps)) { // sort by multiple properties
    // 1) create an empty array and an index for each item of argument objArr
    for (let i=0; i < objArr.length; i++) {
      values.push([]);
      indices.push(i);
    }

    // 2) adding each 'objArr[objProps]' to 'values' for each item of 'objProps'
    for (let j=0; j < objArr.length; j++) {
      for (let k=0; k < objProps.length; k++) {
        values[j].push(objArr[j][objProps[k]])
      }
    }
  } else { // sort by one property
    objArr.forEach((obj:Type | any, index:number):void => {
      typeof objProps === 'string'
      || typeof objProps === 'number'
        ? values.push(obj[objProps])
        : values.push(obj[objProps].toString());
      indices.push(index);
    });
  }

  if (!Array.isArray(objProps)) {                                  // actually sorting by one property
    for (let i=1; i < values.length; i++) {                        // sort optimization: at each iteration, the last value will be skipped (i)
      for (let j=0; j < values.length - i; j++) {                  // values index
        if (values[j] > values[j+1]) {                             // only case: value is greater than
          [values[j], values[j+1]] = [values[j+1], values[j]];     // switch values
          [indices[j], indices[j+1]] = [indices[j+1], indices[j]]; // switch indices
        }
      }
    }
  } else if (!!Array.isArray(objProps)) {      // actually sorting by multiple properties
    let k = 0;                                 // objProps index
    for (let i=1; i < values.length; i++) {    // sort optimization: at each iteration, the last value will be skipped (i)
      for (let j=0; j < values.length - i;) {  // values index
        if (values[j][k] === values[j+1][k]) { // 1) values are equal:
          if (k === objProps.length - 1) {     // 1.1) all properties values are equal, can't sort
            k = 0; j++;                        // 1.1.1) restart properties; check next value
          } else {                             // 1.2) there are still properties to be checked
            k++;                               // 1.2.1) check next property
          }
        } else if (values[j][k] > values[j+1][k]) {                // 2) values are different, the first one is greater:
          [values[j], values[j+1]] = [values[j+1], values[j]];     // 2.1) switch values
          [indices[j], indices[j+1]] = [indices[j+1], indices[j]]; // 2.3) switch indices
          k = 0; j++;                                              // 2.4) restart properties; check next value
        } else if (values[j][k] < values[j+1][k]) { // 3) values are different, the first one is smaller = already sorted
          j++;                                      // 3.1) check next value
        }
      }
    }
  } 

  for (let i of indices) {                // populate the return variable sortedObjArr
      sortedObjectArray.push(objArr[i]);  // add each of the received object array's items according to 'indices'
  }

  reverse === 'r'.toLowerCase() && sortedObjectArray.reverse(); // use native method to deliver a reversed list
  return sortedObjectArray;
};
