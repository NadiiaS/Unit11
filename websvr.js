
var http = require("http");
http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello world, my name is Nadiia Stefanovych');
}).listen(8001);