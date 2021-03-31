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
  // for (let i = 0; i < input.length; i++){
  //   for (let j = 0; i < takeout.length; j++){

  //   }
  // }
  // for (let i of input){
  //   for (let j of takeout){
  //     if (i !== j){
  //       newArr.push(j);
  //     }
  //   }
  // }
  // return newArr;

  for (let i=0; i < input.length; i++){
    console.log(input.includes(takeout[0]))
    if (!input.includes(takeout[i])){
      newArr.push(i);
    }
  }
}

//assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]) )