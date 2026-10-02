let score = "33abc";
console.log(typeof(score)); //string
let valueNumber = Number(score); 
console.log(typeof(valueNumber)); //number
console.log(valueNumber);//NaN

/* Why do we get NaN ? 
-> Your value is "33abc", which contains both numbers and letters.
"33" → valid number
"33abc" → not a valid number because of the letters abc
NaN means "Not a Number". It is a special numeric value that indicates an invalid numeric result.
*/

let score1 = null;
console.log(typeof(score1)); //object
let valueNumber1 = Number(score1);
console.log(typeof(valueNumber1));// number
console.log(valueNumber1);//0

/* Why do we get 0?
-> In JavaScript, Number(null) returns 0 because of the language's type-conversion rules. However, typeof null returns "object" due to a historical JavaScript quirk.
*/

let score2 = undefined;
console.log(typeof(score2)); //undefined
let valueNumber2 = Number(score2);
console.log(typeof(valueNumber2));// number
console.log(valueNumber2);//NaN

/* why do we get NaN?
-> When undefined is converted using Number(), JavaScript returns NaN because undefined does not represent a valid numeric value. However, typeof NaN returns "number" because NaN belongs to JavaScript's number type.
*/

let score3 = true;
console.log(typeof(score3)); //boolean
let valueNumber3 = Number(score3);
console.log(typeof(valueNumber3));// number
console.log(valueNumber3);//1

