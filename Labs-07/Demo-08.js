// Define JSON Object

"use strict";

console.clear();

let a = 3;
let obj_a = { a };

console.log(obj_a);

let obj = {
  index: 1,
  value: 5,

  // Method
  doubleValue() {
    return this.value * 2;
  },
};

console.log(obj, obj.doubleValue());

let obj_b = {
  id: 1,
  clientName: "Mr Petter",
  recipe: [
    {
      recipeID: 1,
      value: 200,
    },
    {
      recipeID: 2,
      value: 300,
      voucher: true
    },
  ],
};

console.log(obj_b)
console.log(obj_b.recipe)
console.log(obj_b.recipe[1])

let str = JSON.stringify(obj_b);
console.log(str)


let obj_c = JSON.parse(str)
console.log(obj_c)