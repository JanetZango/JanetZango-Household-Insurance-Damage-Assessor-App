import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDamageHouseImagesPage } from './add-damage-house-images.page';

const routes: Routes = [
  {
    path: '',
    component: AddDamageHouseImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDamageHouseImagesPageRoutingModule {}
