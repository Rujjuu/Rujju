import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-drugdetails',
  templateUrl: './drugdetails.page.html',
  styleUrls: ['./drugdetails.page.scss'],
})
export class DrugdetailsPage implements OnInit {

  price:number = 29;
  quantity:number = 1;
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  calculateFee()
  {
    this.price = this.quantity*29
  }

  goCart()
  {
    this.navCtrl.navigateForward('cart');
  }

}
