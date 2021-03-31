const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const result = {}
  
  for (let i = 0;  i < allItems.length; i++){
    let occurances = 0;
    //Checks the conditions to pass through
    if ((Object.keys(itemsToCount).includes(allItems[i])) && (itemsToCount[allItems[i]])){
    	
      // checks for repeats
      for(let j = 0; j < allItems.length; ++j){
        if(allItems[j] === allItems[i]){
            occurances++;
          }
    }
      // Storing the passed items
      result[allItems[i]] = occurances
    }
  }
  return result;
 } 


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);