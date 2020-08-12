import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-finddoct',
  templateUrl: './finddoct.page.html',
  styleUrls: ['./finddoct.page.scss'],
})
export class FinddoctPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  goMapView()
  {
    this.navCtrl.navigateForward('docmap')
  }

  goDocList()
  {
    this.navCtrl.navigateForward('doctorlist');
  }



 

}
