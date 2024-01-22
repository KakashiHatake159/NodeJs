var http = require('http');  

var url=require('url');
// import http module using require module

http.createServer(function (req, res)

// create server is used to create  server ports to communicate with clientInformation
{
  res.writeHead(200, {'Content-Type': 'text/html'}); //write respone to clinet
//   res.write(req.url);

  var q= url.parse(req.url,true).query;
  var txt=q.year+" "+q.month;

  res.end(txt);  // end the respnse
}).listen(8080);     //server listens at post 8080

// res.writeHead(200, {'Content-Type': 'text/html'}); //write respone to clinet
// 200  -> allok  next are resopnce headers 


// req -> represents request from te client
// stord in object http.IncomingMessage



