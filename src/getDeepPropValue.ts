import { prop, value, obj } from "./sortObjArrByProps";

export const getDeepProp = (
  prop:prop
):prop | prop[] => {
  let deep = false;
  if (typeof prop === 'number') return Math.floor(prop);
  else for (let c of prop) {
    if (c === '.') {
    deep = true; break;
    }
  };
  if (!!deep) return prop.split('.');
  return prop;
};

export const getDeepPropValue = (
  obj:obj | any,
  propStr:prop
):value => {
  let prop = getDeepProp(propStr);

  if (!hasOwnDeepProperty(obj, propStr)) {
    return undefined
  }

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

export const hasOwnDeepProperty = (
  obj:obj | any,
  propStr:prop
):boolean => {
  let prop = getDeepProp(propStr);
  if (!!Array.isArray(prop)) {
    for (let i=0; i < prop.length; i++) {
      if (obj.hasOwnProperty(prop[i])) {
        obj = obj[prop[i]];
      } else return false;
    }
    return true;
  }
  else {
    if (obj.hasOwnProperty(prop)) return true;
  return false;
  }
}
