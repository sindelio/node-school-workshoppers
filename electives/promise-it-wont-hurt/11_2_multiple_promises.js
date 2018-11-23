'use strict';

const all = (promiseArray) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    let size = promiseArray.length;
    let values = [];
    for(let i = 0; i < size; i++){
      promiseArray[i].then((value) => {
        values[i] = value;
        counter++;
        if(counter === 2) resolve(values);
      });
    }
  });
}

all([getPromise1(), getPromise2()]).then(console.log);