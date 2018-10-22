// DEPENDENCIES
var express = require("express");
var path = require("path");


// ROUTING
module.exports = function(app) {
  


//Express to look in Public for all static assets
  app.use(express.static("app/public"));
 //HTML GET Requests
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Default home route
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};