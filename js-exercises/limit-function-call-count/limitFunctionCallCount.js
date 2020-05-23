const limitFunctionCallCount = (foo,invokeNum) => {
 
  return function () {
      return cb(foo);
  };

};
function cb(foo) {
 if(foo) return foo
 else return null
}
export { limitFunctionCallCount };
