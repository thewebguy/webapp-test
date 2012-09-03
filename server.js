var http = require('http');
var path = require('path');
var fs = require('fs');
var express = require('express');

var argv = process.argv.slice(2);
var types = {
  'appcache': 'text/cache-manifest',
  'css': 'text/css',
  'gif': 'image/gif',
  'html': 'text/html',
  'ico': 'image/vnd.microsoft.icon',
  'jpeg': 'image/jpeg',
  'js': 'text/javascript',
  'json': 'application/json',
  'png': 'image/png'
};



var app = express();

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  
  //app.use(passport.initialize());
  //app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);

/*
http.createServer(function(req, res){
	console.log(req.url);
	
	var filePath = '.' + req.url;
	if (filePath == './') filePath += 'index.html';

	var noappcache = argv.indexOf('-noappcache') > -1;
	path.exists(filePath, function(exists){
		if (exists){
			if (noappcache && /\.appcache$/.test(filePath)){
				res.writeHead(404);
				res.end();
			}
			fs.stat(filePath, function(err, stats){
				var isDir = false;
				if (err){
					response.writeHead(500);
					res.end();
				} else if (stats.isFile() || (isDir = stats.isDirectory())){
					if (isDir) filePath = filePath.replace(/(.)\/?$/i, '$1/index.html');
					fs.readFile(filePath, function(e, content){
						if (e){
							response.writeHead(500);
							res.end();
						} else {
							var ext = path.extname(filePath).slice(1);
							res.writeHead(200, {'Content-Type': types[ext] || 'application/octet-stream'});
							res.end(content, 'utf-8');
						}
					});
				} else {
					res.writeHead(404);
					res.end();
				}
			});
		} else {
			res.writeHead(404);
			res.end();
		}
	});
}).listen(800);
*/