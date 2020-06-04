function getKeyDescriptorPairs(object) {
  return Object.getOwnPropertyNames(object).map((key) => {
    const desc = Object.getOwnPropertyDescriptors(object, key);
    return [key, desc];
  });
}

function fromKeyDescPairs(pairs) {
  return pairs.reduce((result, [key, desc]) => {
    Object.defineProperties(result, key, desc);
    return result;
  }, {});
}
function map(object, cb) {
  const pairs = getKeyDescriptorPairs(object);
  const mappedPairs = pairs.map((el) => {
    const [key, desc] = el;
    const [nKey, newVal] = cb([key, desc.value]);
    desc.value = newVal;
    return [nKey, desc];
  });
  return fromKeyDescPairs(mappedPairs);
}

export {
  map,
  //filter, invert, merge, all, some
};
