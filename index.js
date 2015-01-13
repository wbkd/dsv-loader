/*  dsv-loader: a dsv loader for webpack
    built using dsv by Mike Bostock */

var loaderUtils = require("loader-utils");
var dsv = require('dsv');

module.exports = function(text) {

  var query = loaderUtils.parseQuery(this.query),
      delimiter = query.delimiter || ',';
  
  var parser = dsv(delimiter);

  var res = parser.parse(text);

  return "module.exports = " + JSON.stringify(res, undefined, "\t");
}
