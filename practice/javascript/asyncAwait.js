/***** 
 HOMEWORK(12/4/19): 
figure out how to get something out of the asynchronous function to global scope / normal synchronous code.
 *****/

// async function firstAsync() {
//   return 27;
// }

// console.log(firstAsync());

// firstAsync().then(results => {
//   console.log(results);
// });

let updateThis = 0;

async function firstAsync() {
  let action = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value to send to the Promise so it completes.");
    }, 3000);
  });

  console.log(updateThis);
  updateThis = 1;
  console.log(updateThis);
  let result = await action;

  updateThis = result;
  console.log(updateThis);

  console.log(result);

  return updateThis;
}

let something = firstAsync();

console.log(something);

console.log("I will run after the first async function.");
