var through = require('through2')
var split = require('split')

var i = 0;

process.stdin.pipe(split('\n')).pipe(through(function (line, _, next){
	this.push(i % 2 == 0 ? line.toString().toLowerCase() + '\n' : line.toString().toUpperCase() + '\n')
	i++
	next()
})).pipe(process.stdout)

