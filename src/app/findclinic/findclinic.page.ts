import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-findclinic',
  templateUrl: './findclinic.page.html',
  styleUrls: ['./findclinic.page.scss'],
})
export class FindclinicPage implements OnInit {
  
  constructor(private navCTrl:NavController) { }

  ngOnInit() {
  }

  goClinicDetails()
  {
    this.navCTrl.navigateForward('clinicdetails');
  }

}
