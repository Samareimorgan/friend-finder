# Rocky Horror Match
## About
This is a full-stack application deployed on Heroku.  You can got to the deployed site located at: https://damp-earth-44535.herokuapp.com/

The purpose of the application is to have the user take the survey, answer the questions and then receive back the character in the Rocky Horror Picture Show that best matches the answers given. 

## Client-Side
### Home Page
![alt text](https://raw.githubusercontent.com/Samareimorgan/friend-finder/master/app/public/assets/images/RH_home.JPG "Rocky Horror Match  Home Page")
The Home page utilizes Bootstrap and a gif to add pizazz. 
### Survey Page
![alt text](https://raw.githubusercontent.com/Samareimorgan/friend-finder/master/app/public/assets/images/RH_partialSurvey.JPG "Rocky Horror Match partial Survey")
The Survey Page also uses Bootstrap to create the form. 

### Modal
![alt text](https://raw.githubusercontent.com/Samareimorgan/friend-finder/master/app/public/assets/images/RH_Modal.JPG "Rocky Horror Best Match Result Modal")
Upon submission of the form, a Modal pops up with the best match results.

### API Links
The API links on the bottom of both the Home and Survey page show the Cast Data and the new Fan data that users submit on the survey page.   It is parsed into JSON like the below example.

![alt text](https://raw.githubusercontent.com/Samareimorgan/friend-finder/master/app/public/assets/images/api_newFan_link.JPG "Rocky Horror API Link")


## Server-Side
### About
With the server - side it was essential to add console.logs in order to ensure the application was running correctly.  
### Command Line Console Logs
![alt text](https://raw.githubusercontent.com/Samareimorgan/friend-finder/master/app/public/assets/images/console%20log%20terminal%201.JPG "Rocky Horror CLI Console Logs")

The console logs indicated the new Fan data and then also showed as the application iterated through the cast members answers.  The total number is the difference between the cast member and the new Fan submitted answers.  The cast member that had the lowest total is the person that pops up on the modal on the client-side. 

## Install Application on Local Machine
#### Dependencies: express & path modules

1. Please ensure node.js is installed 
2. Once you have cloned the github repository, ensure that the package.json is in the folder  
3. if the package.json is in the folder, you can easily install all needed dependencies by typing: 
    npm i
This will install all needed dependencies based on the package.json file

4. If you would like to install each module separately please type:
    npm install express
    npm install path
4. You are ready to open the application in the cli and run the application.  

5.  This will be available on your local server.  

## Credits
Thanks to University of Denver: Trilogy Coding Bootcamp Instructor Terra Taylor and Teaching Assistants Jacq and Evan for their assitance in this project.

Thanks also to those in my class, especially Greg, Matt, Tim, Trevor & Bryan as they provided support in debugging. 

## License
MIT (c) SamareiMorgan