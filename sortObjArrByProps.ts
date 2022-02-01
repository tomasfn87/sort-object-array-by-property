type value = string | number | any;                                            // ideally a string or a number through which the list will be sorted, or some kind of data that can be turned into a string
type values = value[] | value[][];                                             // an array of 'value' or an array of arrays of 'value', used to sort a 'indices'
type index = number;                                                           // a number used to index a position in an array
type indices = index[];                                                        // an array of 'index'
type prop = string | index                                                     // a string for objects; an 'index' for arrays
type obj = {} | value[]                                                        // an object or an array
type objArr = readonly obj[]                                                   // a readonly array of objects or arrays

export default function sortObjectArrByProps<Type>(                            // 0) Sort Object Array By Properties takes:
  objArr: objArr | any[],                                                      // 0.1) an array of objects or an array of arrays, that will be sorted according to:
  objProps:                                                                    // 0.2) 0.2.1) between two and all their properties' values, 0.2.2) a single property's values
    prop[]                                                                     // 0.2.1.1) an array of strings, 0.2.1.2) an array of numbers
    | prop,                                                                    // 0.2.2.1) a number, 0.2.2.2) a string
  reverse: 's' | 'S' | 'r' | 'R' = 's'                                         // 0.3.1) 's' -> standard, ascending order; 0.3.2) 'r' -> reverse, descending order: will reverse 'sortedObjectArray'
  ):Type[] {                                                                   // 0.4) will return the items of 'objArr' ordered using 'objProps', leaving the original array untouched

  let sortedObjectArray:Type[] = [];                                           // will be used to mount the ordered array after ordering a list of values (2) or a list of lists of values (1)
  let values:values | any = [];                                                // will store the values according to which the list will be sorted; may sort according to all values if all properties are informed to 'objProps'
  let indices:indices = [];                                                    // will store the indices of the objects or arrays to mount 'sortedObjectArray' before the function returns
  let missingProps:boolean = false;                                            // will store a boolean that tells if one or more properties are missing from one of the objects or arrays in 'objArr'
  
  if (!!Array.isArray(objProps)) {                                                // 1) Sort by two or all properties
    for (let i=0; i < objArr.length; i++) {                                       // 1.1) for each item of argument 'objArr'
      values.push([]);                                                            // 1.1.1) add an empty array to 'values'
      indices.push(i);                                                            // 1.1.2) and its index to 'indices'
    }
    for (let j=0; j < objArr.length; j++) {                                       // 1.2) for each item of argument 'objArr'
      for (let k=0; k < objProps.length; k++) {                                   // 1.2.1) for each item of argument 'objProps'
        if (objArr[j].hasOwnProperty(objProps[k])) {                              // 1.2.1.1) if the current item (j) has property (k)
          values[j].push(objArr[j][objProps[k]])                                  // 1.2.1.1.1) add the current item (j) and property (k) data to 'values'
        } else {                                                                  // 1.2.1.2) else, if the current item (j) doesn't have property (k)
          values[j].push('⭢')                                                     // 1.2.1.2.1.1) add '⭢' to values
          missingProps = true;                                                    // 1.2.1.2.2) set 'missingProps' to true; string comparison is triggered
        }                      
      }
    }
  } else {                                                                        // 2) Sort by a single property
    objArr.forEach((obj:Type | any, i:index):void => {                            // 2.1) for each item of argument 'objArr'
      if (obj.hasOwnProperty(objProps)) {                                         // 2.1.1) if the current item 'obj' has property 'objProps'
        typeof objProps === 'string'                                              // 2.1.1.1) if 'objProps' receives a string
        || typeof objProps === 'number'                                           // 2.1.1.1') or a number
          ? values.push(obj[objProps])                                            // 2.1.1.1.1) add it to 'values'
          : values.push(obj[objProps].toString())                                 // 2.1.1.1.2) else (try to) turn it into a string and add it to 'values'
      } else {                                                                    // 2.1.2) else, if the current item 'obj' doesn't have property 'objProps'
        values.push('⭢')                                                          // 2.1.2.1) add '⭢' to values
        missingProps = true;                                                      // 2.1.2.2) set 'missingProps' to true; string comparison is triggered
      }
      indices.push(i);                                                         // 2.1.3) add each item's index to 'indices'
    });
  }

  if (!!Array.isArray(objProps)) {                                                // 1.3) Sorting by multiple properties - swap logic
    let k = 0;                                                                    // 1.3.1) starting 'objProps' index
    for (let i=1; i < values.length; i++) {                                       // 1.3.2) sort optimization: at each iteration, the last value will be skipped (i)
      for (let j=0; j < values.length - i;) {                                     // 1.3.2.1) 'values' index
        if (!missingProps) {                                                      // 1.2.2.1.1) every object in 'objArr' have all properties in 'objProps'
          if (values[j][k] === values[j+1][k]) {                                  // 1.3.2.1.1.1) Case one: values are equal
            if (k === objProps.length - 1) {                                      // 1.3.2.1.1.1.1) all values are equal, can't sort
              k = 0; j++;                                                         // 1.3.2.1.1.1.1.1) restart properties; check next value
            } else {                                                              // 1.3.2.1.1.1.2) there are still properties to be checked
              k++;                                                                // 1.3.2.1.1.1.2.1) check next property
            }
          } else if (values[j][k] > values[j+1][k]) {                          // 1.3.2.1.2) Case two: first object's value > second object's value: swap the two values
            [values[j], values[j+1]] = [values[j+1], values[j]];               // 1.3.2.1.2.1) switch 'values'
            [indices[j], indices[j+1]] = [indices[j+1], indices[j]];           // 1.3.2.1.2.2) switch 'indices'
            k = 0; j++;                                                        // 1.3.2.1.2.3) restart properties; check next value
          } else {                                                             // 1.3.2.1.3) Case three: first object's value < second object's value: already sorted, nothing to do
            k = 0; j++;                                                        // 1.3.2.1.3.1) restart properties; check next value
          }
        }
        else {                                                                 // 1.2.2.1.2) if there are missing values, string checking:
          if (values[j][k].toString() === values[j+1][k].toString()) {         // 1.3.2.1.2.1) Case one: objects' values are equal
            if (k === objProps.length - 1) {                                   // 1.3.2.1.2.1.1) all properties values are equal, can't sort
              k = 0; j++;                                                      // 1.3.2.1.2.1.1.1) restart properties; check next value
            } else {                                                           // 1.3.2.1.2.1.2) there are still properties to be checked
              k++;                                                             // 1.3.2.1.2.1.2.1) check next property
            }
          } else if (values[j][k].toString() > values[j+1][k].toString()) {    // 1.3.2.1.2) Case two: first object's value > second object's value: swap the two values
            [values[j], values[j+1]] = [values[j+1], values[j]];               // 1.3.2.1.2.1) switch 'values'
            [indices[j], indices[j+1]] = [indices[j+1], indices[j]];           // 1.3.2.1.2.2) switch 'indices'
            k = 0; j++;                                                        // 1.3.2.1.2.3) restart properties; check next value
          } else {                                                             // 1.3.2.1.3) Case three: first object's value < second object's value: already sorted, nothing to do
            k = 0; j++;                                                        // 1.3.2.1.3.1) restart properties; check next value
          }
        }
      }
    }
  } else {                                                                        // 2.2) Sorting by a single property - swap logic
    for (let i=1; i < values.length; i++) {                                       // 2.2.1) sort optimization: at each iteration, the last value will be skipped (i++): the algorithm pushes the heaviest value to the bottom
      for (let j=0; j < values.length - i; j++) {                                 // 2.2.2) 'values' index
        if (!missingProps) {                                                      // 2.2.2.1) every object in 'objArr' have all properties in 'objProps'
          if (values[j] > values[j+1]) {                                          // 2.2.2.1.1) Single case: first value is greater than second value
            [values[j], values[j+1]] = [values[j+1], values[j]];                  // 2.2.3.1.1.1) swap 'values'
            [indices[j], indices[j+1]] = [indices[j+1], indices[j]];              // 2.2.3.1.1.2) swap 'indices'
          }
        } else {                                                                  // 2.2.2.2) if there are missing values, string checking:
          if (values[j].toString() > values[j+1].toString()) {                    // 2.2.3) Single case: first value is greater than second value; using string comparison to test numbers or strings against ''
            [values[j], values[j+1]] = [values[j+1], values[j]];                  // 2.2.3.1) swap 'values'
            [indices[j], indices[j+1]] = [indices[j+1], indices[j]];              // 2.2.3.2) swap 'indices'
          }
        }
      }
    }
  }

  for (let i of indices) {                                                     // *.1) populate 'sortedObjArr'
      sortedObjectArray.push(objArr[i]);                                       // *.1.1) add each of the received object array's items following 'indices' values
  }

  reverse === 'r'.toLowerCase() && sortedObjectArray.reverse();                // *.2) if 'reverse' receives 'r' or 'R' as argument, 'sortedObjectArray' is reversed
  return sortedObjectArray;                                                    // *.2.1) return a copy of 'objArr' sorted by 'objProps'
};
