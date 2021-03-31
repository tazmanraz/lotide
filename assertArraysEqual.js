const eqArrays = function(arr1, arr2){
  let flag = true;
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
  return true;
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])