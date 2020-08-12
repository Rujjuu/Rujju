import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-emergency',
    templateUrl: './emergency.page.html',
    styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

    constructor(private storage: Storage) { }

    ngOnInit() {
    }

    savetype(type) {

        console.log('type', type);
        this.storage.set('emergency_type',type);
    }

}
