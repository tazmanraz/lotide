const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  console.log(Object.keys(object1))
  console.log(Object.keys(object2))

  console.log(JSON.stringify(Object.keys(object1).sort()) === JSON.stringify(Object.keys(object2).sort()))
  console.log(JSON.stringify(Object.keys(object2).sort()))
  //console.log(JSON.stringify(object1.sort()) === JSON.stringify(Object.keys(object2).sort()))

  if (assertEqual(Object.keys(object1), Object.keys(object2))){
    console.log('poop')
    return true
  }

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false