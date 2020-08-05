import camelCase from 'lodash/camelCase';

export const mapArrToKeys = <T>(keys: string[], row: T[]): Record<string, T> =>
  keys.reduce((obj, key, index) => ({ ...obj, [key]: row[index] || '' }), {});

export const convertArrToObj = (arr: Array<(string | Record<string, any>)[]>): Record<string, string | Record<string, any>>[] => {
  const values = [...arr];
  let keys: string[] = values.splice(0, 1)[0] as string[];
  keys = keys.map(camelCase);
  const arrOfObj = values.map((row) => mapArrToKeys(keys, row));
  return arrOfObj;
};
