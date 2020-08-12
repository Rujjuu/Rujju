import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.page.html',
  styleUrls: ['./videocall.page.scss'],
})
export class VideocallPage implements OnInit {

  constructor (private modalCtrl:ModalController, private navCtrl:NavController) { }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }


}
