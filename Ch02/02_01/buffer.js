// node --trace_gc buffer.js
// https://nodejs.org/en/guides/diagnostics/memory/using-gc-traces
const fs = require("fs");
const http = require("http");
const file = "../../powder-day.mp4";

http
  .createServer((_req, res) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        console.log("hmmmm: ", error);
      }
      res.writeHead(200, { "Content-Type": "video/mp4" });
      res.end(data);
    });
  })
  .listen(3000, () => console.log("buffer - http://localhost:3000"));
