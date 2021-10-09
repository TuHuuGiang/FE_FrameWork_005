// Module

'use strict'

console.clear()

const func = require('./Demo-12_module')
const funcHello = require('./Demo2-12_module')
// const {sayHello} = require('./Demo2-12_module')  Nếu muốn gọi 1 hàm duy nhất

let a = 4
let b = 5

console.log(func.cong(a, b))
console.log(func.tru(a, b))
console.log(func.data)
funcHello.sayHello()