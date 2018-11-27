require('stackup');

var readFile = require('fs').readFile;
var domain = require('domain');

function scenario(jsonPath, cb) {
	var domainItem = domain.create();
	domainItem.on('error', cb);
	domainItem.run(function() {
		readFile(jsonPath, {encoding : 'utf8'}, function (error, contents) {
			cb(error, JSON.parse(contents));
		});
	});
}

module.exports = scenario;