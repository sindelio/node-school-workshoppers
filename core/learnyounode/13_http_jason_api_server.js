var http = require('http')
var url = require('url')

var port = process.argv[2]
var parsed
var moment
var hours, minutes, seconds
var array 

var http_server = http.createServer(function (request, response){
	parsed = url.parse(request.url)
	if(parsed.pathname == '/api/parsetime'){
		array = parsed.query.split('=')
		moment = new Date(array[1])
		hours = moment.getHours()
		minutes = moment.getMinutes()
		seconds = moment.getSeconds()

		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.write(JSON.stringify({ hour: hours, minute: minutes, second: seconds }))
		response.end()
	}
	else if(parsed.pathname == '/api/unixtime'){
		array = parsed.query.split('=')
		moment = new Date(array[1]) // Classe Date já tem formato ISO como padrão
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.write(JSON.stringify({ unixtime: moment.getTime() }))
		response.end()
	}
}).listen(port)

// Why can't I put the response.end() method for both if's at the same time?
