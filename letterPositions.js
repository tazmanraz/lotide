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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0;  i < sentence.length; i++){
    if (sentence[i] !== " "){
    let occurances = []
  
    for(let j = 0; j < sentence.length; ++j){
      if(sentence[j] === sentence[i]){
          occurances.push(j);
        }
    }
    results[sentence[i]] = occurances;
  }}
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions('hello'));

// assertArraysEqual(letterPositions("hello"), 1);
