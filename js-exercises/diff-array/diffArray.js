const diffArray = (array1, array2) => [
  ...array1.filter((x) => !array2.includes(x)),
  ...array2.filter((x) => !array1.includes(x)),
];

export { diffArray };
