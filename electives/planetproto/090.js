// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.

class Robot{
	constructor(){
		return this;
	}
}

class Vehicle{
	constructor(){
		return {};
	}
}

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot,
	Vehicle
}
