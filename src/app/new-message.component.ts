import { Component } from '@angular/core';
import { WebService } from "./web.service";

@Component({
  selector:'new-message',
  template: ` 
            <mat-card class="card">
              <mat-card-content>
                <mat-input-cotainer>
                  <input matInput placeholder="Name">                  
                </mat-input-cotainer>
                <mat-input-cotainer>
                  <textarea matInput placeholder="Message"></textarea>
                </mat-input-cotainer>
                <mat-card-actions>
                  <button mat-button color="primary">POST</button>
                </mat-card-actions>
              </mat-card-content>              
            </mat-card>
  `
})

export class NewMessageComponent{

  constructor(private webSerice: WebService){}

}
