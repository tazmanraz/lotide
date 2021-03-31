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

const without = function(input, takeout){
  let newArr = [];

  for (let i = 0; i < input.length; i++){
    if (!takeout.includes(input[i])){
      newArr.push(input[i]);
    }
  }
  return newArr

}

// test cases
console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]) )
