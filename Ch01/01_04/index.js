const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "This is a sample")
  .then(() => console.log("file successfully created"))
  .catch(_ex => console.log("error creating file"));
