const accountId = 101  // can't be changed
let acoundEmail = "ashish@gmail.com"
var acountPassword = "12345"
acountCity = "Jaipur"  
let accountState;         // undefined
var accNo                 // undefined

//accountId = 201         // not allowed bcz const cant be changed once define value in variable.
console.log(accountId);

/* prefer not to use var because of of issue in block scope and functional scope */
acoundEmail = "ashu@gmail.com"
acountPassword = "54321"
acountCity = "Banglore"
console.table([accountId,acoundEmail,acountPassword,acountCity,accountState,accNo])