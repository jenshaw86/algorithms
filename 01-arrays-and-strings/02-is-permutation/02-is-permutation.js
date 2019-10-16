const isPermutation = (str1, str2) => {
  str1 = rearrange(str1).trim();
  str2 = rearrange(str2).trim();

  return str1 === str2
}

const rearrange = str => {
  return str.toLowerCase().split('').sort().join('');
}

module.exports = isPermutation;