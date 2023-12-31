import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from "../backend-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public formbuilder: FormBuilder, public service: BackendService, private router: Router) { }
 
  
  public forms = this.formbuilder.group({
    full_namename: ['', Validators.required],
    user_name: ['', Validators.required],
    phone_number : ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    password: ['', [Validators.required, Validators.maxLength(8)]],
  })

  submitForm() {
    console.log(this.forms.value);

    this.service.sendsignup(this.forms.value).subscribe(
      (data) => {
        console.log(data);
        // if (data && data.success === true) {
        //   // Redirect to signinbackend upon successful registration
        //   this.router.navigate(['/signinbackend']);
        // }
      },
      (error) => {
        console.log(error);
      }
    );

    this.forms.reset(); 
    console.log("Welcome back Home");
  }
}
