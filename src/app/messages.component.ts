import { Component } from '@angular/core';
import { WebService } from "./web.service";

@Component({
  selector:'messages',
  template: `    
    
    <div *ngFor="let message of messages">
      <mat-card class="card">
        <mat-card-title> {{message.owner}} </mat-card-title>
        <mat-card-content> {{message.text}} </mat-card-content> 
      </mat-card>  
    </div> 
            
  `
})

export class MessagesComponent{

  constructor(private webSerice: WebService){}

  async ngOnInit(){
    var response = await this.webSerice.getMessages();
    console.log(response);
  }

  messages = [{text:'some text', owner:'Tim'}, {text:'other text', owner:'Raj'}]
}
