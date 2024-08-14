import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = { login: '', senha: '' };
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        this.authService.setToken(response.jwt);
        this.router.navigate(['/']);
      },
      (error) => {
        this.error = 'Erro ao logar.';
      });
  }

 /* login() {
    this.authService.login(this.credentials).subscribe((response) => {
      localStorage.setItem('token', response);
      this.router.navigate(['/home']);
    }, error => {
      console.error('Erro ao logar: ', error);
    });
  }*/

}
