const removeFromArray = function(...args) {
  const array = args[0];
  const newArray = [];
//   array.forEach((item) => {
 
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
for (const item of array) {
    if (!args.includes(item)) {
       newArray.push(item);
   }
}
 
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
