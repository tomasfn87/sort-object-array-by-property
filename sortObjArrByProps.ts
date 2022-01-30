export default function sortObjectArrByProps<Type>(
  objArr: Type[] | any,
  objProps: string | number | string[] | number[],
  reverse: 's' | 'S' | 'r' | 'R' = 's'
  ):Type[] | any {
  
  let sortedObjectArray:Type[] = [];
  let values:string[] | number[] | string[][] | number[][] | any[] = [];
  let indices:number[] = [];
  
  if (Array.isArray(objProps)) { // an array of props as sorting parameters
    // 1) create empty array and indices
    for (let i=0; i < objArr.length; i++) {
      values.push([]);
      indices.push(i);
    }

    for (let j=0; j < objArr.length; j++) {
      for (let k=0; k < objProps.length; k++) {
        values[j].push(objArr[j][objProps[k]])
      }
    }
  } else { // a single number or strings as sorting parameter
    objArr.forEach((obj:Type | any, index:number):void => {
      typeof objProps === 'string'
      || typeof objProps === 'number'
        ? values.push(obj[objProps])
        : values.push(obj[objProps].toString());
      indices.push(index);
    });
  }

  if (!Array.isArray(objProps)) {
    for (let i=1; i < values.length; i++) {
      for (let j=0; j < values.length - i; j++) {
        if (values[j] > values[j+1]) {
          [values[j], values[j+1]] = [values[j+1], values[j]];
          [indices[j], indices[j+1]] = [indices[j+1], indices[j]];
        }
      }
    }
  } else if (!!Array.isArray(objProps)) {
    let k = 0;
    for (let i=1; i < objArr.length; i++) {
      for (let j=0; j < objArr.length - i;) {
        if (values[j][k] === values[j+1][k]) {
          if (k === objProps.length - 1) {
            k = 0; j++;
          } else {
            k++;
          }
        } else if (values[j][k] > values[j+1][k]) {
          [values[j], values[j+1]] = [values[j+1], values[j]];
          [indices[j], indices[j+1]] = [indices[j+1], indices[j]];
          k = 0; j++;
        } else if (values[j][k] < values[j+1][k]) {
          j++;
        }
      }
    }
  } 

  for (let i of indices) {
      sortedObjectArray.push(objArr[i]);
  }

  reverse === 'r'.toLowerCase() && sortedObjectArray.reverse();
  return sortedObjectArray;
};
