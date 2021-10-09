// Async - Await

"use strict";

console.clear();

const return_money = () => {
  console.log("Return Money");
  return new Promise((resolve, reject) => {
    let isHappy = Math.random() >= 0.5;

    setTimeout(() => {
      if (isHappy) {
        return resolve("OK, Return money");
      } else {
        return reject("Don't happt, so don't return");
      }
    }, 500);
  });
};

async function call_return_money() {
    try {
        let money = await return_money()
        console.log("Money is", money)
        console.log("OK");
    } catch(error) {
        console.error(error)
    }
    console.log("DONE");
}

call_return_money()

// return_money()
//   .then((value) => {
//     console.log(value);
//   })

//   .then(() => {
//     console.log("OK");
//   })

//   .catch((error) => {
//     console.error(error);
//   })

//   .finally(() => {
//     console.log("DONE");
//   });
