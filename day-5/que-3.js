function evenOdd(...arrays) {
    const evenNums =[];
    const  oddNums =[];
    for (const arr of arrays) {
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2===0) {
                evenNums.push(arr[i]);
            }
            else{
                oddNums.push(arr[i]);
            }
        }
    }
    return{
        even:evenNums,
        odd:oddNums,
    };
}

//test case-1
const A1=[1, 2, 5, 4, 0];
const B1=[1, 2, 5, 4, 0];
const result = evenOdd(A1, B1);
console.log("Even numbers in array A1 and B1:", result.even);
console.log("Odd numbers in array A1 and B1:", result.odd);

//test case-2
const A2=[1, 2, 3, 4, 5];
const B2=[11, 22, 33, 44];
const result2 = evenOdd(A2, B2);
console.log("Even numbers in array A2 and B2:", result2.even);
console.log("Odd numbers in array A2 and B2:", result2.odd);