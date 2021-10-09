// Callback Function -> callback hell

'use strict'

console.clear();

// Callback function
let value = 1
const f_1 = () => {
    console.log(value)
    setTimeout(() => {
        value++
        console.log("Inside setimeout()", value)
    }, 10)
    console.log("DONE")
}

f_1()

// Problem -> callback hell
const f_2 = () => {
    console.log("Time 1")
    setTimeout(() => {
        console.log("Time 2")
        setTimeout(() => {
            console.log("Time 3")
            setTimeout(() => {

            }, 500)
        }, 800)
    }, 1000)
}
    
f_2();