'use strict';

const p1 = new Promise((resolve, reject) => {
  reject(new Error('SECRET ERROR'));
}).catch(console.error);

const p2 = Promise.resolve('SUCCESS');
p2.then(console.log);

const p3 = Promise.reject('FAILURE');
p3.then(console.log);