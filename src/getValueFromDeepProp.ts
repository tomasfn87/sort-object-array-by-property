import { value, obj } from "./sortObjArrByProps";

const getDeepProp = (prop:string):string | string[] => {
  let deep = false;
    for (let c of prop) {
      if (c === '.') {
        deep = true; break;
      }
    };
  if (!!deep) {
    return prop.split('.');
  } 
  return prop;
};

export function getValueFromDeepProp(obj:obj | any, propStr:string):value {
  let prop = getDeepProp(propStr);
  if (!!Array.isArray(prop)) {
    let value:value;
    for (let i=0; i < prop.length; i++) {
      if (i === 0) value = obj[prop[i]]
      else value = value[prop[i]];
    }
    return value;
  }
  return obj[prop];
};
