const { createReadStream } = require("fs");

const readStream = createReadStream("../../powder-day.mp4");

readStream.on("data", chunk => {
  console.log("size: ", chunk.length);
});

readStream.on("end", () => {
  console.log("read stream finished");
});

readStream.on("error", error => {
  console.log("an error has occured.");
  console.error(error);
});

readStream.pause();
process.stdin.on("data", chunk => {
  if (chunk.toString().trim() === "finish") {
    readStream.resume();
  }
  readStream.read();
});
