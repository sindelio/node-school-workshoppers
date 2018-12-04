function logger(namespace) {
	return function(){
		console.log.apply(
			null,
			[namespace].concat(Array.prototype.slice.call(arguments))
		);
	};
}

module.exports = logger;

/* Alternative
function logger(namespace) {
	return function(){
		console.log(
			[namespace]
			.concat(Array.prototype.slice.call(arguments))
			.join(' '));
	};
}
*/

