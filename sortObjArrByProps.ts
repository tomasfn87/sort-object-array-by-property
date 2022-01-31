type value = string | number | any;                                  // * 'value'  : ideally a string or a number through which the list will be sorted, or some kind of data that can be turned into a string
type values = value[] | value[][];                                   // * 'values' : an array of 'value' or an array of arrays of 'value', used to sort a 'indices'
type index = number;                                                 // * 'index'  : a number used to index a position in an array
type indices = index[];                                              // * 'indices': an array of 'index'

export default function sortObjectArrByProps<Type>(                  // 0) Sort Object Array By Properties takes:
  objArr: Type[] | any[],                                            // 0.1) an array of objects or an array of arrays, that will be sorted according to:
  objProps:                                                          // 0.2) 0.2.1) between two and all their properties' values, 0.2.2) a single property's values
    value[]                                                          // 0.2.1.1) an array of strings, 0.2.1.2) an array of numbers
    | value,                                                         // 0.2.2.1) a number, 0.2.2.2) a string
  reverse: 's' | 'S' | 'r' | 'R' = 's'                               // 0.3.1) 's' -> standard, ascending order; 0.3.2) 'r' -> reverse, descending order: will reverse 'sortedObjectArray'
  ):Type[] | any[] {                                                 // 0.4) will return the items of 'objArr' ordered using 'objProps', leaving the original array untouched

  let sortedObjectArray:Type[] = [];                                 // will be used to mount the ordered array after ordering a list of values (2) or a list of lists of values (1)
  let values:values = [];                                            // will store the values according to which the list will be sorted; may sort according to all values if all properties are informed to 'objProps'
  let indices:indices = [];                                          // will store the indices of the objects or arrays to mount 'sortedObjectArray' before the function returns
  
  if (Array.isArray(objProps)) {                                     // 1) Sort by multiple properties
    for (let i=0; i < objArr.length; i++) {                          // 1.1) for each item of argument 'objArr'
      values.push([]);                                               // 1.1.1) add an empty array to 'values'
      indices.push(i);                                               // 1.1.2) and its index to 'indices'
    }
    for (let j=0; j < objArr.length; j++) {                          // 1.2) for each item of argument 'objArr'
      for (let k=0; k < objProps.length; k++) {                      // 1.2.1) for each item of argument 'objProps'
        values[j].push(objArr[j][objProps[k]])                       // 1.2.1.1) add argument 'objArr's object's value for the current item (j) and property (k)
      }
    }
  } else {                                                           // 2) Sort by a single property
    objArr.forEach((obj:Type | any, i:index):void => {               // 2.1) for each item of argument 'objArr'
      typeof objProps === 'string'                                   // 2.1.1) if 'objProps' receives a string
      || typeof objProps === 'number'                                // 2.1.1') or a number
        ? values.push(obj[objProps])                                 // 2.1.1.1) add it to 'values' as it is
        : values.push(obj[objProps].toString());                     // 2.1.1.2) else (try to) turn it into a string and add it to 'values'
      indices.push(i);                                               // 2.1.2) add each item's index to 'indices'
    });
  }

  if (!Array.isArray(objProps)) {                                    // 2.2) Sorting by a single property - swap logic
    for (let i=1; i < values.length; i++) {                          // 2.2.1) sort optimization: at each iteration, the last value will be skipped (i++)
      for (let j=0; j < values.length - i; j++) {                    // 2.2.2) 'values' index
        if (values[j] > values[j+1]) {                               // 2.2.3) Single case: first value is greater than second value
          [values[j], values[j+1]] = [values[j+1], values[j]];       // 2.2.3.1) switch 'values'
          [indices[j], indices[j+1]] = [indices[j+1], indices[j]];   // 2.2.3.2) switch 'indices'
        }
      }
    }
  } else if (!!Array.isArray(objProps)) {                            // 1.3) Sorting by multiple properties - swap logic
    let k = 0;                                                       // 1.3.1) starting 'objProps' index
    for (let i=1; i < values.length; i++) {                          // 1.3.2) sort optimization: at each iteration, the last value will be skipped (i)
      for (let j=0; j < values.length - i;) {                        // 1.3.2.1) 'values' index
        if (values[j][k] === values[j+1][k]) {                       // 1.3.2.1.1) Case one: objects' values are equal
          if (k === objProps.length - 1) {                           // 1.3.2.1.1.1) all properties values are equal, can't sort
            k = 0; j++;                                              // 1.3.2.1.1.1.1) restart properties; check next value
          } else {                                                   // 1.3.2.1.1.2) there are still properties to be checked
            k++;                                                     // 1.3.2.1.1.2.1) check next property
          }
        } else if (values[j][k] > values[j+1][k]) {                  // 1.3.2.1.2) Case two: first object's value > second object's value: swap the two values
          [values[j], values[j+1]] = [values[j+1], values[j]];       // 1.3.2.1.2.1) switch 'values'
          [indices[j], indices[j+1]] = [indices[j+1], indices[j]];   // 1.3.2.1.2.2) switch 'indices'
          k = 0; j++;                                                // 1.3.2.1.2.3) restart properties; check next value
        } else {                                                     // 1.3.2.1.3) Case three: first object's value < second object's value: already sorted, nothing to do
          j++;                                                       // 1.3.2.1.3.1) check next value
        }
      }
    }
  }

  for (let i of indices) {                                           // *.1) populate 'sortedObjArr'
      sortedObjectArray.push(objArr[i]);                             // *.1.1) add each of the received object array's items following 'indices' values
  }

  reverse === 'r'.toLowerCase() && sortedObjectArray.reverse();      // *.2) if 'reverse' receives 'r' or 'R' as argument, 'sortedObjectArray' is reversed
  return sortedObjectArray;                                          // *.2.1) return a copy of 'objArr' sorted by 'objProps'
};
