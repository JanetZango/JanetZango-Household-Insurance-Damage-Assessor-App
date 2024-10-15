import { Component, OnInit } from '@angular/core';
import { HouseholdProvider } from 'src/providers/HouseHoldInsuranceAssessor';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-add-multiple-images-for-damage',
  templateUrl: './add-multiple-images-for-damage.page.html',
  styleUrls: ['./add-multiple-images-for-damage.page.scss'],
})
export class AddMultipleImagesForDamagePage implements OnInit {
  DetailsOfHouse:any
  constructor(public household:HouseholdProvider,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.DetailsOfHouse = params["details"];
      console.log(this.DetailsOfHouse)
    })
  }

  ngOnInit() {
  }
  deleteHouse(){
    
  }

}
