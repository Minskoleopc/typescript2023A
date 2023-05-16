
// program
let x :unknown  = "hello"
console.log((x as string))


// program 2

// let x1:number = 4;
// console.log((x1 as string).length) //'4'

// program 3
//9766909110
//'976690110'
let x2:unknown = "hello"
console.log((<string>x2).length)

// program 4 (Generics)
function addition<s1,s2>(x:s1,y:s2):[s1,s2]{
    return [x,y]
}

let r1 = addition<string, number>("chinmay",7)
let r2 = addition<string, string>("chinmay","hello")
let r3 = addition<number, number>(7,7)
let r4 = addition<number, string>(7,'7')