import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  usuario: any = { login: '', senha: '', email: '' };

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.usuario).subscribe(() => {
      this.router.navigate(['/login']);
    }, error => {
      console.error('Erro ao cadastrar: ', error);
    });
  }

}
