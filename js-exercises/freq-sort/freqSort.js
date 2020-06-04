function freqSort(arrayOfString) {
  let frequency = {};
  arrayOfString.map((string) => {
    frequency.hasOwnProperty(string)
      ? (frequency[string] = frequency[string] + 1)
      : (frequency[string] = 1);
  });
  return Object.entries(frequency)
    .sort((str1, str2) => str2[1] - str1[1])
    .map((filterString) => filterString[0]);
}
export { freqSort };
