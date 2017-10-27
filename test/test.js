'use strict';

const app = require('../server.js');
const { URL } = require('url');
const myUrl = new URL('https://chat-code-collab.herokuapp.com/testroom');
const expect = require('chai').expect;
const request = require('request');
const io = require('socket.io-client');

const options =
{
	transports: ['websocket'],
	'force new connection': true
};

describe('Testing Simultaneous Coding App Backend', () =>
{
	it('Main Page content should return 200 status & not equal null', (done) =>
	{
		request('http://localhost:8080', function(error, response, body) 
		{
			expect(200, response.statusCode);
			expect(response).to.not.have.property(null);

			//End the asynchronous request
			done();
		});
	});

	/*
	describe('Testing Path Name for Code Room Setup', () =>
	{
		it('Pathname Should Return Value', () =>
		{
			expect(myUrl.pathname !== null);
		});	
	});
	*/
});

describe('Testing Socket.io Component of App Backend', () =>
{
	it('Should connect user with unique socket id', (done) =>
	{
		let client = io.connect('http://localhost:8080', options);
		
		client.on("connect", () =>
		{
			expect(client.id).to.not.equal(null);
			//console.log("    " + client.id);
			client.disconnect();
			done();
		});
	});
});
