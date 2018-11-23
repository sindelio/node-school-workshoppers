'use strict';

const promiseChain = first().then(second).then(console.log);

/*  OR

var firstPromise = first();
    
var secondPromise = firstPromise.then(function (val) {
  return second(val);
});
    
secondPromise.then(console.log); */