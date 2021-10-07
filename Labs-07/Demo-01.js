/*
    ECMAScript
    Variable
    keyword: const, var, let
    Un type variable
*/

a = 1;
console.log(a);

a = "Hello World"
console.log(a);

const MAX = 1000;
console.log("Max", MAX);

var b = 1;
console.log("1. b =", b);

let c = 2;
console.log("1. c =", c);
function calculate() {
    console.log("2. --> b =", b);
    console.log("2.  --> c =", c);

    let d = 4;
    console.log("1. --> d = ", d);

    if (d%2 === 0) {
        console.log("2. --> d = ", d);
        var e = 10;
        let f = 11;
        console.log("1. --> e = ", e);
        console.log("1. --> f = ", f);
    }
    console.log("3. --> d = ", d);
    console.log("2. --> e = ", e);
    // console.log("2. --> f = ", f);
}

calculate();

// console.log("3. b =", b);
// console.log("3. c =", c);
// console.log("2. --> d = ", d);