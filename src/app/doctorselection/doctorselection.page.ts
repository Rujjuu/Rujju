import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-doctorselection',
    templateUrl: './doctorselection.page.html',
    styleUrls: ['./doctorselection.page.scss'],
})
export class DoctorselectionPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    selectDoc(value) {
        console.log(value);
        
    }

}
