function sumPrimes(number) {
  let sum=0;
  for(let j=2; j<=number; j++){
  let flag=0;
    for (let i=2; i<j; i++)
    {
      if(j%i === 0)
      {
        flag=1
        break;
      }
    }
    if(flag===0 || number===2){
      sum=sum+j;
    }
  }
 
  return sum
}

export {
  sumPrimes,
};
