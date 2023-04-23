// program 1
// function addition(a,b){
//     console.log(a+b)
// }
// addition('1',"11") /// 111


// program2
// function additionB(x,y){
//     if(typeof x == "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         console.log("incorrect input")
//     }
// }
// additionB('2','4')

// program 3
function additionC(a:number,b:number){
    console.log(a+b)
}
additionC(12,4)

// program 4

let a = 10
console.log(a)

let b:number = 20
console.log(b)

// program 5

let first_name = "chinmay"
// let first_name:string = "chinmay"


// program 6
let canDrive = true
//let camDrive:boolean = true
console.log(canDrive)


// program 7
let cities:string [] = ["pune","mumbai","nagpur","chennai","kolkata"] 
console.log(cities)

let numbers:number [] = [11,22,33,44,45,66,77,88]
console.log(numbers)

let info:[string,string,number] =["chinmay","deshpande",23]
info.push(45)

// program8

let obj = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let obj2:{firstName:string,lastName:string,age:number}
obj2 = {
    firstName:"chinmay",
    lastName:"deshapande",
    age:23
}

// program 9
function mul(x:number,y:number):void{
    console.log(x+y)
}   
mul(12,4)

function mulB(x:number,y:number):number{
    console.log(x+y)
    return  x + y
}   
let q1 = mulB(12,4)


// program 10

let fruit:string[] = ["apple","mango","banana","grapes"]

fruit.forEach(function(el){
    console.log(el.toLowerCase())
})
















