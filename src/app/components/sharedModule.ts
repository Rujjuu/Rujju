import { RippleLoaderComponent } from './ripple-loader/ripple-loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    RippleLoaderComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    RippleLoaderComponent,
    FooterComponent
  ]
  
})

export class SharedModule {}
