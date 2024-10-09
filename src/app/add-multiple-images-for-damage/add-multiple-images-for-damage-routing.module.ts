import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMultipleImagesForDamagePage } from './add-multiple-images-for-damage.page';

const routes: Routes = [
  {
    path: '',
    component: AddMultipleImagesForDamagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMultipleImagesForDamagePageRoutingModule {}
