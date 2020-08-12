import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinicdetails',
  templateUrl: './clinicdetails.page.html',
  styleUrls: ['./clinicdetails.page.scss'],
})
export class ClinicdetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  schedule()
  {
    console.log("scheduled");
  }


}
