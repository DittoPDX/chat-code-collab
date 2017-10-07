import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, Renderer, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'brace/mode/html';
import 'brace/mode/c_cpp';
import 'brace/mode/javascript';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent
{
	text:string = "";

	options:any = {maxLines: 1000, printMargin: false, fontSize: '20px'};

	//Need to send AJAX post request for express server to handle
	onChange(event)
	{
		console.log(event);
    this.callServer(event);
	}

  editorData = { text : ''};
  
    constructor(private http: Http) { }

  callServer(event) {
    this.editorData.text = event;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin','*');
    this.http.post('http://localhost:8080/', JSON.stringify(this.editorData), { headers: headers}).subscribe();
  }
}