var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == "/fileupload") {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path; //the last argument, the input name, the path
      var newpath = "C:/Users/Owner/Documents/node-test/documents/" + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write("File uploaded and moved!");
        res.end();
      });
    });
  } else {
fs.readFile('testSite.html', function (err, data) {
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(data);
    res.end();
  });
}
}).listen(8080);
