//================= Reverse an string ===============//
function reverseString(String) {
    let reverse = '';
    for (let i = String.length - 1; i >= 0; i--) {
      reverse += String[i];
    }
    return reverse;
  }
  
  const myString = "abc";
  const newString = reverseString(myString);
  console.log(newString); 
  