import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalltypePage } from './calltype.page';
import { SharedModule } from '../components/sharedModule';

const routes: Routes = [
  {
    path: '',
    component: CalltypePage
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
  declarations: [CalltypePage]
})
export class CalltypePageModule {}
