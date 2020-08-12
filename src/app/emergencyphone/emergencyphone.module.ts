import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmergencyphonePage } from './emergencyphone.page';
import { SharedModule } from '../components/sharedModule';

const routes: Routes = [
  {
    path: '',
    component: EmergencyphonePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmergencyphonePage]
})
export class EmergencyphonePageModule {}
