// Step 1.

console.log("Hello world!");

function successCB(res) {
  console.log("in successCB: ", res);
}

function failCB(res) {
  console.log("Something bad happened! Here's the message from the promise: ");
  console.error(res);
}

const catsData = new Promise((resolve, reject) => {
  console.log("in catsData promise");

  // toggle this between true/false to get successes or failures
  let requestSuccess = false;

  setTimeout(() => {
    if (requestSuccess) {
      resolve({ catNames: ["Noki", "Teddy", "Nugget"] });
    } else {
      reject("OH NOOO so sorry.");
    }
  }, 4000);
});

// remove the failCB from the line below, and trigger the "reject" to get an "uncaught" error. This happens when a failed promise is not "handled".
catsData.then(successCB, failCB);

// alternative to the "catsData.then" line
// catsData.then(
//   (res) => {
//     console.log("in successCB: ", res);
//   },
//   (res) => {
//     console.log(
//       "EW GROSS Something bad happened! Here's the message from the promise: "
//     );
//     console.error(res);
//   }
// );

console.log("goodbye world");
