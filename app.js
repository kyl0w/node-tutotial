const http = require('http');

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.end("Home page");
  } else if (req.url === '/about') {
    res.end("Some text content");
  } else {
    res.statusCode = 404;
    res.end("404 - Not Found");
  }
});

server.listen(7001);