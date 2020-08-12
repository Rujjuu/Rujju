import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
    token = '';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private EventsService: EventsService,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('android')) {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#2D8FFF');
    }

    this.storage.get('token').then((val) => {
        console.log('Your token in component is', val)
        if(val){
            this.token = val;
        }
    });

    this.EventsService.getuserLoggedInObservable().subscribe((user) => {
        setTimeout(() => {
            this.storage.get('token').then((val) => {
                console.log('Your token in EventsService', val);
                if(val){
                    this.token = val;
                }else{
                    this.token = '';
                }
                console.log('Your token in EventsService123', this.token);
            });
        }, 1000);
        
    });


    });
  }
}
