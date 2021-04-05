// This function returns the middle element(s) of an array.
const middle = function(array) {
  let newArr=[]
  if (array.length === 1 || array.length === 2){
    return newArr;
  }
  else if (array.length % 2 === 1){
    newArr.push(array[Math.floor(array.length/2)])
  }
  else if (array.length % 2 === 0){
    newArr.push(array[array.length/2 - 1])
    newArr.push(array[array.length/2])
  }
  else {
    return false;
  }

  return newArr
}

module.exports = middle;