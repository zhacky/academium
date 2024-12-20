import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from './core/services/auth.service';
import {NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {UserInterface} from './core/models/user.interface';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  authService = inject(AuthService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<{ user: UserInterface }>(`${environment.apiUrl}/api/user`)
      .subscribe({
        next: (response) => {
          console.log('response', response);
          this.authService.currentUserSig.set(response.user);
        },
        error: (error) => {
          console.log('error', error);
          this.authService.currentUserSig.set(null);
        }
      });
  }

  logout(): void {
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }

  title = 'Academium';
}
