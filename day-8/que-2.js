// Define the arrays A and B
const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

// Merge the arrays by concatenating them
const mergedArray = A.concat(B);

// Initialize a variable to store the product
let product = 2;

// Calculate the product of the merged array using a loop
for (let i = 0; i < mergedArray.length; i++) {
  product *= mergedArray[i];
  console.log(product);
}

// Print the result
console.log("Merged Array:", mergedArray);
console.log("Product of Merged Array:", product);
