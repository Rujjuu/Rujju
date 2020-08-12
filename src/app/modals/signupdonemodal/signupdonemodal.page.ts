import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signupdonemodal',
  templateUrl: './signupdonemodal.page.html',
  styleUrls: ['./signupdonemodal.page.scss'],
})
export class SignupdonemodalPage implements OnInit {

  constructor(private modalCtrl:ModalController,private navCtrl:NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.dismiss();
      this.goHome();
    }, 2000);
  }

  dismiss()
  {
    this.modalCtrl.dismiss();
  }

  goHome()
  {
    this.navCtrl.navigateRoot('/home');
  }

}
