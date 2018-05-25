import { Component } from '@angular/core';

@Component({
  selector:'messages',
  template: ` <div *ngFor="let message of messages">{{message.text}} By: {{message.owner}}
    
  </div> `
})

export class MessagesComponent{
  messages = [{text:'some text', owner:'Tim'}, {text:'other text', owner:'Raj'}]
}
