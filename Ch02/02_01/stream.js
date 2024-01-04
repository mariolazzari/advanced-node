// node --trace_gc stream.js
const fs = require("fs");
const http = require("http");
const file = "../../powder-day.mp4";

http
  .createServer((_req, res) => {
    res.writeHead(200, { "Content-Type": "video/mp4" });
    fs.createReadStream(file).pipe(res).on("error", console.error);
  })
  .listen(3000, () => console.log("stream - http://localhost:3000"));
