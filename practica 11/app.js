var express = require("express");
var app = express();

var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send("<html><head><body><h1>Hello world!</h1></body></head></html>");
});

app.listen(port); 

app.get("/api", function (req, res) {
  res.json({
    firstName: "Sebastián",
    lastName: "Frausto",
  });
});

var html = {
  first: "<html><head></head><body><h1>Person: ",
  second: "</h1></body></html>",
};
app.get("/person/:id", function (req, res) {
  res.send(html.first + req.params.id + html.second);
});
