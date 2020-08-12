import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DocdetailsPage } from './docdetails.page';
import { SharedModule } from '../components/sharedModule';

const routes: Routes = [
  {
    path: '',
    component: DocdetailsPage
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
  declarations: [DocdetailsPage]
})
export class DocdetailsPageModule {}
