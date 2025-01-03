// import {Component, inject} from '@angular/core';
// import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
// import {UserInterface} from '../../models/user.interface';
// import {HttpClient} from '@angular/common/http';
// import {AuthService} from '../../services/auth.service';
// import {Router} from '@angular/router';
// import {environment} from '../../../../environments/environment';
//
// @Component({
//   selector: 'app-login',
//   imports: [
//     ReactiveFormsModule
//   ],
//   templateUrl: './login.component.html',
//   standalone: true,
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   fb = inject(FormBuilder);
//   http = inject(HttpClient);
//   authService = inject(AuthService);
//   router = inject(Router);
//
//   form = this.fb.nonNullable.group({
//     email: ['', Validators.required],
//     password: ['', Validators.required]
//   });
//
//   onSubmit(): void {
//     console.log('login');
//     this.http.post<{ user: UserInterface }>(`${environment.apiUrl}/users/login`,
//       {
//         'user': this.form.getRawValue()
//       })
//       .subscribe((response) => {
//         console.log('response', response);
//         localStorage.setItem('token', response.user.token);
//         this.authService.currentUserSig.set(response.user);
//         this.router.navigateByUrl('/').then(r => console.log('r', r));
//       });
//   }
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgClass} from '@angular/common'; // <-- Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, NgClass] // <-- Include FormsModule here for ngModel
})
export class LoginComponent {
  // Store the state for form inputs
  state = {
    Username: '',
    Password: '',
    ConfirmPassword: '',
    Email: ''
  };

  // To toggle between login and sign-up forms
  isSignUp = false;

  // Handle form switch
  handleSwitch() {
    this.isSignUp = !this.isSignUp;
  }

  // Handle Sign Up submission
  handleSignUp() {
    if (!this.state.Username || !this.state.Password || !this.state.ConfirmPassword || !this.state.Email) {
      alert("Fill in all fields for Sign Up.");
    } else {
      // Handle the SignUp logic here (e.g., call backend API)
      console.log("Sign Up", this.state);
      // After successful signup logic, clear the form
      this.state = { Username: '', Password: '', ConfirmPassword: '', Email: '' };
    }
  }

  // Handle Login submission
  handleLogin() {
    if (!this.state.Username || !this.state.Password) {
      alert("Please enter both username and password.");
    } else {
      // Handle the Login logic here (e.g., call backend API)
      console.log("Login", this.state);
      // You could use a service here to check credentials, etc.
    }
  }
}


