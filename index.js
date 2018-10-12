/*  dsv-loader: a dsv loader for webpack
    built using dsv by Mike Bostock */

var loaderUtils = require('loader-utils');
var dsvFormat = require('d3-dsv').dsvFormat;

module.exports = function(text) {
  this.cacheable();

  var options = loaderUtils.getOptions(this) || {},
      delimiter = options.delimiter || ',',
      dsv = dsvFormat(delimiter),
      rows = options.rows,
      res = rows ? dsv.parseRows(text) : dsv.parse(text);

  return 'var res = ' + JSON.stringify(res) + ';' +
    'res.columns = ' + JSON.stringify(res.columns) + ';' +
    'module.exports = res;';
}
