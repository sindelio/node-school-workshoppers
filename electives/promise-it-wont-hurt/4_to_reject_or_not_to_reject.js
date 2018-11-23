'use strict';

const promise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

const onRejected = (e) => {
  console.log(e.message);
}

promise.then(console.log, onRejected);