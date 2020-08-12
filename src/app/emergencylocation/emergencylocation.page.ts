import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-emergencylocation',
    templateUrl: './emergencylocation.page.html',
    styleUrls: ['./emergencylocation.page.scss'],
})
export class EmergencylocationPage implements OnInit {

    location: any;
    constructor(
        private storage: Storage
    ) {

        if (navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                console.log('pos', pos);

                // this.lng = +pos.coords.longitude;
                // this.lat = +pos.coords.latitude;
            });
        }

    }

    ngOnInit() {
    }

    saveLocation() {

        console.log('location', this.location);
        this.storage.set('emergency_location',this.location);
    }

}
