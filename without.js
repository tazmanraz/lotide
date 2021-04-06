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

const without = function(input, takeout){
  let newArr = [];

  for (let i = 0; i < input.length; i++){
    if (!takeout.includes(input[i])){
      newArr.push(input[i]);
    }
  }
  return newArr
}

module.exports = without;

// test cases
// console.log(without([1, 2, 3], [1]))
// console.log(without(["1", "2", "3"], [1, 2, "3"]) )
