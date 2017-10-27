import { AceEditorModule } from 'ng2-ace-editor';
import { UpdaterService } from './updater.service';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, Renderer, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ace from 'brace';
//import 'brace/mode/html';
//import 'brace/mode/c_cpp';
//import 'brace/mode/javascript';

@Component
({
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [UpdaterService]
})

export class AppComponent
{
	// ViewChild lets us access the DOM elements with # indicators
	@ViewChild('editor') editor;

	// Class variables (refer to them with this.var)
	text:string = "";
	applyingDeltas: boolean = false;
	options:any = {maxLines: 1000, printMargin: false, fontSize: '20px'};	

	// Dependency injection, so that the AppComponent can use updaterService as a part itself
	constructor(private updaterService : UpdaterService) {}

	// Get the data once the page loads
	ngOnInit()
	{
		// Create an observable to track the initial firebase data received
		this.updaterService.initialLoad().subscribe( (msg) =>
		{
			this.text = msg;		
		});
	}

	// Once the editor initalizes
	ngAfterViewInit()
	{
		// Get the current session of the editor
		var doc = this.editor.getEditor().session.getDocument();

		// Create an observable to the editor changes by other users
		this.updaterService.getMessage().subscribe( (update) =>
			{
				// Data received is not from same user
				this.applyingDeltas = true;

				// Write karma tests for these
				//console.log("event: " + update.toUpdate.event);
				//console.log("text to append: " + update.currText);

				// Make sure the editor doesn't duplicate itself on page refresh/load 
				if (update.currText !== this.editor.getEditor().getValue())
				{
					// Apply the insertions/deletions dynamically
					doc.applyDeltas([update.toUpdate.event]);
				}

				//Ensure that the deltas applied are always by a different user
				this.applyingDeltas = false;
			});

		// Arrow function forces callback on the same this object to prevent error
		this.editor.getEditor().session.on("change", (e) =>
		{
			// Only apply changes when the user is receiving data from other users
			if (this.applyingDeltas) return;

			// Use the service to send data to the backend socket
			this.updaterService.sendMessage(e, this.editor.getEditor().getValue());
		});
	}
}
