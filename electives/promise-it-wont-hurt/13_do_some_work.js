'use strict';
const qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
  .then((id) => {
    return qhttp.read(`http://localhost:7001/${id}`);
  })
  .then((userObject) => {
    console.log( JSON.parse(userObject));
  })
  .catch();

// Conclusion: To keep the chain going it's vital to return the value from a then() method.


