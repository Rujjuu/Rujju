import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController, ToastController, NavController, Platform } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../services/common.service";

@Component({
    selector: 'app-doctorlist',
    templateUrl: './doctorlist.page.html',
    styleUrls: ['./doctorlist.page.scss'],
})
export class DoctorlistPage implements OnInit {

    isProcess: boolean = false;
    loading: any;
    userList : any= [] ;

    constructor(
        public navCtrl: NavController,
        public plarform: Platform,
        public service: CommonService,
        public loadingController: LoadingController,
        public toastController: ToastController,
    ) { }

    ngOnInit() {
        this.getDoctorList();
    }


    getDoctorList() {

        this.isProcess = true;
        this.presentLoading();
        this.service.getCall('users','' )
            .subscribe((result) => {
                console.log('users', result);
                this.isProcess = false;
                this.loading.dismiss();
                if (result['status'] != "failed") {
                    let temp = [];
                    result['users'].forEach(function (value) {
                        if(value.role =='consultant'){
                            temp.push(value);
                            
                        }
                    });
                    
                    this.userList = temp;
                } else {

                    this.presentToast('Something went wrong please try again.', 'danger', '5000');
                    this.loading.dismiss();

                }

            });           

    }


    goDocDetails(id) {
        this.navCtrl.navigateForward(['docdetails', {'id':id}] );
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
