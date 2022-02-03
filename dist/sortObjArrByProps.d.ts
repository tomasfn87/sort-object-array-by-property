declare type value = string | number | boolean | any;
declare type index = number;
declare type prop = string | index;
declare type obj = {} | value[];
declare type objArr = readonly obj[] | any[];
export declare function sortObjectArrByProps<Type>(objArr: objArr, objProps: prop[] | prop, reverse?: 's' | 'S' | 'r' | 'R'): Type[];
export {};
