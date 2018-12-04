function reduce(arr, reducer, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value; // end condition
    return reduceOne(index + 1, reducer(value, arr[index], index, arr)); // calculate & pass values to next step
  })(0, initial); // IIFE. kick off recursion with initial values
}

module.exports = reduce;