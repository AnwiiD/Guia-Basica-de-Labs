var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World! este es un server que escucha por el puerto 8080: ok'+ Date()); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 
