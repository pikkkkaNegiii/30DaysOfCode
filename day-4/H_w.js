//================ Type Casting ==================//
/*  Type Casting in javascript means converting one data type to another data type
  The typecasting is also known as type conversion  */

//--- Implicit type 
 const num = 10;
 const str ="5";

 const result = num+str;
 console.log(result);

 //--- Explicit type
  const strr= "10";
  const numm = parseInt(strr);




  //====== Closure =======//
/*      A closure is a feature of js that allows inner function to access the outer
         scope of a function .        */
function myFunc(){
    let a = 4;
return a*a;
}



//========= Var and Const=========//
/*      var and let create variables that can be reassigned another value .const creates "constant" variables
        that cannot be reassigned another value ..          */



//=============== loops====================//

//       for loop 
for (let i=0; i<6 ; i++){
    console.log(i);
}

//      for of loop
for (let b of "priya"){
    console.log(b);
}

//       foreach loop
const numbers=[1, 2, 3, 4, 5,];
numbers.forEach(function(numbers){
    console.log(numbers);
});

//        for in loop
let obj={
    pika:70,
    shiv:50,
    shivu:59,
    priya:40
}
for(let a in obj){
    console.log("mark of "+a+ " are "+obj[a])
}



//============================ lexical scope ========================//
/*    lexical scope .also known as "static scope", refers to how variables are accessed and resolved in a         
       programming language based on where they are defined within the source code      */
       function outerFunction(){
        const outerVariable=10;

        function innerFunction() {
            const innerVariable=5;
            console.log(innerVariable);
            console.log(outerVariable);
        }
        innerFunction();
       }
outerFunction();



//====================== Maps ================//
/*    A map holds key-value pairs where the key can be any datatype. A map remembers the original insertion order 
     of the keys. A map has a property that represents the size of the map         */ 