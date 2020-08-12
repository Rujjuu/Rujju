import { VideocallPageModule } from './modals/videocall/videocall.module';
import { CalldocmodalPageModule } from './modals/calldocmodal/calldocmodal.module';
import { PaymentdonemodalPageModule } from './modals/paymentdonemodal/paymentdonemodal.module';
import { SignupdonemodalPageModule } from './modals/signupdonemodal/signupdonemodal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//  firebase imports, remove what you don't require
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { Device } from '@ionic-native/device/ngx';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { IonicStorageModule } from '@ionic/storage';
// import { SharedModule } from './components/sharedModule';
import { ErrorHandler,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// environment
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    SignupdonemodalPageModule,
    PaymentdonemodalPageModule,
    CalldocmodalPageModule,
    VideocallPageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    Device,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
