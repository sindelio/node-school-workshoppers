'use strict';

const all = (p1, p2) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    let values = [];
    p1.then(function(value){
      counter++;
      values.push(value);
      // console.log(counter);     
      if(counter === 2) resolve(values);
    });
    p2.then(function(value){
      counter++;
      values.push(value);
      // console.log(counter);
      if(counter === 2) resolve(values);
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);