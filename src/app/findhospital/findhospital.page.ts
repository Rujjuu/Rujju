import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-findhospital',
  templateUrl: './findhospital.page.html',
  styleUrls: ['./findhospital.page.scss'],
})
export class FindhospitalPage implements OnInit {

  constructor(private navCTrl:NavController) { }

  ngOnInit() {
  }

  goHospDetails()
  {
    this.navCTrl.navigateForward('hospdetails');
  }

}
