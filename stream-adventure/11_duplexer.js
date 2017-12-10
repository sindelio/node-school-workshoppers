var spawn = require('child_process').spawn
var duplexer = require('duplexer2')

module.exports = function(cmd, args){
	var kid_process = spawn(cmd, args)
	return duplexer(kid_process.stdin, kid_process.stdout)
}
