import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-finddrug',
  templateUrl: './finddrug.page.html',
  styleUrls: ['./finddrug.page.scss'],
})
export class FinddrugPage implements OnInit {

  constructor(private navCTrl:NavController) { }

  ngOnInit() {
  }

  goDrugDetails()
  {
    this.navCTrl.navigateForward('drugdetails');
  }

}
