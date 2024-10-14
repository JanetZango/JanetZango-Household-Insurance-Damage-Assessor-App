import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Authentification } from 'src/model/Authentification.model';
import { HouseholdProvider } from 'src/providers/HouseHoldInsuranceAssessor';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInForm!: FormGroup
  access_token:any
  private Authentification!: Authentification
  constructor(private formBuilder: FormBuilder, public household: HouseholdProvider,
    public alertCtrl: AlertController, private router: Router,public loader:LoadingController ) {
    this._buildForm();
  }

  ngOnInit() {
  }
  // Form Validation
  _buildForm() {
    this.signInForm = this.formBuilder.group({
      'emailAddress': ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      'password': ['', [Validators.required]],
    })
  }


  // }
  // ***display error if data not entered
  _isInvalidControl(name: string) {
    return this.signInForm.get(name)?.invalid && this.signInForm.get(name)?.dirty;
  }
  LoginUser() {
    this.Authentification = new Authentification
    this.Authentification.emailAddressUsername = this.signInForm.value.emailAddress
    this.Authentification.password = this.signInForm.value.password
    this.household.AuthentificationUser(this.Authentification).subscribe(async _responseLoginUser => {
      console.log(_responseLoginUser)
      this.access_token = _responseLoginUser
  
          
          this.router.navigate(['/list-of-houses-added'])
  
      
   
    },
      async (error: any) => {
        console.log('error')
        const alert = await this.alertCtrl.create({
          header: "Oh no!",
          message: "invalid credentials provided, Please try again or contact adiministrator",
          buttons: ['OK'],
          cssClass: "myAlert",
        });
        await alert.present();
      });
  }


}
