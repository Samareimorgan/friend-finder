// DEPENDENCIES

var path = require("path");


// ROUTING
module.exports = function(app) {

 //HTML GET Requests

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Default home route
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};