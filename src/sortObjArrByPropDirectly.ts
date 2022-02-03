export function sortObjectArrByPropDirectly<Type>(
  objArr: Type[],
  objProp: string | number,
  reverse: 's' | 'S' | 'r' | 'R' = 's'
):Type[] {

  let sortedObjectArray:Type[] = objArr.map(x => x);
  let values:string[] | number[] | any[] = [];

  objArr.forEach((obj:string | number | any):void => {
    typeof obj[objProp] === 'string'
      || typeof obj[objProp] === 'number'
      ? values.push(obj[objProp])
      : values.push(obj[objProp].toString())
  });

  for (let i=1; i < values.length; i++) {
    for (let j=0; j < values.length - i; j++) {
      if (values[j] > values[j+1]) {
        [ values[j], values[j+1] ] = [ values[j+1], values[j] ];
        [ sortedObjectArray[j], sortedObjectArray[j+1] ] = [
          sortedObjectArray[j+1], sortedObjectArray[j]
        ];
      }
    }
  }

  reverse === 'r'.toLowerCase() && sortedObjectArray.reverse();
  return sortedObjectArray;
}
