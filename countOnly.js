const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {}
  
  //This is the old way I did it which is more complicated
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
      results[allItems[i]] = occurances
    }
  }

  // This is the way I was supposed to do it
  // // iterates through all names and sets as item
  // for (let item of allItems){
  //   //this is the filter of the object that only checks for true passes
  //   if (itemsToCount[item]) {
  //     //checks if names repeat in allItems list
  //     if (results[item]) {
  //       results[item]++;
  //     //this will initialize the key value pair if it passes filter
  //     } else {
  //       results[item] = 1;
  //     } 
  //   }
  // }

  console.log(results)
  return results;
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