/* Strings created with single or double quotes work the same.
There is no difference between the two.*/
/* Template Strings : Templates are strings enclosed in backticks (`This is a template string`).
Templates allow single and double quotes inside a string:*/
const name ="upasi";
console.log(name); //upasi
const repocount = 50;
console.log(name + repocount + " Value"); // upasi50 Value
console.log(`My name is ${name} and count of my repository is ${repocount}`); // String Interpolation 
/* String Interpolation:
String interpolation in JavaScript means inserting variables or expressions inside a string.
We usually do this using template literals, which use backticks (`) and the ${} syntax.
*/

const gameName = new String("upasishah"); // JavaScript Strings as Objects -->u-0 p-1 a-2 s-3 i-4
console.log(gameName[0]); //u
console.log(gameName.__proto__); // {}
console.log(gameName.length); // 9
console.log(gameName.toUpperCase()); // UPASISHAH
console.log(gameName.charAt(2)); // a 
console.log(gameName.indexOf('p'));//1