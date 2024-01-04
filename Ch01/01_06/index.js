const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);

// const writeFile = promisify(fs.writeFile);
// const unlink = promisify(fs.unlink);

const beep = () => process.stdout.write("\x07");

const delay = seconds =>
  new Promise(resolves => {
    setTimeout(resolves, seconds * 1000);
  });

async function start() {
  var files = await readdir(__dirname);
  console.log(files);
}

start();
beep();
delay();
