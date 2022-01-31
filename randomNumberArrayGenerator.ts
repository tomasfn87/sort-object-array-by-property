export const NewLongArray = (arrLen:number, type:'s'|'n' = 'n'):[] => {
  let longArray:number[] | string[] | any= [];

  const randNum = (() => (parseInt((Math.random() * 3 * 10e4).toFixed())))

  for (let i=0; i < arrLen; i++) {
    type !== 's' 
      ? longArray.push(randNum())
      : longArray.push(randNum().toString())
  }

  return longArray;
}

export const NewArrOfArrs = (
  arrArrLength:number,
  arrGeneratorFunc:Function,
  eachArrLength:number,
  eachArrOptions?:string
):[][] => {
  let arrArr:[][]  = [];

  for (let i=0; i < arrArrLength; i++) {
    !!eachArrOptions 
      ? arrArr.push(arrGeneratorFunc(eachArrLength, eachArrOptions))
      : arrArr.push(arrGeneratorFunc(eachArrLength));
  }

  return arrArr;
}
