import { CalldocmodalPage } from './../modals/calldocmodal/calldocmodal.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

import { Storage } from '@ionic/storage';
import { LoadingController, ToastController, Platform } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../services/common.service";
// import moment from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  
    isProcess : boolean = false;
    loading : any;
    userID : any;
    phone : any;
    email : any;
    date : any;
    time : any;


  constructor(
        public navCtrl:NavController,
        private modalCtrl:ModalController,
        public plarform: Platform,
        public service: CommonService,
        public loadingController: LoadingController,
        public toastController: ToastController,
        private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userID= this.router.snapshot.paramMap.get("id");

  }

  getDate(date){
    this.date = date;
    console.log('date',date);
    
  }
  getTime(time){
    this.time = time
    console.log('time',time);
    
  }

  book(){
    
    if(this.date && this.time ){

        this.date = moment(this.date).format('YYYY-MM-DD');
        this.time = moment(this.time).format('HH:mm');

        let param = {

            'time' : this.time,
            'date' : this.date,
            // 'email' : this.email,
            // 'phone' : this.phone,
            
        }
        
            this.isProcess = true;
            this.presentLoading();
            this.service.postCall('user/'+this.userID+'/appointment',param)
                .subscribe((result) => {
                    this.isProcess = false;
                    this.loading.dismiss();
                    if (result['status'] != "failed") {
                        this.presentToast('Your appointment successfully added.', 'success', '5000');
                        this.navCtrl.navigateForward('home');  
                        
                    } else {

                        this.presentToast('Something went wrong please try again.', 'danger', '5000');
                        this.loading.dismiss();

                    }

                }); 

        }else{

            this.presentToast('Please fill this form.', 'danger', '5000');

        }
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
