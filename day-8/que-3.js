// Function to check if a number is prime
function prime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
  }
  
  // Testcase 1: A[] = {1, 2, 5, 4, 0}
  const array1 = [1, 2, 5, 4, 0];
  console.log("Testcase 1: Prime numbers in array A:");
  for (let i = 0; i < array1.length; i++) {
    if (prime(array1[i])) {
      console.log(array1[i]);
    }
  }
  
  // Testcase 2: A[] = {1, 2, 3, 4, 5}
  const array2 = [1, 2, 3, 4, 5];
  console.log("Testcase 2: Prime numbers in array A:");
  for (let i = 0; i < array2.length; i++) {
    if (prime(array2[i])) {
      console.log(array2[i]);
    }
  }
  