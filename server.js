var express = require("express");
var app = express();
var path = require("path");
var PORT = 3000;

app.get("/", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "index.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } 
  });
});

app.listen(PORT, function () {
  console.log("Server listening on PORT", PORT);
});

app.get("/user", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "user.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    }
  });
});
app.get("/cats", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "cats.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } 
  });
});
