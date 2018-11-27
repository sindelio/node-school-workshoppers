/* 
	To run Bunyan logger:
		node 4_bunyan-runner.js 4_monitor.js | ./node_modules/bunyan/bin/bunyan
*/

module.exports = scenario;

function scenario(log, cb) {
	function start() {
		process.nextTick(thing);
	}

	var value = 97;
	log.info({value : value}, 'scenario');

	function foo() {
		value *= 13;
		log.info({value : value}, 'foo');
		cb(value);
	}

	start();

	function racer() {
		value &= 255;
		log.info({value : value}, 'racer');
		setTimeout(foo, 0);
	}

	log.error('Error: value = 213');
	// value = 213;
	log.info({value : value}, 'scenario');

	function thing() {
		value += 131;
		log.info({value : value}, 'thing');
		process.nextTick(racer);
	}
}
