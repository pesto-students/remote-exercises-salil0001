function Cycled(arr) {
  let index = 0;
//   setIndex = () => {
//     if (index < 0 || index > arr.length) index = arr.length - 1;
//     return index;
//   };
  const iterator = {
    next() {
    //  setIndex();

      if (index === arr.length - 1) {
        index = 0;
        return arr[index];
      }
      return arr[++index];
    },
    current() {
   //   setIndex();

      return arr[index];
    },
    previous() {
  //    setIndex();

      if (index === 0) {
        index = arr.length - 1;
        return arr[index];
      }
      return arr[--index];
    },
    step(jumpIndex) {
   //   setIndex();

      return arr[(index = index + jumpIndex)];
    },
    index: index,
    reversed() {
   //   setIndex();

      return arr.reverse();
    },
  };
  return iterator;
}

export { Cycled };
