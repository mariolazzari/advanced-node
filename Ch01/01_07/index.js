const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);

// const writeFile = promisify(fs.writeFile);
// const unlink = promisify(fs.unlink);

// const beep = () => process.stdout.write("\x07");

const delay = seconds =>
  new Promise(resolves => {
    setTimeout(resolves, seconds * 1000);
  });

Promise.all([delay(5), delay(2), delay(3), delay(5)])
  .then(() => readdir(__dirname))
  .then(file => console.log("all ", file));

Promise.race([delay(5), delay(2), delay(3), delay(5)])
  .then(() => readdir(__dirname))
  .then(file => console.log("race", file));
