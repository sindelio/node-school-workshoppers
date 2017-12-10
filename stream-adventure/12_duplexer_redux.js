var duplexer = require('duplexer2')
var through = require('through2').obj // Lidando com streams não binárias, ou seja, objetos

module.exports = function (counter) {
  var counts = {}
  var input = through(write, end)
  return duplexer({objectMode: true}, input, counter) // Çidando com streams não binárias, ou seja, objetos

  function write (row, _enconding, next) {
    counts[row.country] = (counts[row.country] || 0) + 1 // truque bacana
    next()
  }
  function end (done) {
    counter.setCounts(counts)
    done()
  }
} 