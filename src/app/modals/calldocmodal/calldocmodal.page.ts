import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { VideocallPage } from '../videocall/videocall.page';

@Component({
  selector: 'app-calldocmodal',
  templateUrl: './calldocmodal.page.html',
  styleUrls: ['./calldocmodal.page.scss'],
})
export class CalldocmodalPage implements OnInit {
  isLoading: boolean = true;
  
  constructor(private modalCtrl:ModalController,private navCtrl:NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.dismiss();
      this.goVideoCall();
    }, 4000);
  }

  dismiss()
  {
    this.modalCtrl.dismiss();
  }

  async goVideoCall()
  {
    const modal = await this.modalCtrl.create({
      component: VideocallPage
    });

    return await modal.present();
  }

}
