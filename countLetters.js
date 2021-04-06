const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  const wordCount = {}

  for (let i = 0;  i < word.length; i++){
    let occurances = 0;
  
    for(let j = 0; j < word.length; ++j){
      if(word[j] === word[i]){
          occurances++;
        }
    }
    wordCount[word[i]] = occurances;
  }
  console.log(wordCount)
  return wordCount
}

module.exports = countLetters;

//countLetters('deeerp')