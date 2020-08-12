import { CalldocmodalPage } from './../modals/calldocmodal/calldocmodal.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

import { Storage } from '@ionic/storage';
import { LoadingController, ToastController, Platform } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../services/common.service";
@Component({
  selector: 'app-docdetails',
  templateUrl: './docdetails.page.html',
  styleUrls: ['./docdetails.page.scss'],
})
export class DocdetailsPage implements OnInit {
    userID : any;
    isProcess : boolean = false;
    loading : any;
    user: any;

  constructor(
      public navCtrl:NavController,
      private modalCtrl:ModalController,
        public plarform: Platform,
        public service: CommonService,
        public loadingController: LoadingController,
        public toastController: ToastController,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.userID= this.router.snapshot.paramMap.get("id");
    this.getUserInfo(this.userID);
  }

  getUserInfo(id)
  {
    
    this.isProcess = true;
        this.presentLoading();
        this.service.getCall('user/'+id,'' )
            .subscribe((result) => {
                this.isProcess = false;
                this.loading.dismiss();
                if (result['status'] != "failed") {
                                        
                    this.user = result['user'];
                    console.log('user/', this.user);
                    
                } else {

                    this.presentToast('Something went wrong please try again.', 'danger', '5000');
                    this.loading.dismiss();

                }

            }); 
  }

  schedule(id)
  {
    this.navCtrl.navigateForward(['appointment', {'id':id}]);

  }

  goChat()
  {
    this.navCtrl.navigateForward('chat');
  }

  async showCallModal()
  {
    const modal = await this.modalCtrl.create({
      component: CalldocmodalPage
    });

    return await modal.present();
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
