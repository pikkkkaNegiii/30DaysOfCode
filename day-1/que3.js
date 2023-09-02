//==================== Two arrays are equal ======================//
function equalArray(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]) ? 1 : 0;
    
  }
  
  const A = [1, 2, 5, 4, 0];
  const B = [1, 2, 5, 4, 0];
  
  const result = equalArray(A, B);
  console.log(result); 
  