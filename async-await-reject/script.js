console.log("1. Hello world!");

const fetchCats = () => {
  console.log("3. inside fetchCats");

  return new Promise((resolve, reject) => {
    console.log("4. in catsData promise");

    let requestSuccess = false;

    setTimeout(() => {
      console.log("8. in setTimeout");
      if (requestSuccess) {
        resolve({ catNames: ["Noki", "Teddy", "Nugget"] });
      } else {
        reject("OH NOOO so sorry");
      }
    }, 4000);
    console.log("5. after setTimeout");
  });
};

const awaitFetchCats = async () => {
  console.log("2. top of awaitFetchCats function");

  try {
    console.log("8.5. attempting something that might throw an exception");
    const results = await fetchCats(); // having the reject() run in the promise is basically us "throw"ing an error.
    console.log("9 success. results in awaitFetchCats: ", results);
    return results;
  } catch (err) {
    console.log("9 fail. results in awaitFetchCats", err);
    let errorObj = new Error(err);
    console.error("errorObj.message: ", errorObj.message); // there's usually a .message property to know what went wrong.
    console.log("error object: ", JSON.stringify(errorObj)); // doesn't work.
    console.log(errorObj); // this is an object, but doesn't give us the properties for some reason.
    return errorObj;
  }
};

const catsFromWeb = awaitFetchCats(); // In this case there would probably be no point in storing the return value into catsFromWeb.
// instead, I'd just call awaitFetchCats() by itself because we can't use catsFromWeb.

console.log("6. catsFromWeb: ", catsFromWeb);

console.log("7. goodbye world");
