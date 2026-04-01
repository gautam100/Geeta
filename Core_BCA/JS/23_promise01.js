function MyPromise() {
  return new Promise(function (resolve, reject) {
    let result = true
    if (result === true) {
      resolve("Promise is successful");
    } else {
      reject("Promise is unsuccessful");
    }
  });
}

MyPromise()
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  })
  .finally(function () {
    console.log("The End");
  });
/*
Promise states
1) pending
2) fullfilled
3) rejected
*/
