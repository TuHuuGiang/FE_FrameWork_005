// Error Handing

'use strict';

console.clear();

const getByIndex = (a, index) => {
  try {
    if (index < 0 || index > a.length - 1) {
        throw new Error("Index of out range")
    }
    return a[index]
  } catch(e) {
    console.log(e.message)
    return "Lỗi: Index k tồn tại trong mảng"
  }
}

let a = [1, 2, 3, 4, 5]
console.log(a)
console.log(getByIndex(a, 1))
console.log(getByIndex(a, -2))