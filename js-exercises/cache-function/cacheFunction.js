function cacheFunction(foo) {

  return function(foo){
    return foo*foo
  }
}

export {
  cacheFunction,
};
