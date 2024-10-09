import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';


@Injectable()
export class CoordinatesServices {
    // Variables

    userLocation = "Searching for location...";
    constructor(public alertCtrl: AlertController, private geo: Geolocation) {

    }
    // Get User Location 
    printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current position:', coordinates);
    };
}