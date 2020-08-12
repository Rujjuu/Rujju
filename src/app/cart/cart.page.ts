import { PaymentdonemodalPage } from './../modals/paymentdonemodal/paymentdonemodal.page';
import { SignupdonemodalPage } from './../modals/signupdonemodal/signupdonemodal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async showPayNow()
  {
    const modal = await this.modalCtrl.create({
      component:  PaymentdonemodalPage
    });

    return await modal.present();
  }

}
