type value = string | number | boolean | any                                 // ideally a string or a number through which the list will be sorted, or some kind of data that can be turned into a string
type values = value[] | value[][]                                            // an array of 'value' or an array of arrays of 'value', used to sort a 'indices', using only one or all properties of the objects in 'objArr'
type index = number                                                          // a number used to index a position in an array
type indices = index[]                                                       // an array of 'index'
type prop = string | index                                                   // a string for objects; an 'index' for arrays
type obj = {} | value[]                                                      // an object or an array
type objArr = readonly obj[] | any[]                                         // a read only array of objects or arrays

export function sortObjectArrByProps<Type>(                                  // 0) Sort Object Array By Properties takes:
  objArr: objArr,                                                            // 0.1) an array of objects or an array of arrays, that will be sorted according to:
  objProps:                                                                  // 0.2) 0.2.1) between two and all their properties' values, 0.2.2) a single property's values
    prop[]                                                                   // 0.2.1.1) an array of strings, 0.2.1.2) an array of numbers
    | prop,                                                                  // 0.2.2.1) a number, 0.2.2.2) a string
  reverse: 's' | 'S' | 'r' | 'R' = 's'                                       // 0.3.1) 's' -> standard, ascending order; 0.3.2) 'r' -> reverse, descending order: will reverse 'sortedObjectArray'
  ):Type[] {                                                                 // 0.4) will return the items of 'objArr' ordered using 'objProps', leaving the original array untouched

  let sortedObjectArray:Type[] = [];                                         // will be used to mount the ordered array after ordering a list of values (2) or a list of lists of values (1)
  let values:values = [];                                                    // will store the values according to which the list will be sorted; may be all values if all objects' properties are passed to 'objProps'
  let indices:indices = [];                                                  // will store the indices of the objects or arrays to mount 'sortedObjectArray' before the function returns
  let highestValue:{ value:value, type:string }[] = [];                      // will store the highest values of an object array properties

  const greaterString = (text:string):string => {                            // 'greaterString' receives a string:
    if (text.length === 0) {                                                 // if the string is empty
      return "0"                                                             // return "0"
    } else {                                                                 // otherwise
      const greaterFirstCharCode:number = text.charCodeAt(0) + 1             // read the string's first character's char code and add + 1
      return `${String.fromCharCode(greaterFirstCharCode)}`                  // return a one character one-char-code-higher string
    }
  }

  const increment = (item:value):value => {                                  // 'increment' receives either a string or a number
    if (typeof item === 'number') {
      return item + 1                                                        // Case one: number: adds + 1
    } else if (typeof item === 'string') {
      return greaterString(item);                                            // Case two: string: changes the first character to a one char code higher character
    }
  }

  if (!!Array.isArray(objProps)) {                                           // 1) Sort by two or all properties - obtaining highest values
    for (let i=0; i < objProps.length; i++) {                                // 1.1) for each property in 'objProps'
      highestValue[i] = {                                                    // 1.1.1)
        value: objArr[0][objProps[i]],                                       // 1.1.1.1) set 'highestValue[item].value' to 'objArr' first item's value
        type: typeof objArr[0][objProps[i]]                                  // 1.1.1.2) set 'highestValue[item].type' to 'objArr' first item's value type
      };
      for (let j=1; j < objArr.length; j++) {                                // 1.1.2) for each object in 'objArr'
        if (objArr[j][objProps[i]] !== undefined) {                          // 1.1.2.1) if value is not undefined
          if (highestValue[i].value === undefined                            // 1.1.2.1.1) if 'highestValue[item].value' is undefined
          || objArr[j][objProps[i]] > highestValue[i].value) {               // 1.1.2.1.1') or value is higher than 'highestValue[item].value'
            highestValue[i].value = objArr[j][objProps[i]];                  // 1.1.2.1.1.1) set 'highestValue[item].value' to value
            if (highestValue[i].type === 'undefined') {                      // 1.1.2.1.1.2) if 'highestValue[item].type' is 'undefined'
              highestValue[i].type = typeof objArr[i][objProps[i]];          // 1.1.2.1.1.2.1) set 'highestValue[item].type' to value's type
            }
          }
        }
      }
    }
  } else {                                                                   // 2) Sort by a single property - obtaining highest value
    highestValue[0] = {                                                      // 2.1)
      value: objArr[0][objProps],                                            // 2.1.1) set 'highestValue[0].value' to 'objArr' first item's value
      type: typeof objArr[0][objProps]                                       // 2.1.2) set 'highestValue[0].type' to 'objArr' first item's value's type
    };
    for (let i=1; i < objArr.length; i++) {                                  // 2.2) for each object in 'objArr'
      if (objArr[i][objProps] !== undefined) {                               // 2.2.1) if value is not undefined
        if (highestValue[0].value === undefined                              // 2.2.1.1) if 'highestValue[0].value' is undefined
        || objArr[i][objProps] > highestValue[0].value) {                    // 2.2.1.1') or value is higher than 'highestValue[item].value'
          highestValue[0].value = objArr[i][objProps];                       // 2.2.1.1.1) set 'highestValue[0].value' to value
          if (highestValue[0].type === 'undefined') {                        // 2.2.1.1.2) if 'highestValue[0].type' is 'undefined'
            highestValue[0].type = typeof objArr[i][objProps];               // 2.2.1.1.2.1) set 'highestValue[0].type' to value's type
          }
        }
      }
    }
  }

  if (!!Array.isArray(objProps)) {                                           // 1) Sort by two or all properties - collecting values
    for (let i=0; i < objArr.length; i++) {                                  // 1.2) for each item of argument 'objArr'
      values.push([]);                                                       // 1.2.1) add an empty array to 'values'
      indices.push(i);                                                       // 1.2.2) and its index to 'indices'
    }
    for (let j=0; j < objArr.length; j++) {                                  // 1.3) for each item of argument 'objArr'
      for (let k=0; k < objProps.length; k++) {                              // 1.3.1) for each item of argument 'objProps'
        if (objArr[j].hasOwnProperty(objProps[k])) {                         // 1.3.1.1) if the current item (j) has property (k)
          values[j].push(objArr[j][objProps[k]])                             // 1.3.1.1.1) add the current item (j) and property (k) data to 'values'
        } else {                                                             // 1.3.1.2) else, if the current item (j) doesn't have property (k)
          values[j].push(increment(highestValue[k].value))                   // 1.3.1.2.1.1) add a 'heavier' value to make empty values go down
        }
      }
    }
  } else {                                                                   // 2) Sort by a single property - collecting values
    objArr.forEach((obj:Type | any, i:index):void => {                       // 2.2) for each item of argument 'objArr'
      if (obj.hasOwnProperty(objProps)) {                                    // 2.2.1) if the current item 'obj' has property 'objProps'
        typeof objProps === 'string'                                         // 2.2.1.1) if 'objProps' receives a string
        || typeof objProps === 'number'                                      // 2.2.1.1') or a number
          ? values.push(obj[objProps])                                       // 2.2.1.1.1) add it to 'values'
          : values.push(obj[objProps].toString())                            // 2.2.1.1.2) else (try to) turn it into a string and add it to 'values'
      } else {                                                               // 2.2.2) else, if the current item 'obj' doesn't have property 'objProps'
        values.push(increment(highestValue[0].value))                        // 2.2.2.1) add a 'heavier' value to make empty values go down
      }
      indices.push(i);                                                       // 2.2.3) add each item's index to 'indices'
    });
  }

  if (!!Array.isArray(objProps)) {                                           // 1.4) Sort by two or all properties - swap logic
    let k = 0;                                                               // 1.4.1) starting 'objProps' index
    for (let i=1; i < values.length; i++) {                                  // 1.4.2) sort optimization: at each iteration, the last value will be skipped (i)
      for (let j=0; j < values.length - i;) {                                // 1.4.2.1) 'values' index
        if (values[j][k] === values[j+1][k]) {                               // 1.4.2.1.1) Case one: values are equal
          if (k === objProps.length - 1) {                                   // 1.4.2.1.1.1) all values are equal, can't sort
            k = 0; j++;                                                      // 1.4.2.1.1.1.1) restart properties; check next value
          } else {                                                           // 1.4.2.1.1.2) there are still properties to be checked
            k++;                                                             // 1.4.2.1.1.2.1) check next property
          }
        } else if (values[j][k] > values[j+1][k]) {                          // 1.4.2.1.1) Case two: first value > second value: swap the two values
          [values[j], values[j+1]] = [values[j+1], values[j]];               // 1.4.2.1.2.1) swap 'values'
          [indices[j], indices[j+1]] = [indices[j+1], indices[j]];           // 1.4.2.1.2.2) swap 'indices'
          k = 0; j++;                                                        // 1.4.2.1.2.3) restart properties; check next value
        } else {                                                             // 1.4.2.1.3) Case three: first value < second value: already sorted, nothing to do
          k = 0; j++;                                                        // 1.4.2.1.3.1) restart properties; check next value
        }
      }
    }
  } else {                                                                   // 2.3) Sorting by a single property - swap logic
    for (let i=1; i < values.length; i++) {                                  // 2.3.1) sort optimization: at each iteration, the last value will be skipped (i++): the algorithm pushes the heaviest value to the bottom
      for (let j=0; j < values.length - i; j++) {                            // 2.3.2) 'values' index
        if (values[j] > values[j+1]) {                                       // 2.3.2.1.1) Single case: first value is greater than second value
          [values[j], values[j+1]] = [values[j+1], values[j]];               // 2.3.3.1.1.1) swap 'values'
          [indices[j], indices[j+1]] = [indices[j+1], indices[j]];           // 2.3.3.1.1.2) swap 'indices'
        }
      }
    }
  }

  for (let i of indices) {                                                   // *.1) populate 'sortedObjArr'
    sortedObjectArray.push(objArr[i]);                                       // *.1.1) add each of the received object array's items following 'indices' values
  }

  reverse === 'r'.toLowerCase() && sortedObjectArray.reverse();              // *.2) if 'reverse' receives 'r' or 'R' as argument, 'sortedObjectArray' is reversed
  return sortedObjectArray;                                                  // *.2.1) return a copy of 'objArr' sorted by 'objProps'
}
