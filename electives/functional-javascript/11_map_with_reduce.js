module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(acc, item, index, arr))
    return acc;
  }, []);
}

/* Alternative
module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}
*/
