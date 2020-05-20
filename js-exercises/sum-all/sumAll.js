function sumAll(n) {
  let max, min;
  let sum=0;
  if (n[n.length - 1] > n[0]) {
    max = n[n.length - 1];
    min = n[0];
  } else
  {
    max = n[0];
    min = n[n.length - 1];
  }

  while(min<max+1){
    sum+=min
    min++
  }
  return sum;
}

export { sumAll };
