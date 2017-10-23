'use strict';

const app = require('../server.js');
const expect = require('chai').expect;
const request = require('request');

describe('Testing Simultaneous Coding App Backend', () =>
{
	it('Main Page Content Should Return 200 Status & Not Equal Null', (done) =>
	{
		request('http://localhost:8080', function(error, response, body) 
		{
			expect(200, response.statusCode);
			expect(response).to.not.have.property(null);

			//End the asynchronous request
			done();
		});
	});

		
});
