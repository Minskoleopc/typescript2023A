"use strict";
// let mobileNumber:number = 7709192441
// console.log(mobileNumber)
// function addition(a,b){
//     console.log(a+b)
// }
// addition('1','2')
// function additionB(x,y){
//     if(typeof x == "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         console.log('incorrect input')
//     }
// }
// additionB('12','6')
// program 1
function additionB(x, y) {
    console.log(x + y);
}
additionB(2, 3);
// program 2
let s1 = 10;
s1 = 34;
console.log(s1);
// program 3
function subtraction(x, y, result, msg) {
    if (result) {
        console.log(msg);
        console.log(x + y);
    }
    else {
        console.log(msg);
    }
}
subtraction(12, 6, true, "pass");
subtraction(12, 6, false, "fail");
// program 4
function additionC(x, y) {
    console.log(x + y);
}
additionC(12, 3);
function additionD(x, y) {
    console.log(x + y);
    return x + y;
}
let s2 = additionD(12, 3);
console.log(s2);
// program 6
function mul(x, y) {
    console.log(x + y);
    return x * y;
}
let s3 = additionD(12, 3);
console.log(s3);
//program 7
//let info = ["chinmay","deshpande",12,14]
let info = [11, 22, 33, 44];
console.log(info);
// program 8
// Array of fixed size
let role = [13, "chinmay"];
