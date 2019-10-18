const countJewels = (j,s) => {
  const map = {};
  let sumJewels = 0;

  for (let i = 0; i < j.length; i++) {
    let jewel = j[i];
    map[jewel] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    let stone = s[i];
    if (map[stone]) {
        sumJewels += 1;
    }
  } 

  return sumJewels;
}

module.exports = countJewels