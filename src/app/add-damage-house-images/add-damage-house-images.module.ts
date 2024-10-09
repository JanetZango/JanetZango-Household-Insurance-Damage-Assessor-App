import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDamageHouseImagesPageRoutingModule } from './add-damage-house-images-routing.module';

import { AddDamageHouseImagesPage } from './add-damage-house-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDamageHouseImagesPageRoutingModule
  ],
  declarations: [AddDamageHouseImagesPage]
})
export class AddDamageHouseImagesPageModule {}
