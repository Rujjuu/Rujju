import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-professionalhelp',
  templateUrl: './professionalhelp.page.html',
  styleUrls: ['./professionalhelp.page.scss'],
})
export class ProfessionalhelpPage implements OnInit {

  constructor(public navCtrl:NavController) { }


  ngOnInit() {
  }
  
  goAppointment() {
    this.navCtrl.navigateForward('appointment');
  }
}
