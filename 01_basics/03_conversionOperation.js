let score = "upasi";

// console.log(typeof score);
// console.log(typeof(score));
/* conversion to number
 "33" => 33
 "33abc" => NaN( Not a Number )
 true => 1; false => 0 */

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "upasi" => true

let valueInNumber = Number(score);
 console.log(typeof valueInNumber); //number
 console.log(valueInNumber);// NaN(for this open file conversionCheck.js for more exmaple and ideas)

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber); //33
console.log(typeof stringNumber); //string

// ********************************************* Operations *********************************************//

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.6666666
// console.log(2%3); // 2
 
let str1 = "hello"
let str2 = " upasi"

let str3 = str1 + str2;
// console.log(str3); // hello upasi

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// if string is first than it will consider other one as string so in this case, console.log("1" + 2 + 2); 1 is string so will take 2 + 2 as string and so output will be 122
// In this case console.log(1 + 2 + "2"); first it is 1 + 2 is 3 and at last end it is string so first it will add two digit and then get output concante with that addition so output will be 32

console.log(+true); // 1
console.log(+""); // 0

// prefix (++x): Increments, then returns.
// postfix (x++): Returns, then increments.

// let x = 5;
// console.log(++x); // 6 (prefix)
// console.log(x); // 6

// let y = 5;
// console.log(y++); // 5 (postfix)
// console.log(y); // 6

// let a = 5;
// console.log(--a); // 4 (prefix)
// console.log(a); // 4 

// let b = 5;
// console.log(b--); // 5 (postfix)
// console.log(b); // 4

//  Operator: Meaning
//  ++a:  Increase -> then use
//  a++: Use value -> then Increase
//  a--: Use value -> then decrease
//  --a: Decrease -> then use






