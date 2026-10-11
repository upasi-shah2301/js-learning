// Primitive 
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

//Javascipt is dynamically or static type language?


// Reference (Non-primitive)
// Array, Objects, Functions
// typeof all  non-primitive datatypes will be object 
//typeof function will be function and it is called to be object function. 

console.log(typeof "Upasi");       // string

console.log(typeof 100);           // number

console.log(typeof 10.5);          // number

console.log(typeof 123n);           // bigint

console.log(typeof true);           // boolean

console.log(typeof undefined);      // undefined

console.log(typeof null);           // object

console.log(typeof Symbol("id"));   // symbol

console.log(typeof { name: "Upasi" }); // object


/*********************************************** Memory Allocation *******************************************/
//Stack(Primitive), Heap(Non-primitive)

let myName = "Upasi";
let anotherName = myName;
anotherName = "Upasi Shah"
console.log(myName); //Upasi
console.log(anotherName); //Upasi Shah


/*
Stack : Stores function execution information, such as local variables and function calls. Primitive values are often explained using stack storage in beginner examples.

        Think: a stack of plates, where the last plate added is the first one removed.

        Example: let x = 10;
                let y = x;
                y = 50;
                console.log(x); // 10
                console.log(y); // 50
                y gets the primitive value 10. Reassigning y to 50 does not change x.
*/
/*
Heap : A memory area used for dynamically allocated data, including objects and arrays.

       Think: a large storage room where objects can occupy different amounts of space.

       Example: let x = { score: 10 };
                let y = x;
                y.score = 50;
                console.log(x.score); // 50
                console.log(y.score); // 50
                Both variables refer to the same object, so changing its property is visible through both variables.
*/
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "upasi@gmail.com"
console.log(userOne.email);//upasi@gmail.com
console.log(userTwo.email);//upasi@gmail.com

/*
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.
*/