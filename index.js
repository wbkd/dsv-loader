/*  dsv-loader: a dsv loader for webpack
    built using dsv by Mike Bostock */

var loaderUtils = require('loader-utils');
var dsvFormat = require('d3-dsv').dsvFormat;

module.exports = function(text) {
  this.cacheable();
  
  var query = loaderUtils.parseQuery(this.query),
      delimiter = query.delimiter || ',',
      dsv = dsvFormat(delimiter),
      rows = query.rows,
      res = rows ? dsv.parseRows(text) : dsv.parse(text);

  return 'var res = ' + JSON.stringify(res) + ';' +
    'res.columns = ' + JSON.stringify(res.columns) + ';' +
    'module.exports = res;';
}
