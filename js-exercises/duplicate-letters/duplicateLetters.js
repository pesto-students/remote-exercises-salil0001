function duplicateLetters(someString) {
  let letters = new Array(26);
  letters.fill(0);
  let count = 0;
  for (let i of someString) {
    letters[i.charCodeAt() - 97]++;
  }
  for (let i of letters) {
    if (i > count ) count=i;
  }

  if (count === 0 ||count === 1 ) return false;
  else return count;
}

export { duplicateLetters };
