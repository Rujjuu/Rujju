import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController, Platform } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../services/common.service";
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device/ngx'; 
import { EventsService } from '../services/events.service';

@Component({
    selector: 'forms-validations-page',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss','../forms/validations/styles/forms-validations.page.scss'],
})
export class LoginPage implements OnInit {
    
    loginForm: FormGroup;
    subscription: any;
    email: string;
    password: string;
    isProcess: boolean = false;
    loading: any;
    
    validations = {
		'email': [
			{ type: 'required', message: "Email is required." },
		],
		'password': [
			{ type: 'required', message: "Password is required." },
		],
    }
    
    constructor(
        public navCtrl: NavController,
        public plarform: Platform,
        public service: CommonService,
        public loadingController: LoadingController,
        public toastController: ToastController,
        private nativehttp: HTTP,
        private storage: Storage,
        private device: Device,
        private EventsService: EventsService,

    ) {
        console.log('device',this.device);

     }

    ionViewWillEnter() {
        this.storage.get('token').then((val) => {
            console.log('Your token in login is', val)
            // if(val){
            //     this.navCtrl.navigateRoot('home');
            // }
        });
        
    }
    ngOnInit() {
        this.loginForm = new FormGroup({
			'email': new FormControl('', Validators.compose([
				Validators.required,
			])),
			'password': new FormControl('', Validators.compose([
				Validators.required,
			])),
		});
    }


    login(val) {
        console.log('device :',this.device.platform);
        
        let params = {
            email: val.email,
            password: val.password,
            device :(this.device.platform?this.device.platform:'android')
        }        
       
        console.log('test',params);

        this.isProcess = true;
        this.presentLoading();
        this.service.postCall('login', params)
            .subscribe((result) => {
                console.log('results', result);
                this.isProcess = false;
                this.loading.dismiss();
                if(result['status']!="failed"){

                    this.storage.set('token', result['token']);
                    this.loginEvent(result['token']);

                    this.presentToast('You are successfully logged in.', 'success', '5000');
                    this.navCtrl.navigateRoot('home');

                }else{
                    
                    this.presentToast('You credentials are not correct.', 'danger', '5000');
                    this.loading.dismiss();

                }
                
            });
    }

    loginEvent(user) {
        console.log('User logged in!');
        this.EventsService.publishuserLoggedIn(user);
    }

    signUp() {
        this.navCtrl.navigateForward('signup');
    }

    signIn() {
        this.navCtrl.navigateRoot('home');
    }

    async presentLoading() {
        this.loading = await this.loadingController.create({
            message: 'Please wait...',
        });
        await this.loading.present();

        const { role, data } = await this.loading.onDidDismiss();
        console.log('Loading dismissed!');
    }

    async presentToast(msg, color, duration) {
        const toast = await this.toastController.create({
            message: msg,
            color: color,
            duration: duration
        });
        toast.present();
    }

}
