/*
  dsv-loader: a dsv loader for webpack
  built using dsv by Mike Bostock
*/

const { getOptions } = require('loader-utils');
const { dsvFormat } = require('d3-dsv');

module.exports = function(text) {
  this.cacheable();

  const options = getOptions(this) || {},
    delimiter = options.delimiter || ',',
    dsv = dsvFormat(delimiter),
    rows = options.rows,
    res = rows ? dsv.parseRows(text) : dsv.parse(text);

  return `const res = ${JSON.stringify(res)};
    res.columns = ${JSON.stringify(res.columns)};
    module.exports = res;`;
}
