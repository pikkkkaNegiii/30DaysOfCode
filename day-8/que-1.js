// Define the arrays A and B
const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

// Merge the arrays by concatenating them
const mergedArray = A.concat(B);

// Calculate the sum of the merged array using a loop or reduce
let sum = 0;
for (let i = 0; i < mergedArray.length; i++) {
  sum += mergedArray[i];
  //just for checking
  console.log(sum);
}

// Print the result
console.log("Merged Array:", mergedArray);
console.log("Sum of Merged Array:", sum);

