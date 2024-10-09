import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfHousesAddedPage } from './list-of-houses-added.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfHousesAddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfHousesAddedPageRoutingModule {}
