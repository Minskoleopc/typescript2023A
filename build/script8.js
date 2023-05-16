"use strict";
// class Addition {
//     // addition(x:number, y:number):void{
//     //     console.log(x+y)
//     // }
//     // addition(x:number, y:number ,z:number):void{
//     //     console.log(x+y+z)
//     // }
//     static addition(x: any, y: any, z: any, a: any): void {
//         if (x != undefined && y != undefined && z != undefined && a != undefined) {
//             console.log(x + y + z + a)
//         }
//         else if (x != undefined && y != undefined && z != undefined) {
//             console.log(x+y+z)
//         }
//         else if (x != undefined && y != undefined) {
//             console.log(x+y)
//         }
//     }
// }
// Addition.addition(12,34,5,6)
// Addition.addition(12,34,5,undefined)
// Addition.addition(12,34,undefined,undefined)
// same class , same method , different signature --- overloading
// over riding ??
// different class , same method name , same signature
// class worldBank {
//     loan(x:number):number{
//         return 10 + x
//     }
//     save(y:number):number {
//         return 11 + y
//     }
// }
// class SBI extends worldBank {
//     public override loan(x:number):number{
//         return 10 + x*10
//     }
//     public override save(y:number):number {
//         return 11 + y*10
//     }
// }
// let nagpur = new SBI()
// nagpur.save(12)
// nagpur.loan(13)
// abstraction class   --- cannot create instance 
// interface - cannot create instance
class Student {
    constructor() {
        this.displayCountry = () => console.log('India');
    }
}
class Teacher extends Student {
    fullName() {
        return "chinmay deshpande";
    }
}
let aa = new Teacher();
aa.displayCountry();
aa.fullName();
