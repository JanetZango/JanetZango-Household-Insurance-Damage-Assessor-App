import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfHousesAddedPageRoutingModule } from './list-of-houses-added-routing.module';

import { ListOfHousesAddedPage } from './list-of-houses-added.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfHousesAddedPageRoutingModule
  ],
  declarations: [ListOfHousesAddedPage]
})
export class ListOfHousesAddedPageModule {}
