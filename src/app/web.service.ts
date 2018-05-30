import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';


@Injectable()

export class WebService{

  BASE_URL = "http://localhost:63145/api";
  messages = [];
  constructor(private http:HttpClient){
    this.getMessages();
  }

  getMessages(user){
    user = user ? '/'+ user :'';
    this.http.get(BASE_URL + '/messages'+user).subscribe(
      response=>{
        this.messages = response.json();
      },
      error=>{
        this.handleError("Unable to get messages");
      }
    );
  }

  async postMessage(message){
    try{
      var response = this.http.post(BASE_URL + '/messages', message ).toPromise();
      this.messageStore.push(response.json());
      this.messageSubject.next(this.messageStore);
    }catch (err){
      this.handleError("Unable to get messages");
    }
  }

  private handleError(error){

  }

}

