import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CoordinatesServices } from 'src/providers/Geoloation';
import { RegisterUser } from 'src/model/RegisterUser.model';
import { HouseholdProvider } from 'src/providers/HouseHoldInsuranceAssessor';
import { AddHouse } from 'src/model/AddHouse.model';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-add-damage-house-images',
  templateUrl: './add-damage-house-images.page.html',
  styleUrls: ['./add-damage-house-images.page.scss'],
})
export class AddDamageHouseImagesPage implements OnInit {
  //variables
  HouseUrl = "../../assets/Images/defaultImage.jpg";
  DisplayCurrentLocation: any;
  description: any
  private AddHouse!: AddHouse
  address: any
  getEmailAddress: any
  constructor(public alertCtrl: AlertController, public geo: CoordinatesServices, private router: Router,
    public household: HouseholdProvider, private route: ActivatedRoute) {
    this.DisplayCurrentLocation = this.geo.printCurrentPosition();
    console.log("yes", this.DisplayCurrentLocation)

    this.route.queryParams.subscribe(params => {
      this.getEmailAddress = params["emailAddres"];
      console.log(this.getEmailAddress)

      this.household.getUserApis().subscribe((data: any) => {
        console.log(data.userList[0].emailAddress)

        for(var i=0; i<data.length;i++){
          console.log(data.userList[i])
          if(this.getEmailAddress == data.userList[i].emailAddress
          ){
            let obj ={
              userID: data.userList[i].userID

            }
            console.log(obj)
          }
        }
      

      })
    })

  }

  ngOnInit() {

  }
  async insertImagine(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      if (event.target.files[0].size > 1500000) {
        const alert = await this.alertCtrl.create({
          header: "Oh no!",
          message: "your photo is too large, please choose a photo with 1.5MB or less.",
          buttons: ['OK'],
          cssClass: "myAlert",
        });
        await alert.present();
      }
      else {
        reader.onload = (event: any) => {
          this.HouseUrl = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
  AddHouseButton() {
    this.AddHouse = new AddHouse
    this.AddHouse.description = this.description
    this.AddHouse.houseImage = this.HouseUrl
    this.AddHouse.address = 'soweto'
    this.AddHouse.userID = '59cfc14f-dc06-4304-a935-a0bd43337892'
    this.AddHouse.location = "YES"
    // this.AddHouse.images={}

    console.log(this.AddHouse)
    this.household.SaveHouseDetailsApi(this.AddHouse).subscribe(_responseHouse => {
      console.log(_responseHouse)

    },
      async (error: any) => {
        console.log('error')
        const alert = await this.alertCtrl.create({
          // header: "Oh no!",
          message: "Information not saved",
          buttons: ['OK'],
          cssClass: "myAlert",
        });
        await alert.present();
      });
  }
}
