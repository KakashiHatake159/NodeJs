var http=require('http');

var mod=require('C:\\euu\\module_in_nodejs\\module.js');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and timeare currently: "+ mod.datetimenow());
    res.end();
}).listen(8000);