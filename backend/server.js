const http = require("node:http");

const host = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello, World!\n");
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

// const http = require('http');
