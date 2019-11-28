const compressString = str => {
  if (str.length <= 1) return str;

  let letter = str[0]
  let count = 1;
  let compressedStr = '';
  let compressable = false;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
      compressable = true;
    } else {
      compressedStr += (letter + count)
      count = 1;
      letter = str[i];
    }
  }
  compressedStr += (letter + count)
  return compressable ? compressedStr : str;
}

module.exports = compressString;