// Data type

console.clear();

let a = 4; //integer
let b = 5.2; //float
let c = 'Hello'; //String
let d = {
    id: 1,
    name: 'Product MX'
}

console.log(a, b, c, d);
console.log("-----------------");

let e = [1, 2, 3, 4];
console.log(e);
console.log("-----------------");

let f = [
    1, 
    2, 
    3,
    {
        name: 'abc', 
        value: 100
    }
];
console.log(f);
console.log("-----------------");

let g = true; // boolean
let h = null; // null
let i; // undefined
console.log(g, h, i);
console.log("-----------------");

let j = 2;
let s = (j % 2 === 0) ? "Chan" : "Le";

// if (j % 2 === 0) {
//     s = "Chan";
// } else {
//     s = "Le"
// }
console.log(s);