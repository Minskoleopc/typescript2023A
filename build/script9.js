"use strict";
// program
let x = "hello";
console.log(x);
// program 2
// let x1:number = 4;
// console.log((x1 as string).length) //'4'
// program 3
//9766909110
//'976690110'
let x2 = "hello";
console.log(x2.length);
// program 4 (Generics)
function addition(x, y) {
    return [x, y];
}
let r1 = addition("chinmay", 7);
let r2 = addition("chinmay", "hello");
let r3 = addition(7, 7);
let r4 = addition(7, '7');
