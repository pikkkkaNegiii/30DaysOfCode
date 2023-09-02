let A = [0, 1, 2, 3, 4, 5];
let B= [5, 4, 3, 2, 1, 0];


let max = A[0];
let max2 = B[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }
}

for (let K = 1; K < B.length; K++) {
    if (B[K] > max2) {
        max2 = B[K];
    }
}
console.log( max,max2);


