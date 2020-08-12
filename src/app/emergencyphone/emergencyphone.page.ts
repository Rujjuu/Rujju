import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { LoadingController, ToastController, NavController, Platform } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../services/common.service";

@Component({
    selector: 'app-emergencyphone',
    templateUrl: './emergencyphone.page.html',
    styleUrls: ['./emergencyphone.page.scss'],
})
export class EmergencyphonePage implements OnInit {

    phone: any;
    isProcess : boolean = false;
    loading : any;

    constructor(private storage: Storage,
        public navCtrl: NavController,
        public plarform: Platform,
        public service: CommonService,
        public loadingController: LoadingController,
        public toastController: ToastController,
        ) { }

    ngOnInit() {
    }

    saveEmergency() {
        console.log('type', this.phone);
        let type = ''; let address=''; 

        this.storage.get('emergency_type').then((value) => {
            if(value){
                type = value;
            }
            this.storage.get('emergency_location').then((val) => {
                
                if(val){
                    address = val;
                }

                let params = {
                    type:type,
                    address:address,
                    phone :this.phone
                }        
               
                console.log('test',params);
        
                this.isProcess = true;
                this.presentLoading();
                this.service.postCall('emergency', params)
                    .subscribe((result) => {
                        console.log('emergency', result);
                        this.isProcess = false;
                        this.loading.dismiss();
                        if(result['status']!="failed"){
        
                            this.storage.set('emergency_type', '');
                            this.storage.set('emergency_location', '');

        
                            this.presentToast('we have received your emergency request.', 'success', '5000');
                            this.navCtrl.navigateRoot('home');
        
                        }else{
                            
                            this.presentToast('Something went wrong please try again.', 'danger', '5000');
                            this.loading.dismiss();
        
                        }
                        
                    });

            });
        });
        
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
