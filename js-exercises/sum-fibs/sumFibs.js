function sumFibs(n) {
  let a = 1,
    b = 1,
    sum = 2,
    i=0,
    c=0;

    if(n===1) return 1;
    if(n===2) return 2;

  while (sum<=n) {
    c = a + b;
    if (c % 2 !== 0) sum += c;
    if(i<0)
    a = b;
    b = c;
  //  console.log(sum)
  }

  return sum
}

export { sumFibs };
