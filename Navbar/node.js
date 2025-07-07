const http = require("http");
const fs = require("fs");

let html = fs.readFileSync("./index.html");
let css = fs.readFileSync("./index.css");
let js = fs.readFileSync("./index.js");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    } else if (req.url === "/index.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(css);
      res.end();
    } else if (req.url === "/index.js") {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(js);
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
      res.end();
    }
  })
  .listen(5000, () => {
    console.log("Server is listening at port 5000");
  });
