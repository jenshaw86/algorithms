const urlify = (str, l) => {
  str = str.slice(0, l)
  let url = ''

  for (let i = 0; i < str.length; i++) {
    url = url.concat(str[i] === ' ' ? '%20' : str[i]);    
  }

  return url;
}

module.exports = urlify;

// time complexity O(N)
// space complexity O(N)