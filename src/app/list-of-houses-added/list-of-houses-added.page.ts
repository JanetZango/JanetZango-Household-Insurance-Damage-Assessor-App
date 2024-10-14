import { Component, OnInit } from '@angular/core';
import { HouseholdProvider } from 'src/providers/HouseHoldInsuranceAssessor';


@Component({
  selector: 'app-list-of-houses-added',
  templateUrl: './list-of-houses-added.page.html',
  styleUrls: ['./list-of-houses-added.page.scss'],
})
export class ListOfHousesAddedPage implements OnInit {
  token:any
  constructor(public household: HouseholdProvider,) {
    // this.local.GetLoggedInUser().then(data=>{
    //   console.log(data)
    // })
   }

  ngOnInit() {
    this.get_HouseAdd();
  }
  get_HouseAdd() { 
    this.household.GetHousesSavedApi(this.token).subscribe(_responseHouseAdded=>{
      console.log(_responseHouseAdded)
    })
  }
}
