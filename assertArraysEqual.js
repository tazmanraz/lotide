const assertArraysEqual = function(actual, expected) {
  let flag = true;
  for (let i = 0; i < actual.length; i++){
    if (actual[i] !== expected[i]){
      flag = false;
    }
  }

  if (flag === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return true;
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])