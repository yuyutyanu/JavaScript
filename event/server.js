var app = require('http').createServer(handler),
    fs = require('fs');

app.listen(1337);
function handler(req,res){
 switch(req.url) {
  case '/':fs.readFile(__dirname + '/event.html',function(err,data){
    if(err){
      res.writeHead(500);
      return res.end('Error');
    }
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });break;
  case '/event.js':fs.readFile(__dirname + '/event.js',function(err,data){
    if(err){
      res.writeHead(500);
      return res.end('Error');
    }
    res.writeHead(200,{'Content-Type': 'text/js'});
    res.write(data);
    res.end();
  });
  break;
 }
}
