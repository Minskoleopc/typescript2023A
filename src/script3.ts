// program 7
let namesN:string [] = ["ram","satish","ramesh","suresh","laxman"] 
console.log(namesN)
// program 8
let info2 :[number,string,string];
info2 = [7709192441,"chinmay","deshpande"]

// program 

//admin
//Admin
//customer
//Customer

enum Roles {
    admin,
    customer,
    student,
    manager
}
if(Roles.admin){
    console.log('i work as admin')
}
if(Roles.customer){
    console.log('i work as customer')
}
if(Roles.student){
    console.log('i work as student')
}

enum Direction {
    North,
    South,
    East,
    West
}


enum StatusCode{
    NotFound = 404,
    Success = 200,
    Created = 201,
    TimeOut = 503
}

// program 9
type Person = {
    firstName:string,
    lastName:string
}

let chinmay:Person;

chinmay = {
    firstName:"chinmay",
    lastName:"deshpande"
}

// lengthy
// let sarika:{firstName:string,lastName:string} = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// }
let sarika:Person = {
    firstName:"chinmay",
    lastName:"deshpande"
}

// program 10

type Car = {
    modelNumber:number,
    color:string,
    type:string
}
let audi:Car = {
    modelNumber:134,
    color:"red",
    type:"SUV"
}

// program 11

interface PersonC {
    firstName:string,
    lastName:string
}

let personOne:PersonC = {
    firstName:"mayuri",
    lastName:"rao"
}

// program 12

function printAddress(code:string|number){
    console.log(`My address is ${code}`)
}
printAddress('12')
printAddress(12)


// program 13 
let account:"saving"|"current"
account = "saving"
account = "current"

//let x = 10
//const x = 10





























