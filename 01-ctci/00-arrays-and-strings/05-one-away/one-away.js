const oneAway = (str1, str2) => {
  // if the diff between str1 and str2 is greater than 1, return false
  if (Math.abs(str1.length - str2.length) > 1) return false

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (str1.length == str2.length) {
        return str1.slice(i+1) === str2.slice(i+1)
      } else if (str1.length > str2.length) {
        return str1.slice(i+1) === str2.slice(i)
      } else if (str1.length < str1.length) {
        return str1.slice(i) === str1.slice(i+1);
      }
    }
  }
  return true;
}

module.exports = oneAway;
