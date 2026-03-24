function testingPromise() {
  return new Promise((resolve, reject) => {
    let result = Math.random() > 0.5
    if (result === true) {
      resolve("Promise is reolved!");
    } else {
      reject("Promise is rejected");
    }
  });
}
testingPromise()
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  });

  /*
  Stages of Promise:
  1) Pending
  2) fullfilled/Resolve
  3) rejected
  */