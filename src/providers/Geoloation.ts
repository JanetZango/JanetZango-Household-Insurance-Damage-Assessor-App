import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';


@Injectable()
export class CoordinatesServices {
    // Variables
    coordinates:any;
    userLocation = "Searching for location...";
    constructor(public alertCtrl: AlertController, private geo: Geolocation) {

    }
    // Get User Location 
    printCurrentPosition = async () => {
        return new Promise(async (reslove,reject)=>{
            this.coordinates = await Geolocation.getCurrentPosition();
            console.log('Current position:', this.coordinates);

            reslove(this.coordinates)
        })
   
    
    };
}