var express = require("express");
var app = express();

app.use(express.static('public'));


//listen to port 3000 by default
app.listen(process.env.PORT || 3001, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;
