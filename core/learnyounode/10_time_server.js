var net = require('net')
var d = new Date() 
function zeroFill(i) { // i is hours or minutes etc
  return (i < 10 ? '0' : '') + i
}
 
function now () {
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}
 
var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})
 
server.listen(process.argv[2])