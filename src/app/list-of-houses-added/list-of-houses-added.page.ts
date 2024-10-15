import { Component, OnInit } from '@angular/core';
import { HouseholdProvider } from 'src/providers/HouseHoldInsuranceAssessor';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router,NavigationExtras } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-list-of-houses-added',
  templateUrl: './list-of-houses-added.page.html',
  styleUrls: ['./list-of-houses-added.page.scss'],
})
export class ListOfHousesAddedPage implements OnInit {
  getEmailAddress:any
  DataArray:any
  rides:any
  houseListArray:any
  description:any
  images:any
  houseID:any
  houseImage:any
  address:any
  constructor(public household: HouseholdProvider,public nav:NavParams,public navParams: NavParams,public router:Router,
    private route: ActivatedRoute) {

      this.route.queryParams.subscribe(params => {
        this.getEmailAddress = params["emailAddres"];
        // console.log(this.getEmailAddress)
    })


 

   }

  ngOnInit() {
    this.get_HouseAdd();
  }
  get_HouseAdd() { 
    this.household.GetHousesSavedApi().subscribe((_responseHouseAdded:any)=>{
      console.log(_responseHouseAdded.housesList ,"house")
      this.houseListArray = _responseHouseAdded.housesList
      console.log(this.houseListArray.houseImage,"house")
   
  
    })
  }
  GoToAddHouse(){
    console.log(this.getEmailAddress)
    const params : NavigationExtras={
      queryParams:{
        emailAddres:this.getEmailAddress
      }
    }
    console.log(this.getEmailAddress)
    this.router.navigate(['/add-damage-house-images'],params)
  }

  ReadMore(detailsHouse:any){
    console.log(detailsHouse)
   
    

    const params : NavigationExtras={
      queryParams:{
        details:detailsHouse
      }
    }
    console.log(params)
    this.router.navigate(['/add-multiple-images-for-damage'],params)
  }
}
