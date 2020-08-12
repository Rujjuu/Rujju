import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public navCtrl:NavController , ) { }

  ngOnInit() {}

  
    goToHome() {
        this.navCtrl.navigateForward('home');
        
    }

    goToProfile() {
        this.navCtrl.navigateForward('profile');
        
    }


}
