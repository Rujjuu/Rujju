// import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
// import { Icategory, InewsList, Ipackage, Ichannel, IweekDay } from '../../category';
import { ToastController,   } from '@ionic/angular';
// import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
    providedIn: 'root',
  })
export class RestServiceProvider {

    public apiUrl: any;
    public uploadUrl;
    public imgUrl: any;
    public imgLarUrl: any;
    public deviceID: any;
    public paypalID: any;
    public paypalEnvironment: any;
    public playStoreUri: any;
    public tvChannelUri: any;
    public tvChannelUriLarge: any;
    public tvChannelUriNormal: any;
    public StripePublishedKey: string;

    constructor(private _http: HttpClient, public toastCtrl: ToastController) {

        //let serverUrl = "http://eclickprojects.com/cassowary_coast/code"; // local api url
        let serverUrl = "https://www.ccinapp.com.au";
        // let serverUrl = "https://ccinstaging.elegant-media.com/beta";


        this.apiUrl = serverUrl + "/request";
        this.uploadUrl = serverUrl + "/uploadedfiles/user_profile_images/";
        this.imgUrl = serverUrl + "/uploadedfiles/products/thumb/";
        this.imgLarUrl = serverUrl + "/uploadedfiles/products/large/";
        this.tvChannelUri = serverUrl + "/uploadedfiles/channel/thumb/";
        this.tvChannelUriLarge = serverUrl + "/uploadedfiles/channel/large/";
        this.tvChannelUriNormal = serverUrl + "/uploadedfiles/channel/normal/";

        this.paypalID = 'AUvVfZ-2vVdOMTzah_jSZYwYnw6XQpDxHnnFjvqEIWk0c9E2kpxigTliiHM-tcHUOX_TWeA8kM2UnNxZ';
        this.paypalEnvironment = 'PayPalEnvironmentSandbox';  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.playStoreUri = 'https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&hl=en';

        // this.StripePublishedKey = 'pk_test_2PY90zVx6FlXeNXypNqJYQi7'; // client's test publish key
        //this.StripePublishedKey = 'pk_test_QDDjYWe7K3OUATyXac5Tcx4Q'; // Eclick's test publish key
        // this.StripePublishedKey = 'pk_live_7fWuCMGc6vh02YjV10BQJXk5'; // client's live publish key
        this.StripePublishedKey = 'pk_test_anELvfZYT3CKgUubCpD5uov6'; // Hammad's test publish key

    }

    async showToast(message) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: 3000,
                  position: 'top'
      
          });
          toast.present();
    }

    /* authUser()
     {
         let user_email=localStorage.getItem('email');
         var myData = JSON.stringify({userEmail:user_email});
        
 
          this._http.post(this.apiUrl+'/authUser/',myData).subscribe((data)=>
         {
               alert(data.status);
                 return data.status;
            
         },(err)=>
         {
                 return 0;
         });
         
     }*/

    getCategoriesList(){
        return this._http.get(this.apiUrl + '/categories/');
    }

    getNewList(catPermalink, ){

        let publicId = localStorage.getItem('publicId');
        let token = localStorage.getItem('token');

        var myData = JSON.stringify({ catPermalink: catPermalink, publicId: publicId, token: token });

        return this._http.post(this.apiUrl + '/' + catPermalink + '/newslist/', myData);
            
    }

    getRelatedNewsList(catPermalink, newsParmalink) {
        let parameters = catPermalink + '~|~' + newsParmalink;

        let publicId = localStorage.getItem('publicId');
        let token = localStorage.getItem('token');

        var myData = JSON.stringify({ publicId: publicId, token: token });

        return this._http.post(this.apiUrl + '/' + parameters + '/related_newslist/', myData);
    }

    getNewsDetails(categoryUrl, permalink) {

        let publicId = localStorage.getItem('publicId');
        let token = localStorage.getItem('token');

        var myData = JSON.stringify({ publicId: publicId, token: token });

        return this._http.post(this.apiUrl + categoryUrl + permalink + '/news/', myData);
    }

    getPackageList(){
        return this._http.get(this.apiUrl + '/packages/');
    }

    getChannelList(){
        return this._http.get(this.apiUrl + '/Channels/');
    }

    getWeekDay() {
        return this._http.get(this.apiUrl + '/Weekdays/');
    }

    getDayProgramme()  {
        return this._http.get(this.apiUrl + '/getProgrammeList/');
    }

    getDayProgrammeImage(channelId) {

        let user_email = localStorage.getItem('email');
        var myData = JSON.stringify({ channelId: channelId, userEmail: user_email });

        return this._http.post(this.apiUrl + '/getProgrammeImage/', myData);
    }
}