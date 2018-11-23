'use strict';

const alwaysThrows = () => {
  throw new Error('OH NOES');
}

const iterate = (integer) => {
  console.log(integer);
  return 1 + integer;
}

const onRejected = (e) => {
  console.log(e.message)
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, onRejected);
  //.catch(onRejected);

  // Conclusion: .then() wraps returned values as resolved promises and thrown errors as rejected promises!