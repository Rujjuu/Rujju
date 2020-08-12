import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild('slidess',{static:true}) slides: IonSlides;
  animate:any;

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  goSignIn()
  {
    this.navCtrl.navigateRoot('login');
  }

  onSlideChange() {
    this.slides.getActiveIndex()
      .then(index => {
        console.log(index);
        if(index != 0)
        {
          this.switchAnimates()
        }

        if(index == 3)
        {
          this.animate = 'animated swing'
        }
      })
  }

  switchAnimates()
  {
    this.animate = "animated pulse"
    console.log(this.animate+ "beg");
    setTimeout(() => {
      this.animate = "";
      console.log(this.animate+ "over");
    }, 2000);
  }
 

}
