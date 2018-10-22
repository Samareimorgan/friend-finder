//Link Data Sources to utilize locally
var castArray= require("../data/cast.js");
var newFanArray= require("../data/newFan.js");

//********Routing Information ***********/

module.exports = function(app){
    //Get Route.  This gets the data from the castArray and displays all of it
    app.get("/api/cast", function(req, res) {
        res.json(castArray);
      });

    app.get("/api/newfan", function(req, res) {
        res.json(newFanArray);
    });


//Post Route
    app.post("/api/newFan", function(req,res) {

        var match = {
            name: "",
            favColor: "",
            quote: "",
            image: "",
            matchDifference: 1000
        }
        console.log(req.body);

        //Parse the new fan data
        var newFanData = req.body;
        var fanAnswers = newFanData.answers;

        console.log(fanAnswers);

        var scoreDiff= 0;
        //Create a nested for loop to run through each cast member and the answers of each member
        for (var i = 0; i < castArray.length; i++) {

            scoreDiff = 0;

            for (var j = 0; j < castArray[i].answers.length; j++) {

                scoreDiff += Math.abs(parseInt(fanAnswers[j]) - parseInt(castArray[i].answers[j]));
            }

            console.log("Cast name: " + castArray[i].name, "Total Score: ", scoreDiff);

            if (scoreDiff <= match.matchDifference) {
                match.name = castArray[i].name;
                match.favColor = castArray[i].favColor;
                match.quote = castArray[i].quote;
                match.image = castArray[i].image;
                match.matchDifference = scoreDiff;

                console.log("You're new match is: " + match.name + "\n");
            } else {
                console.log(castArray[i].name + " is not a good match \n");
            }
        }
    
        newFanArray.push(newFanData);
        
        res.json(match);
      
    })
 
};
