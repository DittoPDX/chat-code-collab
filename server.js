const firebase = require("firebase");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
Angular apps employ PathLocationStrategyby default
-> no hashes in URL.
*/
const path = require('path');

//Run app by serving static files in 'dist' directory
app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.urlencoded({extended: true}));  
app.use(bodyParser.json());

/*
For all GET requests, send back index.html
so that PathLocationStrategy can be used
*/
app.get('/*', function(req, res)
{
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//Testing FireBase 
// Initialize Firebase
var config = 
{
  apiKey: "AIzaSyDG_Vhxg8fX4m5c_gmBZmNYOSVHRsTOKgY",
  authDomain: "chat-code-collab.firebaseapp.com",
  databaseURL: "https://chat-code-collab.firebaseio.com",
  storageBucket: "",
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database().ref();

// Attach an asynchronous callback to read the data at our posts reference
database.on("value", function(snapshot) 
{
  console.log(snapshot.val());
}, function (errorObject) 
{
  console.log("The read failed: " + errorObject.code);
});

//Start app by listening to default heroku port
app.listen(process.env.PORT || 8080);

app.post('/', function (req, res)
{
	console.log(req.body);
});
