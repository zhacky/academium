import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserInterface} from '../../models/user.interface';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(): void {
    console.log('login');
    this.http.post<{ user: UserInterface }>(`${environment.apiUrl}/users/login`,
      {
        'user': this.form.getRawValue()
      })
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/').then(r => console.log('r', r));
      });
  }
}
