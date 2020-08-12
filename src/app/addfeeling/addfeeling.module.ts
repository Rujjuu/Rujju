import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddfeelingPage } from './addfeeling.page';
import { SharedModule } from '../components/sharedModule';

const routes: Routes = [
  {
    path: '',
    component: AddfeelingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddfeelingPage]
})
export class AddfeelingPageModule {}
