import { Component } from '@angular/core';
import { NewMessageComponent } from "./new-message.component";

@Component({
  selector: 'app-root',
  template: `
    <h1> Message Board </h1>  
    <new-message></new-message> 
    <messages></messages>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
