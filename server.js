var connect = require('connect');
var requestCl = require("request");
var serveStatic = require('serve-static');
var fs = require('fs');
var url = require('url');
var port = Number(process.env.PORT || 9000);
var server = connect()

server.use(serveStatic(__dirname + '/public'));
server.use(function(req, res, next) {
  var style = url.parse(req.url, true).query.style || '';
  var svg = url.parse(req.url, true).query.svg || 0;
  var fileExtension = 'png';
  if (svg == 1) {
  	fileExtension = 'svg';
  }
  if (style.length > 0) {
    if (style == 'flat') style = '-' +style;
	  else style = '';
  }

  var fileStream = fs.createReadStream('public/images/andela-badge' + style + '.' + fileExtension);
  if (fileExtension == 'svg') {
    fileExtension = 'svg+xml';
  }

  res.writeHead(200, {
    'Content-Type': 'image/'+fileExtension,
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  fileStream.pipe(res);
});

server.listen(port);
