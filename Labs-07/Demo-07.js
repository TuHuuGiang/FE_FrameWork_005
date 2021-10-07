// Array

"use strict";

console.clear();

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

console.log("---------------------------")

a.forEach(item => console.log(item))

a.reverse()
console.log(a)

a.sort()
console.log(a)

a.push(100)
console.log(a)

let b = a.pop()
console.log(a)
console.log(b)

a.unshift(100)
console.log(a)

b = a.shift()
console.log(a)
console.log(b)

console.log("--------------------------")

a.map((item, index) => {
    console.log(item, "--", index)
})

console.log("--------------------------")
a = [
    {
        name: "product 1",
        price: 100
    },
    {
        name: "product 2",
        price: 200
    },
    {
        name: "product 3",
        price: 300
    }
]

a.map((element, index) => {
    console.log(element, "--", index)
})

console.log("--------------------------")
let result = a.filter((element) => {
    return element.price > 200
})

console.log(result)

console.log("--------------------------")
let sumPrice = a.reduce((result, element) => result + element.price, 0)  // 0 ở cuối tương đương với khai báo let sum = 0
console.log(sumPrice)

console.log("--------------------------")
a = [1, 2, 3, 4, 5]
console.log(a)
b = ['a', 'b', 'c']
console.log(a)
b.push(...a) // iterator
console.log(b)