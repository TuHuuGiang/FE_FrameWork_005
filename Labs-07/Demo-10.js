// Promise

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

return_money()
  .then((value) => {
    console.log(value);
  })

  .catch((error) => {
    console.error(error);
  })

  .finally(() => {
    console.log("DONE");
  });
