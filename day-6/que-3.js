// ================== Find the element that appears once in sorted array =============//

function uniqueElement(arr) {
    let result = 0;

    for (const num of arr) {
        result ^= num;
    }

    return result;
}

// Test case 1
const A1 = [1, 1, 3, 3, 3, 0];
console.log("Unique element in Test Case 1:", uniqueElement(A1)); 

// Test case 2
const A2 = [1, 2, 2, 2, 2, 2, 2];
console.log("Unique element in Test Case 2:", uniqueElement(A2)); 
