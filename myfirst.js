var http = require("http");
var date = require("./dateTime")
var url = require("url");

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-type":"text/html"});
  res.write("The date and time are " + date.dateTime());
  res.write("<br>" + req.url);
  var q = url.parse(req.url, true).query;
  var text = q.year + " " + q.month;
  if ((q.year === undefined) && (q.month === undefined)) {

  } else if (q.month === undefined) {
    res.write("<br>" + q.year);
  } else if (q.year === undefined) {
    res.write("<br>" + q.month)
  } else {
    res.write("<br>" + text);
  }
  res.end("<br> Hello world!");
}).listen(8080);
