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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  //gets keys as an array
  let obj1 = Object.keys(object1)
  let obj2 = Object.keys(object2)

  // Compares length of objects as arrays
  if (obj1.length !== obj2.length){ return false }

  // cycles through all keys of the object
  for (let key of obj1){
    // checks if the keys are objects. Recursion occurs if object
    if (object1[key] instanceof Object && object2[key] instanceof Object) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
    // checks if the keys are arrays. goes through eqArrays function if it is an array
    else if ((Array.isArray(object1[key]) && Array.isArray(object2[key]) && !eqArrays(object1[key], object2[key]))) {
      return false;
    }

    // last checking for primitives
    else if (object1[key] !== object2[key]){
      return false;
    } else {
      console.log("Something went wrong");
    } 
  }
  return true;

};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(ab, ba);// pass
// assertObjectsEqual(ab, abc);// fail
// assertObjectsEqual(cd, dc);// pass
// assertObjectsEqual(cd, cd2);// fail