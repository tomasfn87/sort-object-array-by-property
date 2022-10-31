import { getDeepPropValue, hasOwnDeepProperty } from "./getDeepPropValue";

export type value = string | number | boolean | any
export type values = value[] | value[][]
export type index = number
export type indices = index[]
export type prop = string | index
export type obj = {} | value[]
export type objArr = readonly obj[] | any[]
export type highestValue = { value: value, type: string }[]

export const sortObjectArrByProps = <Type>(objArr: objArr, objProps: prop[] | prop, reverse: string = 's'): Type[] => {
  let sortedObjectArray: Type[] = [];

  for (let i of sortIndices(objArr, objProps, reverse)) {
    sortedObjectArray.push(objArr[i]);
  }

  return sortedObjectArray;
}

const sortIndices = <Type>(objArr: objArr, objProps: prop | prop[], reverse: string = 's') => {
  let valuesAndIndices = getValuesAndIndices(objArr, objProps)
  let order = getOrder(objProps, reverse)
  let values = valuesAndIndices[0]
  let indices = valuesAndIndices[1]

    if (!!Array.isArray(objProps)) {
        let k = 0;
        for (let i = 1; i < values.length; i++) {
            for (let j = 0; j < values.length - i;) {
                // STRING:
                if (typeof values[j][k] === 'string') {
                    if (values[j][k] === values[j + 1][k]) {
                        if (k === objProps.length - 1) {
                            k = 0; j++;
                        } else {
                            k++;
                        }
                    } else if (removeAccents(values[j][k]) === removeAccents(values[j + 1][k])
                        && (values[j][k] > values[j + 1][k] && order[k] === 's'
                            || values[j][k] < values[j + 1][k] && order[k] === 'r')
                        || (removeAccents(values[j][k]) > removeAccents(values[j + 1][k]) && order[k] === 's'
                            || removeAccents(values[j][k]) < removeAccents(values[j + 1][k]) && order[k] === 'r')) {
                        [values[j], values[j + 1]] = [values[j + 1], values[j]];
                        [indices[j], indices[j + 1]] = [indices[j + 1], indices[j]];
                    } else {
                        k = 0; j++;
                    }
                // NOT STRING:
                } else {
                    if (values[j][k] === values[j + 1][k]) {
                        if (k === objProps.length - 1) {
                            k = 0; j++;
                        } else {
                            k++;
                        }
                    } else {
                        if (values[j][k] > values[j + 1][k] && order[k] === 's'
                            || values[j][k] < values[j + 1][k] && order[k] === 'r') {
                            [values[j], values[j + 1]] = [values[j + 1], values[j]];
                            [indices[j], indices[j + 1]] = [indices[j + 1], indices[j]];
                        }
                        k = 0; j++;
                    }
                }
            }
        }
    } else {
        for (let i = 1; i < values.length; i++) {
            for (let j = 0; j < values.length - i; j++) {
                if (typeof values[j] === 'string') {
                    if (removeAccents(values[j]) === removeAccents(values[j + 1])
                        && values[j] > values[j + 1]
                        || removeAccents(values[j]) > removeAccents(values[j + 1])) {
                        [values[j], values[j + 1]] = [values[j + 1], values[j]];
                        [indices[j], indices[j + 1]] = [indices[j + 1], indices[j]];
                    }
                } else {
                    if (values[j] > values[j + 1]) {
                        [values[j], values[j + 1]] = [values[j + 1], values[j]];
                        [indices[j], indices[j + 1]] = [indices[j + 1], indices[j]];
                    }
                }
            }
        }
        order[0] === 'r' && indices.reverse()
    }
    return indices;
}

const getValuesAndIndices: Function = <Type>(objArr: objArr, objProps: prop | prop[]) => {
    let highestValue: highestValue = getHighestValue(objArr, objProps);
    let values: values = [];
    let indices: indices = [];
    if (!!Array.isArray(objProps)) {
        for (let i = 0; i < objArr.length; i++) {
            values.push([]);
            indices.push(i);
        }
        for (let j = 0; j < objArr.length; j++) {
            for (let k = 0; k < objProps.length; k++) {
                if (hasOwnDeepProperty(objArr[j], objProps[k])) {
                    typeof getDeepPropValue(objArr[j], objProps[k]) === 'string'
                        || typeof getDeepPropValue(objArr[j], objProps[k]) === 'number'
                        ? values[j].push(getDeepPropValue(objArr[j], objProps[k]))
                        : values[j].push(getDeepPropValue(objArr[j], objProps[k]).toString())
                } else values[j].push(increment(highestValue[k].value))
            }
        }
    } else {
        objArr.forEach((obj: Type | any, i: index): void => {
            indices.push(i);
            if (hasOwnDeepProperty(obj, objProps)) {
                typeof getDeepPropValue(obj, objProps) === 'string'
                    || typeof getDeepPropValue(obj, objProps) === 'number'
                    ? values.push(getDeepPropValue(obj, objProps))
                    : values.push(getDeepPropValue(obj, objProps).toString())
            } else values.push(increment(highestValue[0].value))
        });
    }
    return [values, indices]
}

