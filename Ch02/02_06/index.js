const { createWriteStream, createReadStream } = require("fs");

const readStream = createReadStream("../../powder-day.mp4");
const writeStream = createWriteStream("./file.mp4");

readStream
  .pipe(writeStream)
  .on("error", err => console.log("Error writing stream:", err.message));

process.stdin.pipe(writeStream);

const writeTxt = createWriteStream("file.txt");
process.stdin
  .pipe(writeTxt)
  .on("error", err => console.log("Error writing text:", err.message));
