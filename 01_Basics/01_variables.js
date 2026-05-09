const accountID = 144553
let accountName = "Sumit"
var accountMail = " sumit@google.com" // prefer not to use coz block scope issue and functional scope issue
accountCity = "jaipur"

// accountID = 2 :- Not Allowed
accountMail = "smtpndy@google.com"
accountName = "Mohan"
accountCity = "Delhi"

console.log(accountID);

console.table([accountID,accountName,accountMail,accountCity])