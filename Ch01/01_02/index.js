const delay = seconds =>
  new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("the long delay has ended");
    }, seconds);
  });

delay(1)
  .then(console.log)
  .then(() => 42)
  .then(number => console.log(`Hello world: ${number}`));

console.log("end first tick");

// catch demo
const error = msg =>
  new Promise((_res, rej) => {
    setTimeout(() => rej(msg), 1000);
  });

error("error demo").catch(err => console.log(err));
