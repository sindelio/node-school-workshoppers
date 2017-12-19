var through = require('through2')
var transformation_stream = through(write) // Retorna um stream

function write(chunk, encoding, next){
	this.push(chunk.toString().toUpperCase())
	next()
}

process.stdin.pipe(transformation_stream).pipe(process.stdout)
