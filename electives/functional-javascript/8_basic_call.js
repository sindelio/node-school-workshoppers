function duckCount() {
	let counter = 0;
	return Array.prototype.filter.call(arguments, (item) => {
		if(Object.prototype.hasOwnProperty.call(item, 'quack')) return true;
		return false;
	}).length; 
}

module.exports = duckCount;

/* Alternative
function duckCount() {
	let counter = 0;
	for(item of arguments){
		if(Object.hasOwnProperty.call(item, 'quack')) counter++;
	}
	return counter; 
}
*/