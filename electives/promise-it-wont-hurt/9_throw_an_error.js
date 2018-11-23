'use strict';

const invalidJson = process.argv[2];

const parsePromised = (data) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(data));
    } catch (e) {
      reject(e);
    }
  });
}

const onReject = (e) => {
  console.log(e.message);
}

parsePromised(invalidJson)
  .then(null, onReject);

