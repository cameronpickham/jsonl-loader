module.exports = function(source) {
  this.cacheable();

  var value = JSON.stringify(source.split('\n').map(JSON.parse));
  return "module.exports = " + value + ";";
}
