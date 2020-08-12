import { Component, OnInit, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';

// import {ApiAiClient} from "api-ai-javascript";
import { ApiAiClient } from "api-ai-javascript/es6/ApiAiClient";
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  answer : any;
  client : any;
  question:any;
  constructor(
    public platform: Platform, public ngZone: NgZone

  ) { 

    platform.ready().then(() => {
      
      this.client = new ApiAiClient({accessToken: 'e1c23b3432fb47199d5df51eaa5ba831'});
   
    });

  }

  sendMessaage(){ 

    this.client.textRequest(this.question)
            .then((response) => {
              console.log('response :',response);
              this.answer = response.result.fulfillment.speech;
              /* do something */})
            .catch((error) => {
              console.log('response error :',error);
              
              /* do something here too */})

  }

  

  ngOnInit() {
  }

}
