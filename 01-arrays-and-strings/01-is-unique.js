// implement an algorithm to determine if a string has all unique characters. Return true or false.
// Approach 1: DON'T USE ADDITIONAL DATA STRUCTURES

// function isUnique(str) {
//   let newStr = str.split("").sort().join("");
//   for(let i = 0; i < newStr.length - 1; i++) {
//     if (newStr[i] === newStr[i + 1]) return false;
//   }
//   return true;
// }


// Approach: 2
function isUnique(str) {
  // use a hash map to see what characters have already occured in the string  

  let map = {};
  
  //! if char already exists, just return false
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!map[char]) { // if char doesn't exist in map, add it
      map[char] = 1;
    } else { // else if it does, add one to it's value
      return false;
    }
  }
  
  // if all characters have value 1, return true
  return true;
}

module.exports = isUnique;