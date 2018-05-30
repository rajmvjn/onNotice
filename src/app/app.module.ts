import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSnackBarModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from "./web.service";
import { NewMessageComponent } from "./new-message.component";
import { NavComponent } from "./nav.component";
import {HomeComponent} from "./home.component";

var routes = [{
  path:"",
  component: HomeComponent
},
  {
    path:"messages",
    component: MessagesComponent
  },
  {
    path:"messages/:name",
    component: MessagesComponent
  }];

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCardModule,MatSnackBarModule, MatInputModule, MatToolbarModule, HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
