"use strict";
// program 7
let namesN = ["ram", "satish", "ramesh", "suresh", "laxman"];
console.log(namesN);
// program 8
let info2;
info2 = [7709192441, "chinmay", "deshpande"];
// program 
//admin
//Admin
//customer
//Customer
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["customer"] = 1] = "customer";
    Roles[Roles["student"] = 2] = "student";
    Roles[Roles["manager"] = 3] = "manager";
})(Roles || (Roles = {}));
if (Roles.admin) {
    console.log('i work as admin');
}
if (Roles.customer) {
    console.log('i work as customer');
}
if (Roles.student) {
    console.log('i work as student');
}
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["TimeOut"] = 503] = "TimeOut";
})(StatusCode || (StatusCode = {}));
let chinmay;
chinmay = {
    firstName: "chinmay",
    lastName: "deshpande"
};
// lengthy
// let sarika:{firstName:string,lastName:string} = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }
// }
let sarika = {
    firstName: "chinmay",
    lastName: "deshpande"
};
let audi = {
    modelNumber: 134,
    color: "red",
    type: "SUV"
};
let personOne = {
    firstName: "mayuri",
    lastName: "rao"
};
// program 12
function printAddress(code) {
    console.log(`My address is ${code}`);
}
printAddress('12');
printAddress(12);
// program 13 
let account;
account = "saving";
account = "current";
//let x = 10
//const x = 10
