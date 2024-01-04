const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const beep = () => process.stdout.write("\x07");

const delay = seconds =>
  new Promise(resolves => {
    setTimeout(resolves, seconds * 1000);
  });

const doStuffSequentially = () =>
  Promise.resolve()
    .then(() => console.log("starting"))
    .then(() => delay(1))
    .then(() => "waiting")
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile("file.txt", "Sample File..."))
    .then(beep)
    .then(() => "file.txt created")
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink("file.txt"))
    .then(beep)
    .then(() => "file.txt removed")
    .then(console.log)
    .catch(console.error);

doStuffSequentially()
  .then(() => console.log("again again!!!"))
  .then(() => doStuffSequentially())
  .then(() => console.log("enough already..."));
