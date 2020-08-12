import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FindpharmacyPage } from './findpharmacy.page';

const routes: Routes = [
  {
    path: '',
    component: FindpharmacyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FindpharmacyPage]
})
export class FindpharmacyPageModule {}
