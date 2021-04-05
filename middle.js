const eqArrays = function(arr1, arr2){
  let flag = true;

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      flag = false;
    }
  }
  return flag;
}

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let newArr=[]
  if (array.length === 1 || array.length === 2){
    return newArr;
  }
  else if (array.length % 2 === 1){
    newArr.push(array[Math.floor(array.length/2)])
  }
  else if (array.length % 2 === 0){
    newArr.push(array[array.length/2 - 1])
    newArr.push(array[array.length/2])
  }
  else {
    return false;
  }

  return newArr
}

assertArraysEqual(
  middle([1, 2, 3, 4, 5]),
  [3]
  );

assertArraysEqual(
  middle([1, 2, 3, 4, 5, 6]),
  [3, 4]
  );