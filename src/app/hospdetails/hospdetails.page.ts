import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospdetails',
  templateUrl: './hospdetails.page.html',
  styleUrls: ['./hospdetails.page.scss'],
})
export class HospdetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  schedule()
  {
    console.log("scheduled")
  }

}
