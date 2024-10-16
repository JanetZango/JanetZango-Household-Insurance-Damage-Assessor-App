import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoordinatesServices } from 'src/providers/Geoloation';
import { HouseholdProvider } from 'src/providers/HouseHoldInsuranceAssessor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from 'src/providers/Config';
import { NavParams } from '@ionic/angular';





@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ]
    ,
  providers: [
    CoordinatesServices,HouseholdProvider,ConfigService, NavParams, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
