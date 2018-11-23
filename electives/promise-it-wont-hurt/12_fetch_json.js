'use strict';
const http = require('q-io/http');

http.read('http://localhost:1337')
  .then(function (content) {
    return JSON.parse(content);
  })
  .then(console.log);
