function curry(fn) {
  //console.log(func.length)
  return function curried(...args) {
   // console.log(args)
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}
export {
  curry,
};
