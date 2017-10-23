/* Created by: Steven Tran
 * Desc: Real time web app that enables coding, compiling, and chatting with multiple users
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const firebase = require('./database/database.js');
const db = require('firebase');

// Angular apps employ PathLocationStrategy by default, so no hashes in URL
const path = require('path');

// Run app by serving static files in 'dist' directory
app.use(express.static(__dirname + '/dist'));

// In case the project needs to handle POST request since Express 4+
app.use(bodyParser.urlencoded({extended: true}));  
app.use(bodyParser.json());

// For all GET requests, send back index.html, so that PathLocationStrategy can be used
app.get('/*', function(req, res)
{
	// The /dist/ gets generated after ng build for production
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const fb = require("firebase");

var config = 
{
	apiKey: "AIzaSyDG_Vhxg8fX4m5c_gmBZmNYOSVHRsTOKgY",
	authDomain: "chat-code-collab.firebaseapp.com",
	databaseURL: "https://chat-code-collab.firebaseio.com",
	storageBucket: "",
};

// Initialize Firebase
fb.initializeApp(config);

var database = fb.database().ref("editor_values");
var editorID = "_";
var currentTimeStamp = Date.now();
var currentEditorValue = database.child(editorID);
var queueRef = currentEditorValue.child("queue");

// If database content is null, fill it with pre-filled data
currentEditorValue.child("content").once("value", function (contentRef)
{
	if (contentRef.val() === null)
	{
		// Default settings/values for the editor
		currentEditorValue.set
		({
			lang: "c++",
			queue: {},
			content: "/* Start Here! */"
		});
	}
});

// Start listening on Heroku's server or localhost
var server = app.listen(process.env.PORT || 8080);
var io = require('socket.io')(server);

// When somebody enters the web app
io.on('connection', function(socket)
{
	// Generate a unique id for every user that enters the web app
	uid = socket.id;

	// Ensure that the data is loaded once from firebase
	currentEditorValue.child("content").once("value", function(contentRef)
	{
		//console.log(contentRef.val());

		socket.on("load", (msg) =>
		{
			// Broadcast to every client
			socket.emit('load', contentRef.val());
		});
    	},
    	function(error)
    	{
		console.log(error);
    	});

	// When the current user makes additions to the text
	socket.on('msg', function (msg)
	{
		// Update the entire code section
		currentEditorValue.update
		({
			content: msg.currText
		});

		// Add the data change to the queue, so that the editor can manage the changes later
		queueRef.child(Date.now().toString() + ":" + Math.random().toString().slice(2)).set
		({
			event: msg.data,
			by: socket.id
		}).catch(function(error)
		{
			console.error(error);
		});

		// Update every other client with the latest child queue	
		queueRef.endAt().limitToLast(1).once('child_added', function(snapshot)
		{
			//console.log("Changed made : item added to queue");
			//console.log(snapshot.val());
			var timestamp = snapshot.key.split(":")[0];

			// Do not apply old queue changes
			if (currentTimeStamp > timestamp)
			{
				return;
			}

			var value = snapshot.val();

			// Send back the data to the client, so that the editor can manage the changes
			socket.broadcast.emit("update", {toUpdate: value, currText: msg.currText} );
		});
	});
});
