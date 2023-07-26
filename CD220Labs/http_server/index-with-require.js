const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  let dateval = today.getDate();
  let greeting = "It is still not morning"
  if(dateval.getHours()>6 && dateval.getHours()<12){
    greeting = "Good Morning!"
  } else if (dateval.getHours()>=12 && dateval.getHours()<18){
    greeting = "Good Afternoon!"
  } else if (dateval.getHours()>=18 && dateval.getHours()<21){
    greeting = "Good Evening!"   
  } else if (dateval.getHours()>=21 && dateval.getHours()<24){
    greeting = "Good Night!"
  }
  res.end(`Hello,${greeting}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);
