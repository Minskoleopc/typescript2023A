"use strict";
// program 1
// class PersonA {
//     name:string
//     constructor(nm:string){
//         this.name = nm
//     }
//     displayName():string{
//         return this.name
//     }
// }
// let amol = new PersonA("amol rao")
// let nm = amol.displayName()
// program 2
// class PersonC {
//     public name: string
//     constructor(nm: string) {
//         this.name = nm
//     }
//     displayName(): string {
//         return this.name
//     }
// }
// let chinmayA = new PersonC('amol')
// console.log(chinmayA.name)
// let q = chinmayA.displayName()
// console.log(q)
// program 3
// class PersonD{
//     private name:string
//     constructor(nm:string){
//         this.name = nm
//     }
//     public displayName(): string {
//         this.greet()
//         return this.name
//     }
//     private greet(){
//         console.log('hello i am learning js')
//     }
// }
// let amolE = new PersonD("amolD")
// //console.log(amolE.name) private
// let q11 = amolE.displayName()
// console.log(q11)
// //amolE.greet() private
// program 4
class PersonE {
    constructor(name, lname) {
        this.name = name;
        this.lname = lname;
    }
}
let poorva = new PersonE("poorva", "vyas");
