const accountId = 144553;
let accountEmail = "ahmed@gmail.com";
var accountPassword = "12345";
accountCity = "Karachi";
let accounState;
// accountId = 2; // not allowed

accountEmail = "raza@gmail.com";
accountPassword = "09876543";
accountCity = "Lahore";

console.log(accountId);

/* 
 Prefer Not to use var
 because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accounState]);

