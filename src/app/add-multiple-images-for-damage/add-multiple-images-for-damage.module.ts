import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMultipleImagesForDamagePageRoutingModule } from './add-multiple-images-for-damage-routing.module';

import { AddMultipleImagesForDamagePage } from './add-multiple-images-for-damage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMultipleImagesForDamagePageRoutingModule
  ],
  declarations: [AddMultipleImagesForDamagePage]
})
export class AddMultipleImagesForDamagePageModule {}
