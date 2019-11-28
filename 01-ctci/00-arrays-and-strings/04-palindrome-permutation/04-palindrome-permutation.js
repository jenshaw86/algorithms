const palindromePermutation = str => {
  const map = {}
  const regex = /[\S]/g;
  const saniStr = str.match(regex);

  for (let i = 0; i < saniStr.length; i++) {
    if (map[saniStr[i]]) {
    map[saniStr[i]] += 1;
    } else {
      map[saniStr[i]] = 1;
    }
  }

  let oddCount = 0; 

  for (let char in map) {
    if (map[char] % 2 !== 0) {
      oddCount += 1;
      if (oddCount > 1) return false;
    }
  }
  return true;
}

module.exports = palindromePermutation;

// can it be a palindrome?