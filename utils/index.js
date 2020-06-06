
const camelCase = require('lodash/camelCase');

const mapArrToKeys = (keys, row) =>
  keys.reduce((obj, key, index) => ({ ...obj, [key]: row[index] }), {});

const convertArrToObj = (arr) => {
  const values = [...arr];
  let keys = values.splice(0, 1)[0];
  keys = keys.map(camelCase);
  const arrOfObj = values.map((row) => mapArrToKeys(keys, row));
  return arrOfObj;
};


module.exports = {
  mapArrToKeys,
  convertArrToObj
};
