var replify = require('replify');

function scenario(callback) {
	var server = require('http').createServer();
	server.__message = 'REPLs are neat';
	var repl = replify({name : 'bug-clinic'}, server);
	server.listen(8080, function () { callback(server, repl); });
}

module.exports = scenario;