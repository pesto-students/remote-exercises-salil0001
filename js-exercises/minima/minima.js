function minima(limit, array) {
  for (let i = 0; i < limit; i++)
    for (let j = 0; j < array.length; j++)
    if (array[j] < array[j + 1]) {
        array[j] = array[j] ^ array[j + 1];
        array[j+1] = array[j] ^ array[j + 1];
        array[j] = array[j] ^ array[j + 1];
      }

      return array.slice(array.length-limit,array.length).reverse() ;
}


export { minima };
