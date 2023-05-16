"use strict";
// interface wordBank {
//     save(): number
//     loan(): number
class GrandFather {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    displayGF() {
        console.log(this.firstName + this.lastName);
    }
}
class FatherN extends GrandFather {
    constructor(fn, ln, fname) {
        super(fn, ln);
        this.fname = fname;
    }
    displayFN() {
        console.log(this.fname + this.lastName);
    }
    displayAddress() {
        return "A -302 Gardenia Society pune";
    }
}
let ninad = new FatherN("ninad", "dani", "chinmay");
