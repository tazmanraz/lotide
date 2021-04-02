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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  let obj1 = Object.keys(object1)
  let obj2 = Object.keys(object2)

  console.log(JSON.stringify(Object.keys(object1).sort()) === JSON.stringify(Object.keys(object2).sort()))

  //console.log(JSON.stringify(object1.sort()) === JSON.stringify(Object.keys(object2).sort()))

  // if (assertEqual(Object.keys(object1), Object.keys(object2))){
  //   console.log('poop')
  //   return true
  // }

  if (obj1.length === obj2.length){
    if(eqArrays(obj1.sort(), obj2.sort())){
      for (let i = 0; i < obj1.length; i++){
        if (!object1[obj1[i]] === object2[obj2[i]]){
          return false
        }
      }
    }
  }
  return true

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false