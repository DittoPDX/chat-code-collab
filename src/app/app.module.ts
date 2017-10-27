import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menubar/menu-bar.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

//const config: SocketIoConfig = { url: 'https://chat-code-collab.herokuapp.com', options: {} };

const config: SocketIoConfig = { url: 'http://localhost:8080/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule,
    HttpClientModule,
    HttpModule,
	  SocketIoModule.forRoot(config),
	  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
