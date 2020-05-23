const longestWordInString=(args) => Math.max(...args.split(" ").map(stringLength=>stringLength.length));


export { longestWordInString };
   