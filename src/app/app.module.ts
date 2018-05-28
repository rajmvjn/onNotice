import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSnackBarModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from "./web.service";
import { NewMessageComponent } from "./new-message.component"

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCardModule,MatSnackBarModule, MatInputModule, MatToolbarModule, HttpClientModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
