const attachTitle = (name) => {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);

// .then() always returns a promise, that is, it wraps the returned value in a promise