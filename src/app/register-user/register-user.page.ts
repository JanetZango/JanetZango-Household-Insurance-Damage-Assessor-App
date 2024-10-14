import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/providers/MustMatchPassword';
import { RegisterUser } from 'src/model/RegisterUser.model';
import { HouseholdProvider } from 'src/providers/HouseHoldInsuranceAssessor';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  // Variables
  signUpForm!: FormGroup;
  private RegisterUser!:RegisterUser
  constructor(private formBuilder: FormBuilder, private household:HouseholdProvider,public alertCtrl:AlertController) {
    this._buildForm();
  }

  ngOnInit() {

  }

  // Form Validation
  _buildForm() {
    this.signUpForm = this.formBuilder.group({
      'firstname': ['', [Validators.required]],
      'lastname': ['', [Validators.required]],
      'emailAddress':  ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', [Validators.required]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }


  // }
  // ***display error if data not entered
  _isInvalidControl(name: string) {
    return this.signUpForm.get(name)?.invalid && this.signUpForm.get(name)?.dirty;
  }

  async Register() {
    this.RegisterUser = new RegisterUser
    this.RegisterUser.firstName = this.signUpForm.value.firstname
    this.RegisterUser.emailAddress = this.signUpForm.value.emailAddress
    this.RegisterUser.surname = this.signUpForm.value.lastname
    this.RegisterUser.password = this.signUpForm.value.password
    this.RegisterUser.confirmPassword = this.signUpForm.value.confirmPassword
    console.log(this.RegisterUser)
    this.household.Register_UserApi(this.RegisterUser).subscribe(_responseousehold =>{
      console.log(_responseousehold)
      
      
    })
  }


}
