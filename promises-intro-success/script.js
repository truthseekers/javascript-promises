// 1. log hello world
console.log("hello world");

// 2. Define function successCB
function successCB(res) {
  // 23 log "success?"
  console.log("success?");
  // 24. print the catNames from the response object that was passed to the success callback.
  console.log("res: ", res.catNames);
}

// Think I may have deleted 3 on accident.
// 4. make a promise to do some stuff. store this promise in catsData.
const catsData = new Promise((resolve, reject) => {
  // 5. start working on this promise. console.log in catsData promise
  console.log("in catsData promise");
  // 6. Oh.. Wait 4 seconds and then do this thing in the timeout. Because this is in a promise, we'll come back later.
  setTimeout(() => {
    // 20. The 4 second timer has finished. Log "in catsData settimeout"
    console.log("in catsData settimeout");
    // 21. this promise was a success! Send back the object with the catNames
    resolve({ catNames: ["Noki", "Teddy", "Nugget"] });
  }, 4000);
});

// 10. a promise's "then" only gets run AFTER the promise has either been resolved or rejected. We're still waiting to finish the 4 second wait.
// so lets move on.
// 22. After this promise completes, run successCB if it succeeded, and failCB if the promise failed. This time we run successCB.
catsData.then(successCB, function (err) {
  console.log("there was an error. ", err);
});

// 12. Log "Goodbye world!"
console.log("Goodbye world!");
// 13. There's nothing to do! (Let's see if there's any new tasks..." after 2 seconds completes)
// 19. Nothing to do again! ... after the 4 seconds completes
