//=========================== Finde if two arrayes are equal ======================//

//-------------- Test case-1 -----------//

function equalArray(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]) ? "Equal" : "Not equal";
    
  }
  
  let A1 = [1,2,5,4,0];
  let B1 = [1,2,5,4,0];
  
  const result = equalArray(A1, B1);
  console.log(result); 
  

  //----------------- Test case-2 ---------------------------//
  let A2 =[1,2,3,4,5];
   let B2=[11, 22, 33 ,44];
  
   const result2 =equalArray(A2, B2);
   console.log(result2);