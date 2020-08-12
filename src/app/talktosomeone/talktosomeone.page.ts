import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-talktosomeone',
  templateUrl: './talktosomeone.page.html',
  styleUrls: ['./talktosomeone.page.scss'],
})
export class TalktosomeonePage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, public navCtrl:NavController) { }

  ngOnInit() {
  }

  goChat(){
    this.navCtrl.navigateForward('chat');
  }

  async presentMoodActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Mood',
      buttons: [{
        text: 'Happy',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Excited',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Sad',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Depress',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentGenderActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Gender',
      buttons: [{
        text: 'Male',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Female',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Anyone',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      },  {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
