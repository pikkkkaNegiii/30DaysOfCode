 //========================== Occurrence of key in an array ======================//
let A = [0, 1, 2, 3, 4, 5];
let B = [5, 4, 3, 2, 1, 0];
let k = 1;

let result = A.includes(k) && B.includes(k);

if (result) {
  console.log("The value " + k + " occurs in both arrays.");
} else {
  console.log("The value " + k + " does not occur in both arrays.");
}
