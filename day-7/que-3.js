function evenOdd(...arrays) {
    const evennums =[];
    const oddnums = [];

    for (const arr of arrays) {
        for (let i = 0; i < arr.length; i++) {
           if (arr[i] %2 === 0) {
            evennums.push(arr[i]);
           } else {
            oddnums.push(arr[i]);
           }
            
        }
    }
    return{
        even:evennums,
        odd:oddnums,
    };
}

//testcase-1
 const A1  =[1, 2, 5, 4, 0];
  const B1 = [1, 2, 5, 4, 0];
  const result1 = evenOdd(A1, B1);
  console.log("even number in A1 and B1: ", result1.even );
  console.log("odd number in A1 and B1: ", result1.odd );


  //testcase-2
  const A2 =[ 1, 2, 3, 4, 5 ];
    const B2 = [11, 22, 33, 44];
    const result2 = evenOdd(A2, B2);
    console.log("even number in A2 and B2: ", result2.even);
    console.log("odd number in A2 and B2: ", result2.odd );
 
