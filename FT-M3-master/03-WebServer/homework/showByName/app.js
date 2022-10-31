var fs = require("fs");
var http = require("http");

// Escribí acá tu servidor

http
  .createServer((req, res) => {
    if (req.url === "arcoiris_doge") {
      fs.readFile(`${__dirname}/images/${req.url}.jgp`, (err, data) => {
        if (err) {
          res.writeHead(404, { "Context-type": "text/plain" });
          res.end("Hubo un error");
        } else {
          res.writeHead(200, { "Content-type": "image/jpg" });
          res.end(data);
        }
      });
    }
  })
  .listen(3000, "127.0.0.1");
