import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('',
        Validators.required),
      emailName: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*$%#])[A-Za-z\d@*$%#]+$/),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[^\s]+$/)
      ]),
      
    })
  }

  register() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);

  }
}
