import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/providers/MustMatchPassword';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  // Variables
  signUpForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this._buildForm();
  }

  ngOnInit() {

  }

  // Form Validation
  _buildForm() {
    this.signUpForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
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

  Register() {
    console.log(this.signUpForm.value.name)

  }

}
