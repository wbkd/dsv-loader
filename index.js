/*  dsv-loader: a dsv loader for webpack
    built using dsv by Mike Bostock */

var loaderUtils = require('loader-utils');
var dsv = require('d3-dsv').dsv;

module.exports = function(text) {

  var query = loaderUtils.parseQuery(this.query),
      delimiter = query.delimiter || ',',
      parser = dsv(delimiter),
      res = parser.parse(text);

  return 'module.exports = ' + JSON.stringify(res);
}
