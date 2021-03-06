# chat-code-collab
Fall Term 2017 Web Development Project

## How to Install
Execute the below command to get the node_modules files.
<blockquote>
npm install
</blockquote>
 
## How To Run
Execute the below command to build for production and run the server.
<blockquote>
ng install --aot -prod && node server.js
</blockquote>

## How To Test Backend Code
Simply execute <blockquote>./node_modules/mocha/bin/mocha</blockquote> to test the backend part of this project.

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
* Add hackerrank compiler API (supports languages such as C++, Java, etc...)

## Technologies Used
* Angular-2
* Node.js
* Socket.io
* Express.js
* Firebase
* Hackerrank API

## Learning Process (Documentation + Setting Up)
* Save 3 hours of time and get started right away with how to deploy a full-stack web application
  * [Deploying Angular-CLI/Node.JS Heroku](https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352)
* Compatible ACE-Editor with documentation for Angular 2+
  * [ng2-ace-editor](https://github.com/fxmontigny/ng2-ace-editor)
* Bulma instead of Bootstrap for user interface
  * [Bulma](http://bulma.io/documentation/)
* Firebase Documentation
  * [Firebase Docs](https://firebase.google.com/docs/reference/)
