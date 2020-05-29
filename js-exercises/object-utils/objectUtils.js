const map = (squareDimensions) =>
  Object.values(squareDimensions).map((side) => side * side);
const filter = (ages) => Object.values(ages).filter((age) => age > 10);
const merge = (ob1, ob2) => {
  return { ...ob1, ...ob2 };
};
const some = (userAccount, value) =>
  Object.values(userAccount).some((primeAccount) => primeAccount === "prime");

export {
  map,
  filter,
  // invert,
  merge,
  // all,
  some,
};
