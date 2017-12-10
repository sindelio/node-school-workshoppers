var http = require('http')
var through = require('through2')

var transformation_stream = through(function write(chunk, _, next){
	this.push(chunk.toString().toUpperCase())
	//console.log(chunk)
	next()
})

var server_http = http.createServer(function listener(request, response){
	if(request.method !== 'POST'){
		return response.end('Send me a POST\n')
	}
	request.pipe(transformation_stream).pipe(response)
	
}).listen(process.argv[2])