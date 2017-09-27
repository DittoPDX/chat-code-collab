import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, Renderer, ViewChild } from '@angular/core';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent
{
	text:string = "12345";
	options:any = {maxLines: 1000, printMargin: false, fontSize: "20px"};

	//Need to send AJAX post request for express server to handle
	onChange(event)
	{
		console.log(event);
	}
	
	toggled: boolean = false;
	toggled2: boolean = false;

	/*
	TO-DO: Try Jasmine TDD for the menu issue/development
	*/
	//Handle user click event for menu
	menuToggle()
	{
		this.toggled = !this.toggled;
		//console.log(this.toggled);
	}

	//Handle user click event for languages
	langToggle()
	{
		this.toggled2 = !this.toggled2;
		//console.log(this.toggled2);
	}
}
