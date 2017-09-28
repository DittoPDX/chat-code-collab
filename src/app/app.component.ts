import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, Renderer, ViewChild } from '@angular/core';
import 'brace/mode/html';
import 'brace/mode/javascript';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent
{
	text:string = "";
	options:any = {maxLines: 1000, printMargin: false, fontSize: '20px', mode: 'javascript'};

	//Need to send AJAX post request for express server to handle
	onChange(event)
	{
		console.log(event);
	}

	toggled: boolean = false;
	tabNum: number = 0;

	//Handle user click event for menu
	menuToggle()
	{
		this.toggled = !this.toggled;
		//console.log(this.toggled);
	}

	//Handle active tab
	setTab(num)
	{
		this.tabNum = num;
	}
}
