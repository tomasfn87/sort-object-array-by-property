export const NewLongArray = (arrLen:Number, type:'s'|'n' = 'n'):[] => {
  let longArray:Number[] | String[] | any= [];

  const randNum = (() => (parseInt((Math.random() * 3 * 10e4).toFixed())))

  for (let i=0; i < arrLen; i++) {
    type !== 's' 
      ? longArray.push(randNum())
      : longArray.push(randNum().toString())
  }

  return longArray;
}

export const NewArrOfArrs = (
  arrGeneratorFunc:Function,
  arrArrLength:Number,
  eachArrLength:Number,
  eachArrOptions?:String
):[][] => {
  let arrArr:[][]  = [];

  for (let i=0; i < arrArrLength; i++) {
    !!eachArrOptions 
      ? arrArr.push(arrGeneratorFunc(eachArrLength, eachArrOptions))
      : arrArr.push(arrGeneratorFunc(eachArrLength));
  }

  return arrArr;
}
