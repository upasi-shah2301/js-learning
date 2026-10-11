//Javascript string methods //
/*Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.*/
/* JavaScript lets you create strings using single quotes (' '), double quotes (" "), or backticks (` `).*/
/*
A. Strings have indexes
B. Strings are immutable
Immutable means you cannot change the original string's characters directly. String methods generally return a new string instead.*/

/* 1. toUpperCase() : Converts all letters in a string to uppercase. */
let text = "hello javascript";
console.log(text.toUpperCase()); // HELLO JAVASCRIPT

let city = "ahmedabad";
let result = city.toUpperCase();
console.log(result); // AHMEDABAD
console.log(city);   // ahmedabad

/* 2. toLowerCase() : Converts all letters in a string to lowercase. */
let text1 = "HELLO JAVASCRIPT";
console.log(text1.toLowerCase()); //hello javascript

/* 3. trim() : Removes whitespace from the beginning and end of a string. */
let text3 = "   Hello World   ";
console.log(text3.trim());
//trimStart() removes whitespace from the beginning.
//trimEnd() removes whitespace from the end.
console.log(text3.trimStart());  // "Hello World   "
console.log(text3.trimEnd());    // "   Hello World"

/* 4. includes() : Checks whether a string contains a particular piece of text. It returns a Boolean: true or false. */
let text4 = "I am learning JavaScript";
console.log(text4.includes("JavaScript")); //true
console.log(text4.includes("Python")); //false
/* One important point: includes() is case-sensitive.*/
console.log("Hello".includes("hello")); // false

/* 5. startsWith() : Checks whether a string begins with the specified text. */
let text5 = "JavaScript is easy";
console.log(text5.startsWith("Java")); // true
console.log(text5.startsWith("easy")); // false

/* 6. endsWith() : Checks whether a string ends with the specified text. */
let fileName = "resume.pdf";
console.log(fileName.endsWith(".pdf")); //true
console.log(fileName.endsWith(".jpg")); //false

/* 7. indexOf() : Returns the index of the first occurrence of the specified text. If it cannot find the text, it returns -1. */
let text6 = "JavaScript";

console.log(text6.indexOf("a")); //1
console.log(text6.indexOf("S")); //4
console.log(text6.indexOf("z")); //-1

/* 8. lastIndexOf() : Returns the index of the last occurrence of the specified text. */
let text7 = "banana";

console.log(text7.indexOf("a")); //1
console.log(text7.lastIndexOf("a"));//5
/* indexOf("a") finds the first a.
lastIndexOf("a") finds the last a.*/

/* 9. slice() : Extracts part of a string and returns a new string. It does not change the original string. */
// Syntax: string.slice(start, end); : The start index is included, but the end index is excluded.
let text8 = "JavaScript";
console.log(text8.slice(0, 4)); //Java
console.log(text8.slice(4)); // Script
console.log(text8.slice(-6)); // Script
console.log(text8.slice(-3)); //ipt

/* 10. substring() : Extracts part of a string between two indexes. */
let text9 = "JavaScript";
console.log(text9.substring(0, 4)); //Java
console.log(text9.substring(4, 10)); //Script
// substring() and slice() often behave similarly, but negative indexes are handled differently.
let text10 = "JavaScript";
console.log(text10.slice(-6));      // Script
console.log(text10.substring(-6));  // JavaScript
/* slice(-6) counts backward from the end.
   substring(-6) treats the negative index as 0. */

/* 11. split() : Divides a string into an array using a separator. */
let text11 = "apple,banana,mango";
console.log(text11.split(",")); // ["apple", "banana", "mango"]

/* 12. replace() : Replaces the first matching occurrence of a string with new text when a plain string is used as the search value. */
let text12 = "I like cats and cats";
console.log(text12.replace("cats", "dogs")); // I like dogs and cats
//Only the first occurrence was replaced. 

/* 13. replaceAll() : Replaces all occurrences of the specified text. */
let text13 = "cat cat cat";
console.log(text13.replaceAll("cat", "dog")); //dog dog dog
/* Difference:
let text = "apple apple";
console.log(text.replace("apple", "mango"));// mango apple
console.log(text.replaceAll("apple", "mango"));// mango mango
*/

/* 14. concat() : Joins strings together and returns a new string. */
let firstName = "Upasi";
let lastName = "Shah";
console.log(firstName.concat(" ", lastName)); // Upasi Shah
//You can do the same thing with template literals:
console.log(`${firstName} ${lastName}`);

/* 15. repeat() : Repeats a string a specified number of times. */
let text14 = "Hi ";
console.log(text14.repeat(3)); //Hi Hi Hi
console.log("*".repeat(5)); //*****

/* 16. padStart() : adds characters to the beginning of a string until it reaches a specified length. */
let number = "5";
console.log(number.padStart(3, "0"));//005
//The target length is 3, so two zeros are added to the beginning.

/* 17. padEnd() : Adds characters to the end of a string until it reaches a specified length.*/
let number1 = "5";
console.log(number1.padEnd(3, "0"));//500
// Two zeros are added to the end.

/* 18. at() : Returns the character at a specified index. Negative indexes count backward from the end.*/
let text15 = "JavaScript";
console.log(text15.at(0)); //J
console.log(text15.at(-1)); //t
console.log(text15.at(-2));//p

/* 19. charAt() : Returns the character at a specified non-negative index. */
let text16 = "Hello";

console.log(text16.charAt(0));//H
console.log(text16.charAt(1));//e
console.log(text16.charAt(4));//o
/* Difference from at():
console.log("Hello".at(-1));     // o
console.log("Hello".charAt(-1)); // ""  */

/* 20. length : Returns the number of UTF-16 code units in a string. For ordinary English text, it usually matches the number of characters.*/
let text17 = "JavaScript";
console.log(text17.length); // 10
/* length is a property, not a method. Don't write text.length().*/
