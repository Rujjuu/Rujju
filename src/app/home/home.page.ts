import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl:NavController , 
    private EventsService: EventsService,

    private storage: Storage,
    ) { }

    ionViewWillEnter() {
        this.storage.get('token').then((val) => {
            console.log('Your token is home', val)
            if(val){
            }else{
                this.navCtrl.navigateRoot('login');
            }
        });
        
    }

    goToEmergency(){
      
      this.navCtrl.navigateForward('emergency');
    }

    goToAppointment(){
      this.navCtrl.navigateForward('doctorselection');
    //   this.navCtrl.navigateForward('appointment');

    }

    goToResponder(){
      this.navCtrl.navigateForward('respondertype');
    }

    goToChat(){
      this.navCtrl.navigateForward('chattype');
    }

    goTalkToSomeone(){
      this.navCtrl.navigateForward('talktosomeone');
    }


  goProfessionalHelp(){
    this.navCtrl.navigateForward('professionalhelp');
  }

  goHelpSomeone(){
    this.navCtrl.navigateForward('helpsomeone');
  }

  goFindaDoctor()
  {
    this.navCtrl.navigateForward('finddoct');
    console.log("dssafsdfs");
  }

  goFindaHospital()
  {
    this.navCtrl.navigateForward('findhospital');
  }

  goFindaClinic()
  {
    this.navCtrl.navigateForward('findclinic');
  }

  goFindaPharmacy()
  {
    this.navCtrl.navigateForward('findpharmacy');
  }

  goDocList()
  {
    this.navCtrl.navigateForward('doctorlist');
  }

  goDrugFindDdrugs()
  {
    this.navCtrl.navigateForward('finddrug')
  }

  logout()
  {
    this.storage.clear();
    this.EventsService.publishuserLoggedIn('');
    setTimeout(() => {
        
    this.navCtrl.navigateRoot('login');
        

    }, 500);
  }


}
