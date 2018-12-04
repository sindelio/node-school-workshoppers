module.exports = function(namespace) {
	return console.log.bind(null, namespace);
}

/* Alternative
module.exports = function(namespace) {
	return console.log.bind(console, namespace);
}
*/