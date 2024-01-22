var http = require('http');  

// import http module using require module

http.createServer(function (req, res)

// create server is used to create  server ports to communicate with clientInformation
{
  res.writeHead(200, {'Content-Type': 'text/html'}); //write respone to clinet
  res.end('Hello World!');  // end the respnse
}).listen(8080);     //server listens at post 8080

// res.writeHead(200, {'Content-Type': 'text/html'}); //write respone to clinet
// 200  -> allok  next are resopnce headers 