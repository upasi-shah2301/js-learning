"use strict"; // treat all JS Code as newer version

// alert(3 + 3) // we are using nodejs not browser

console.log(3
    +
     3) // code readability should be high 

console.log("Upasi");

let name ="upasi"
let age = 18
let isLoggedIn = false

// number => 2 to power of 53, let length = 16;
// bigint => let x = 12345678901234567890n;
// string => "", let color = "yellow";
// boolean => let x = true ; // true/false
// null => standalone value
// undefined
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof []); // object
console.log(Array.isArray([])); //true;
console.log(typeof NaN) // number  NaN means Not a Number, but JavaScript classifies it as a number value.

/* In JavaScript, typeof is used to check the data type of a value or variable. */

/* !Important Question
What are typeof null and undefined ??
- typeof null is object and typeof undefined is undefined
*/

/* JavaScript data types: 
JavaScript has 7 primitive data types and one non-primitive category: Object.
Type           Example
String         "Upasi"
Number         25, 99.5
Boolean        true, false
Undefined      let x;
Null           null
BigInt         123n
Symbol         Symbol("id")
Object         { name: "Upasi" }

*/
//Remember for interviews:
// Object is a non-primitive data type in JavaScript.
// Array is a special kind of object.
// Date is a built-in object.
// Arrays and dates are not separate primitive data types.

/* Difference between Primitive & Non Primintive
Primitive                                                    Non- Primitive
Stores a single value                                  can represent collections or complex values
Example: let a = 10;                                   Example: let a = [1,2];
Examples: String, Number, Boolean.                     Examples: Object, Array, Date.
Copied by value.                                       Variables hold references to objects.
*/