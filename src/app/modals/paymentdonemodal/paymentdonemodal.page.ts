import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-paymentdonemodal',
  templateUrl: './paymentdonemodal.page.html',
  styleUrls: ['./paymentdonemodal.page.scss'],
})
export class PaymentdonemodalPage implements OnInit {

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
