// This returns the all other array elements following the head of the array

const tail = function(arr) {
  let tailArray = [];
  let i = 0;
  for (i = 1; i < arr.length; i++) {
    tailArray.push(arr[i]);
  }
  return tailArray;
};

module.exports = tail;
