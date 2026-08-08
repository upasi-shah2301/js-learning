const accountId = 2301
let accountEmail = "upasi@google.com"
var accountPassword = "12345"
accountCity = "Nadiad"
let accountState;

// accountId = 2 // not allowed 
accountEmail = "us@google.com"
accountPassword = "2204"
accountCity = "Ahmedabad"

/* 
Prefer not to use var
because of issue in block scope and functional scope
- block scope means it has been declared using { } or we can say that in used in loops, conditional statments etc
- if we are defining any value to the the variable it gives output as undefined
- if have used below console.table because we don't want declared again and again console.log and each variable name
 so using table we can get them in table format
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


