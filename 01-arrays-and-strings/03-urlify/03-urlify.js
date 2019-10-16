const urlify = (str, l) => {
  str = str.slice(0, l)
  let url = ''

  // iterate through string
  for (let i = 0; i < str.length; i++) {
    url = url.concat(str[i] === ' ' ? '%20' : str[i]);    
  }
  return url;
  // if char is whitespace, push %20
  // else, push original char
  // track length, every push is one 
}

module.exports = urlify;