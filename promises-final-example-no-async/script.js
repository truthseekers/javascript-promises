// 1. log hello world
console.log("hello world");

// 2. Define function successCB
function successCB(res) {
  // 23 log "success?"
  console.log("success?");
  // 24. print the catNames from the response object that was passed to the success callback.
  console.log("res: ", res.catNames);
}

// 3. Define function failCB
function failCB(err) {
  // 17. failCB is called (the catsBadData promise returned a rejection.)
  console.log("Failed to complete the promise.");
  // 18. log out the "err" parameter, which is the message returned by the promise via "reject()"
  // err is "Something went wrong with this request. Maybe the internet is bad or theres a bug in the server code."
  console.log(err);
}

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

// 7. store another promise into catsBadData..
const catsBadData = new Promise((resolve, reject) => {
  // 8. start running the promise. console.log the below message.
  console.log("in catsBadData promise");
  // 9. Wait 2 seconds to run the code inside the timeout... We'll come back later!
  setTimeout(() => {
    // 14. This timer is complete so we can do this stuff now. Log "in catsBadData timeout"
    console.log("in catsBadData timeout");
    // 15. This promise failed for whatever reason, so it's sending a rejection message.
    reject(
      "Something went wrong with this request. Maybe the internet is bad or theres a bug in the server code."
    );
  }, 2000);
});

// 10. a promise's "then" only gets run AFTER the promise has either been resolved or rejected. We're still waiting to finish the 4 second wait.
// so lets move on.
// 22. After this promise completes, run successCB if it succeeded, and failCB if the promise failed. This time we run successCB.
catsData.then(successCB, failCB);
// 11. again, a promise's "then" is only run after the promise has been resolved or rejected. catsBadData proimse has a 2 second wait, which isn't finished yet, so let's keep going...
// 16**. catsBadData received a "rejection", so the failCB is called.
catsBadData.then(successCB, failCB);

// 12. Log "Goodbye world!"
console.log("Goodbye world!");
// 13. There's nothing to do! (Let's see if there's any new tasks..." after 2 seconds completes)
// 19. Nothing to do again! ... after the 4 seconds completes
