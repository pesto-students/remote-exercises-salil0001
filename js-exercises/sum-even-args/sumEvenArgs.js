const sumEvenArgs = (...args) => args.reduce((sum,currentNum)=>currentNum%2===0?sum+currentNum:sum,0);
export { sumEvenArgs };
