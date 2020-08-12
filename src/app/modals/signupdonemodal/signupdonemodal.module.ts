import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupdonemodalPage } from './signupdonemodal.page';

const routes: Routes = [
  {
    path: '',
    component: SignupdonemodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupdonemodalPage]
})
export class SignupdonemodalPageModule {}
