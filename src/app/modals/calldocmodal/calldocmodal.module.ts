import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalldocmodalPage } from './calldocmodal.page';
import { SharedModule } from 'src/app/components/sharedModule';

const routes: Routes = [
  {
    path: '',
    component: CalldocmodalPage
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
  declarations: [CalldocmodalPage]
})
export class CalldocmodalPageModule {}
