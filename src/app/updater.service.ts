import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 
import { Socket } from 'ng-socket-io';

@Injectable()
export class UpdaterService
{
	constructor(private socket: Socket) {}

	// Load code from database when user reaches web app
	initialLoad()
	{
		// Get to the backend
		this.socket.emit("load", {placeholder: ''});

		// Observable which allows us to receive data database loads
		return this.socket
			   .fromEvent<any>("load")
			   .map(data => data);
	}

	// Keep track of other users' changes
	getMessage() 
	{
		//console.log("getting update");
		
		return this.socket
		           .fromEvent<any>("update")
		           .map(data => data);
	}

	// Manage current text and the current users' inputs into the editor
	sendMessage(msg, currentText) 
	{
		// Single call to update overall text and queue
		this.socket.emit("msg", { data: msg, currText: currentText });
	}
}
