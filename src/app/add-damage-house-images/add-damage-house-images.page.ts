import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-damage-house-images',
  templateUrl: './add-damage-house-images.page.html',
  styleUrls: ['./add-damage-house-images.page.scss'],
})
export class AddDamageHouseImagesPage implements OnInit {
  //variables
  url:any
  constructor(public alertCtrl:AlertController) { }

  ngOnInit() {
  }
 async insertImagine(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      if (event.target.files[0].size > 1500000) {
        const alert =await  this.alertCtrl.create({
          header: "Oh no!",
          message: "your photo is too large, please choose a photo with 1.5MB or less.",
          buttons: ['OK'],
          cssClass: "myAlert",
        });
      await alert.present();
      }
      else {
        reader.onload = (event: any) => {
          this.url = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
}
