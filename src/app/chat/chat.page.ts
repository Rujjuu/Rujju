import { Component, OnInit, ViewChild, Output, EventEmitter, NgZone } from '@angular/core';
import { IonContent, IonTextarea, Platform } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { ApiAiClient } from "api-ai-javascript/es6/ApiAiClient";
import { DatePipe } from '@angular/common';

// https://github.com/dialogflow/dialogflow-javascript-client
// https://dialogflow.cloud.google.com/
// https://chatbotslife.com/dialogflow-restaurant-bot-tutorial-1-45ce1d3c0ab5
@Component({
	selector: 'app-chat',
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss'],
	providers: [DatePipe]
})
export class ChatPage implements OnInit {
	messages: any =[];
	typingMessage: string = '';
	dialogeFlowInstance: any;

	@Output() onSubmit = new EventEmitter();
	@Output() onSizeChange = new EventEmitter();
	@ViewChild('messageInput') messageInput: IonTextarea;
	@ViewChild(IonContent, { static: true }) content: IonContent;

	constructor(public platform: Platform, public ngZone: NgZone, public datepipe: DatePipe) {
				
		platform.ready().then(() => {

			this.dialogeFlowInstance = new ApiAiClient({ accessToken: 'e1c23b3432fb47199d5df51eaa5ba831' });

		});
	}

	sendText(message) {

		this.messages.push({
			avatar: 'assets/imgs/docto.png',
			isSender: true,
			type:  'text',// or 'image'
			body: message,
			timestamp: this.datepipe.transform(new Date(), 'MMM dd, yyyy h:MM:ss a')
		});

		this.dialogeFlowInstance.textRequest(message)
			.then((response) => {
				console.log('response :', response);
				// this.answer = response.result.fulfillment.speech;
				
				this.messages.push({
					avatar: 'assets/imgs/docto.png',
					isSender: false,
					type:  'text',// or 'image'
					body: response.result.fulfillment.speech,
					timestamp: this.datepipe.transform(new Date(), 'MMM dd, yyyy h:MM:ss a')
				});
				setTimeout(() => {
					this.scrollToBottom(1000, false);
				},500);
				
			})
			.catch((error) => {
				console.log('response error :', error);

			})

		this.typingMessage = '';
		this.messageInput.setFocus();

	}

	ngOnInit() {
		this.scrollToBottom(null, true);
	}


	scrollToBottom(duration = 500, isFirstLoad = false) {
		// this.content.resize();
		if (isFirstLoad) {
			setTimeout(() => {
				this.content.scrollToBottom(duration);
			}, 500);
		} else {
			this.content.scrollToBottom(duration);
		}
	}

	onInputSizeChange() {
		setTimeout(() => {
			this.scrollToBottom();
		}, 0);
	}

	
}
