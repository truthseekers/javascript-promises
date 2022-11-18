// step 1. log hello world
console.log("hello world");

// step 2. Define a function named successCB
function successCB(res) {
  console.log("success getting cats?");
  console.log("res: ", res);
}

// step 3. Define a function named failCB
function failCB(res) {
  console.log("Something bad happened! Here's the message from the promise: ");
  console.error(res);
}

// step 4. define a function fetchCats that returns a promise.
const fetchCats = () => {
  // step 6. log "inside fetchCats"
  console.log("inside fetchCats");
  // step 7. return this promise
  return new Promise((resolve, reject) => {
    console.log("in fetchCats promise ");

    let requestSuccess = true;

    setTimeout(() => {
      if (requestSuccess) {
        resolve({ catNames: ["Noki", "Teddy", "Nugget"] });
      } else {
        reject("OH NOOO so sorry.");
      }
      console.log("inside the setTimeout");
    }, 4000);
    console.log("after the setTimeout");
  });
};

// step 5. "run" the function fetchCats and store the return value into "catsFromWeb".
// You could pass parameters into fetchCats now to manipulate how the promise works. For example, hit the endpoint with a parameter to only get male Siamese cats.
const catsFromWeb = fetchCats();

// Promise is not done yet, so continue to next step, and check on the promise again when Javascript has nothing left to do.
// step 7. Javascript has othing left to do. Check on this promise again.
catsFromWeb.then(successCB, failCB);

console.log("I am at the end");
