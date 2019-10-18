const splitBalancedStr = str => {
  if (!str || str.length % 2 !== 0) return 0;

  let counter = 0;
  let balance = 0; 

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "L":
        balance++;
        break;
      case "R":
        balance--;
        break;
      default: 
        null;
    }
    if (balance === 0) counter++;
  }

  return counter;
}

module.exports = splitBalancedStr;

// Thoughts: 
// do all inputs have an even character count? will we get 1?
// will we ever get an empty string?
// will we ever get characters that are not L or R?
