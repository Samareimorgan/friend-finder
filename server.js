//Create Dependencies 
var express = require("express");

//Create App instance of express

var app = express(); 

//Create Port 

var PORT = process.env.PORT || 8080;

//Sets express up to Parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Create App Routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);



//Create Port listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
