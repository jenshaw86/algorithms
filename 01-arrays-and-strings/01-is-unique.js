// implement an algorithm to determine if a string has all unique characters. Return true or false.
// Approach 1: DON'T USE ADDITIONAL DATA STRUCTURES

// function isUnique(str) {
//   let newStr = str.split("").sort().join("");
//   for(let i = 0; i < newStr.length - 1; i++) {
//     if (newStr[i] === newStr[i + 1]) return false;
//   }
//   return true;
// }

// problems here: sorting takes up space, also don't like splitting to array and back to string. 


// Approach: 2
// assuming we're looking for only unique letters, not including capitals, numbers, symbols, or spaces

function isUnique(str) {
  str = str.toLowerCase();
  if (str.length > 26) return false;
  //! check if str is too long to be unique. If so, return false

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