var through = require('through2')
var trumpet = require('trumpet')
var tr = trumpet()

process.stdin.pipe(tr).pipe(process.stdout)

var transformation = through(function (chunk, _, next){
	this.push(chunk.toString().toUpperCase())
	next()
})

var stream = tr.select('.loud').createStream()
stream.pipe(transformation).pipe(stream)







