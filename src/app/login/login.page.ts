import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInForm!:FormGroup
  constructor(private formBuilder:FormBuilder) { 
    this._buildForm();
  }

  ngOnInit() {
  }
    // Form Validation
    _buildForm() {
      this.signInForm = this.formBuilder.group({
        'emailAddress':  ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
        'password': ['', [Validators.required]],
      })
    }
  
  
    // }
    // ***display error if data not entered
    _isInvalidControl(name: string) {
      return this.signInForm.get(name)?.invalid && this.signInForm.get(name)?.dirty;
    }

}