const getOrder: Function = (objProps: prop | prop[], reverse: string): string[] => {
    reverse = reverse.toLowerCase()
    let order: string[] = []
    if (Array.isArray(objProps)) {
        for (let i of objProps) {
            order.push('s')
        }
        if (reverse.length > 1) {
            for (let c = 0; c < reverse.length; c++) {
                if (reverse[c] === 'r' && order.hasOwnProperty(c)) {
                    order[c] = 'r'
                }
            }
        } else {
          if (values[j][k] > values[j + 1][k] && order[k] === 's'
            || values[j][k] < values[j + 1][k] && order[k] === 'r') {
            [values[j], values[j + 1]] = [values[j + 1], values[j]];
            [indices[j], indices[j + 1]] = [indices[j + 1], indices[j]];
          }
          k = 0; j++;
        }
      }
    }
  } else {
    for (let i = 1; i < values.length; i++) {
      for (let j = 0; j < values.length - i; j++) {
        if (values[j] > values[j + 1]) {
          [values[j], values[j + 1]] = [values[j + 1], values[j]];
          [indices[j], indices[j + 1]] = [indices[j + 1], indices[j]];
        }
      }
    }
    order[0] === 'r' && indices.reverse()
  }
  return indices;
}

const getValuesAndIndices = <Type>(objArr: objArr, objProps: prop | prop[]) => {
  let highestValue: highestValue = getHighestValue(objArr, objProps);
  let values: values = [];
  let indices: indices = [];
  if (!!Array.isArray(objProps)) {
    for (let i = 0; i < objArr.length; i++) {
      values.push([]);
      indices.push(i);
    }
    for (let j = 0; j < objArr.length; j++) {
      for (let k = 0; k < objProps.length; k++) {
        if (hasOwnDeepProperty(objArr[j], objProps[k])) {
          typeof getDeepPropValue(objArr[j], objProps[k]) === 'string'
            || typeof getDeepPropValue(objArr[j], objProps[k]) === 'number'
            ? values[j].push(getDeepPropValue(objArr[j], objProps[k]))
            : values[j].push(getDeepPropValue(objArr[j], objProps[k]).toString())
        } else values[j].push(increment(highestValue[k].value))
      }
    }
  } else {
    objArr.forEach((obj: Type | any, i: index): void => {
      indices.push(i);
      if (hasOwnDeepProperty(obj, objProps)) {
        typeof getDeepPropValue(obj, objProps) === 'string'
          || typeof getDeepPropValue(obj, objProps) === 'number'
          ? values.push(getDeepPropValue(obj, objProps))
          : values.push(getDeepPropValue(obj, objProps).toString())
      } else values.push(increment(highestValue[0].value))
    });
  }
  return [values, indices]
}

const getOrder = (objProps: prop | prop[], reverse: string): string[] => {
  reverse = reverse.toLowerCase()
  let order: string[] = []
  if (Array.isArray(objProps)) {
    for (let i of objProps) {
      order.push('s')
    }
    if (reverse.length > 1) {
      for (let c = 0; c < reverse.length; c++) {
        if (reverse[c] === 'r' && order.hasOwnProperty(c)) {
          order[c] = 'r'
        }
      }
    } else {
      if (reverse === 'r') {
        for (let i in order) {
          order[i] = 'r'
        }
      }
    }
  } else {
    if (reverse[0] === 'r') {
      order.push('r')
    } else {
      order.push('s')
    }
  }
  return order
}

const getHighestValue = (objArr: objArr, objProps: prop | prop[]): highestValue => {
  let highestValue: highestValue = [];
  if (!!Array.isArray(objProps)) {
    for (let i = 0; i < objProps.length; i++) {
      highestValue[i] = {
        value: getDeepPropValue(objArr[0], objProps[i]),
        type: typeof getDeepPropValue(objArr[0], objProps[i])
      };
      for (let j = 1; j < objArr.length; j++) {
        if (!!getDeepPropValue(objArr[j], objProps[i]) && !highestValue[i].value
          || getDeepPropValue(objArr[j], objProps[i]) > highestValue[i].value) {
          highestValue[i].value = getDeepPropValue(objArr[j], objProps[i]);
          highestValue[i].type = typeof getDeepPropValue(objArr[i], objProps[i]);
        }
      }
    }
  } else {
    highestValue[0] = {
      value: getDeepPropValue(objArr[0], objProps),
      type: typeof getDeepPropValue(objArr[0], objProps)
    };
    for (let i = 1; i < objArr.length; i++) {
      if (!!getDeepPropValue(objArr[i], objProps) && !highestValue[0].value
        || getDeepPropValue(objArr[i], objProps) > highestValue[0].value) {
        highestValue[0].value = getDeepPropValue(objArr[i], objProps);
        highestValue[0].type = typeof getDeepPropValue(objArr[i], objProps);
      }
    }
  }
  return highestValue;
}

const increment = (item: value): value => {
  if (typeof item === 'boolean') item = item.toString();
  if (typeof item === 'number') return item + 1;
  else if (typeof item === 'string') return greaterString(item);
}

const greaterString = (text: string): string => {
  if (text.length === 0) return "0"
  else {
    const greaterFirstCharCode: number = text.charCodeAt(0) + 1
    return String.fromCharCode(greaterFirstCharCode)
  }
}
