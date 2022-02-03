export function sortObjectArrByPropIndexing<Type>(
  objArr: Type[],
  objProp: string | number,
  reverse: 's' | 'S' | 'r' | 'R' = 's'
):Type[] {

  let sortedObjectArray:Type[] = [];
  let values:string[] | number[] | any[] = [];
  let indices:number[] = [];

  objArr.forEach((obj:string | number | any, index:number):void => {
    typeof obj[objProp] === 'string'
      || typeof obj[objProp] === 'number'
      ? values.push(obj[objProp])
      : values.push(obj[objProp].toString())
    indices.push(index);
  });

  for (let i=1; i < values.length; i++) {
    for (let j=0; j < values.length - i; j++) {
      if (values[j] > values[j+1]) {
        [values[j], values[j+1]] = [values[j+1], values[j]];
        [indices[j], indices[j+1]] = [indices[j+1], indices[j]];
      }
    }
  }

  for (let k of indices) {
    sortedObjectArray.push(objArr[k]);
  }

  reverse === 'r'.toLowerCase() && sortedObjectArray.reverse();
  return sortedObjectArray;
}
