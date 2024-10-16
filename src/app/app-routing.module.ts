import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'add-damage-house-images',
    loadChildren: () => import('./add-damage-house-images/add-damage-house-images.module').then( m => m.AddDamageHouseImagesPageModule)
  },
  {
    path: 'list-of-houses-added',
    loadChildren: () => import('./list-of-houses-added/list-of-houses-added.module').then( m => m.ListOfHousesAddedPageModule)
  },
  {
    path: 'add-multiple-images-for-damage',
    loadChildren: () => import('./add-multiple-images-for-damage/add-multiple-images-for-damage.module').then( m => m.AddMultipleImagesForDamagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
