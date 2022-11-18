console.log(
  "1. Hello world, PS. I forgot to push the code from the video and these were my notes, so there may be some differences and the comments may not be perfectly accurate. Sorry about that!"
);

const fetchCats = () => {
  // 4. console.log("inside fetchCats")
  console.log("3. inside fetchCats");
  return new Promise((resolve, reject) => {
    // 5. No async code yet.console.log "first log in promise"
    console.log("4. In fetchCats promise");

    let requestSuccess = true;

    setTimeout(() => {
      // 10. The timer is done! This function has been added to the "queue" to run when the callstack is empty.
      // 11. console.log("inside the setTimeout")
      console.log("8. inside the setTimeout");
      if (requestSuccess) {
        resolve({ catNames: ["Noki", "Teddy", "Nugget"] });
      } else {
        reject("OH NOOO so sorry");
      }
      // 12. resolve the promise to complete it. Send the object below as a response.
      // 12 notes: Because the promise completed, we put it in the queue to run when there's nothing else for Javascript to do.
      // 13. console.log("end of setTimeout")
      console.log("9. end of setTimeout");
    }, 4000);
    //6. run the console.log("after setTimeout") because the settimeout stuff can't run until the 300ms timer is done AND we've reached the end of the event loop. (because the code inside the timeout gets scheduled to run AFTER everything else is done.)
    console.log("5. after setTimeout");
  });
};

const awaitFetchCats = async () => {
  // 2. console.log the below message.
  console.log("2. top of awaitFetchCats function");
  // 3. call fetchCats()
  const results = await fetchCats();

  // 14. We've reached the end of the callstack again. there is nothing left for Javascript to do. Javascript now checks the "queue" and sees the completed promise. Finally we can move past the "await" fetchCats, and run the code below it.
  // 14. console.log("results: ") with the results object. {catNames: ["Noki", "Teddy", "Nugget"]}
  console.log("10. results in awaitFetchCats: ", results);
  // return the results.
  return results;
};

// 1. call awaitFetchCats
const catsFromWeb = awaitFetchCats(); // returns a promise to dataFromFetch which is pending, so this doesn't really work like we want it to.

// 7. Log dataFromFetch, even though the promise is not completed yet.
console.log("6. catsFromWeb: ", catsFromWeb);

// 8. console.log
console.log("7. Goodbye world!");
// 9. We're at the end of the javascript file and there's nothing left to do. repeatedly checking the queue for something to do.
