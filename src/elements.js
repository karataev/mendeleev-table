import _ from 'lodash';

import rawData from './data/PeriodicTableJSON';

let data;

export function init() {
  data = rawData.elements;
}

export function findBySymbol(symbol) {
  return _.find(data, {symbol});
}

export function getAll() {
  return data;
}