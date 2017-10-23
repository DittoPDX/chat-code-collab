# chat-code-collab
Fall Term 2017 Web Development Project

## How To Run
Simply execute the below command to build for production and run the server.
<blockquote>
ng install --aot -prod && node server.js
</blockquote>

## How To Test Backend Code
Simply execute <blockquote>./node_modules/mocha/bin/mocha</blockquote> to test the backend part of this project

## Description
<blockquote>
A real time web application that provides a code editor and compiler between individuals. Some usage may include practicing online coding interviews and verifying/producing/modifying project code snippets.
</blockquote>
 
Github Markdown Guide : [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

## TO-DO
* ~~Program Model: Firebase -> Socket.io/Express.JS/Node.JS -> Angular2~~
* ~~Connect Node.js to Firebase (api key etc.)~~
* ~~Store/Retrieve/Edit/Delete data from Firebase~~
* Either use MongoDB/Firebase for chat data
* Create chat UI (maybe bottom circle on the bottom for group chat)
* Add hackerrank compiler API

## Technologies Used
* Angular-2
* Node.js
* Socket.io
* Express.js
* Firebase
* Hackerrank API

## Learning Process
* Save 3 hours of your time and get started right away with how to deploy a full-stack web application
  * [Deploying Angular-CLI/Node.JS Heroku](https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352)
* Integrate ACE-Editor into Angular 2+
  * [ng2-ace-editor](https://github.com/fxmontigny/ng2-ace-editor)
* Add in a Bulma instead of Bootstrap for user interface
  * [Bulma](http://bulma.io/documentation/)
* Storing data into firebase
  * [Firebase TUT 1](https://www.codementor.io/johnnyb/fireedit-real-time-editor-javascript-firebase-59lnmf3c6)
* Real-time Editor Logic
  * [Logic](https://www.pluralsight.com/guides/node-js/building-a-realtime-collaborative-editor-with-rethinkdb)
