//Create Dependencies 
var express = require("express");

//Create App instance of express

var app = express(); 

//Create Port 

var PORT = process.env.PORT || 8080;

//Create App Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Express to look in Public for all static assets
app.use(express.static("/public"));


//Create Port listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
