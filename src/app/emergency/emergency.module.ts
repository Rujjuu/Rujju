import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmergencyPage } from './emergency.page';
import { SharedModule } from '../components/sharedModule';

const routes: Routes = [
  {
    path: '',
    component: EmergencyPage
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
  declarations: [EmergencyPage]
})
export class EmergencyPageModule {}
