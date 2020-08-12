import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TalktosomeonePage } from './talktosomeone.page';

const routes: Routes = [
  {
    path: '',
    component: TalktosomeonePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TalktosomeonePage]
})
export class TalktosomeonePageModule {}
