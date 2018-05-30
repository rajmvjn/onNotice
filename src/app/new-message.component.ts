import { Component } from '@angular/core';
import { WebService } from "./web.service";

@Component({
  selector:'new-message',
  template: ` 
            <mat-card class="card">
              <mat-card-content>
                <mat-input-cotainer>
                  <input [(ngModal)] = "message.owner" matInput placeholder="Name">                  
                </mat-input-cotainer>
                <mat-input-cotainer>
                  <textarea [(ngModal)] = "message.text" matInput placeholder="Message"></textarea>
                </mat-input-cotainer>
                <mat-card-actions>
                  <button mat-button (click)="post()" color="primary">POST</button>
                </mat-card-actions>
              </mat-card-content>              
            </mat-card>
  `
})

export class NewMessageComponent{

  constructor(private webSerice: WebService){}

  message = {
    owner:"",
    text:""
  }

  post(){
    console.log(this.message)
  }


}
