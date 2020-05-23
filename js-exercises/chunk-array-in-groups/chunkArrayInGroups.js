function chunkArrayInGroups(array, chunkSize) {
let i=0;
let groupArray=[];

while(i<array.length){
    groupArray= [...groupArray,array.slice(i,i+chunkSize)];
    i+=chunkSize;
}
  
  return groupArray
}
export {
  chunkArrayInGroups,
};
