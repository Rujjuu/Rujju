import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docmap',
  templateUrl: './docmap.page.html',
  styleUrls: ['./docmap.page.scss'],
})
export class DocmapPage implements OnInit {
  sliderConfig={
    spaceBetween:-110,
    centeredSlides:true,
   // slidesPerView:2.8
  }
  constructor() { }

  ngOnInit() {
  }

}
