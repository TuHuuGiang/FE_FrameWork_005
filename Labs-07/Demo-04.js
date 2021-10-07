// Function is ES

'use strict';

console.clear();

function sayHello() {console.log("Hello")}
sayHello()

//? Pass by value
function doubleValue(value) {
    value *= 2;
    console.log("-->", value)
}

let a = 100
console.log("1. a = ", a)
doubleValue(a)
console.log("2. a = ", a)

function  incrementValue(object) {
    object.value += 10;
    console.log("--->", object)
}

let b = {value: 100} // Đưa thăng object vào hàm và hàm thay đổi giá trị trực tiếp trên địa chỉ ô nhớ
console.log("1. b = ", b)
incrementValue(b)
console.log("2. b = ", b)

//? Default parameter
// Biến có parameter nên để ở cuối
function sayHi(value, name = "Tí") {
    console.log(value, " Hi, " + name)
}

sayHi(1, "Huu Giang")
sayHi(2)


// Hàm nặc danh
let showMessage = function(message) {console.log(message)}
showMessage("Hello someone")

// ? Arrow Function
let showMessage_2 = message => console.log(message)
showMessage_2("This is new paragraph")

let tripleValue = a => a * 3
console.log(tripleValue(100))

let arr = [1, 2, 3, 4, 5]
arr.forEach(item => console.log(item))
