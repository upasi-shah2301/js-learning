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

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


