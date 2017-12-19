fs = require('fs')
http = require('http')

port = process.argv[2]
url = process.argv[3]
//console.log(url)
//console.log(port)

var server = http.createServer(function listener(request, response){
	fs.createReadStream(url).pipe(response)
}).listen(port)
