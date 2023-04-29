// class PersonX {

//     msg:string
//     constructor(msg:string){
//         this.msg = msg
//     }

//     displayMsg(){
//         console.log(this.msg)
//     }

// }
// let al = new PersonX("i am learning js")
// console.log(al)
// al.displayMsg()


// program 2


// class PersonX {

//     private msg:string
//     constructor(msg:string){
//         this.msg = msg
//     }

//     public displayMsg(){
//         console.log(this.msg)
//         return this.msg
//     }

// }
// let al = new PersonX("i am learning js")
// console.log(al)
// let a11 = al.displayMsg()
// console.log(a11)

// //program 3


// class PersonX {

//     private msg:string
//     constructor(msg:string){
//         this.msg = msg
//     }

//     private displayMsg(){
//         console.log(this.msg)
//         return this.msg
//     }

//     public callDisplay(){
//         this.displayMsg()
//     }

// }
// let al = new PersonX("i am learning js")
// al.callDisplay()


// program 4 

// class StudentA {

//     // firstName:string
//     // lastName:string

//     // constructor(fn:string,ln:string){
//     //     this.firstName = fn
//     //     this.lastName = ln
//     // }

//     constructor(protected firstName:string,public lastName:string){
//     }

//     display():string{
//         return this.firstName + this.lastName
//     }

// }

// class Teacher extends  StudentA {
//     salary:number
//     constructor(firstName:string,lastName:string,salary:number){
//         super(firstName,lastName)
//         this.salary = salary
//     }

//     displayFirstName(): string {
//         return this.firstName
//     }

// }

// let chin = new Teacher("chinmay","deshpande",90);
// //console.log(chin.firstName) 
// //protected , only availabe in class or inherited class
// console.log(chin.lastName)
// console.log(chin.salary)



//readonly


class ProfessorA {

    readonly professor:string ;

    constructor(pr:string){
        this.professor = pr
    }



}

let clk = new ProfessorA("maths")
console.log(clk.professor)
















