console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log("2" > 1)//true; reason is that javascript automatically take 2 as number because it greater so automatically convert 2 to a number
console.log("02" > 1)//true; reason is that javascript automatically take 2 as number because it greater so automatically convert 2 to a number
// when you are comparing two values data types of that two values must be same

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true 
/* The reason is that an equality check == and comparisons > < >= <= work differently.
comparison convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false */

console.log(undefined > 0);// false
console.log(undefined == 0);// false
console.log(undefined >= 0);// false

// The == operator compares two values after possible type conversion, whereas === compares both value and data type without type conversion. In most JavaScript code, === is preferred because its behavior is more predictable.
console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log(10 == 10);  // true
console.log(10 === 10); // true
console.log(true == 1);  // true
console.log(true === 1); // false
console.log(null == undefined);  // true
console.log(null === undefined); // false