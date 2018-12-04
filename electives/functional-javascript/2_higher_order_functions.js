function repeat(operation, num) {
	if(num <= 0)	return;
	repeat(operation, num - 1);
	return operation();
}

/* Alternative 1
function repeat(operation, num) {
	if(num <= 0)	return;
	operation();
	return repeat(operation, num - 1);
}
*/

/* Alternative 2
function repeat(operation, num) {
	while(num > 0){
		operation();
		num--;
	}
}
*/

module.exports = repeat