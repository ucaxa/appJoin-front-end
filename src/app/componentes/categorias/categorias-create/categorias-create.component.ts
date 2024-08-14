import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias-create',
  templateUrl: './categorias-create.component.html',
  styleUrls: ['./categorias-create.component.css']
})
export class CategoriasCreateComponent implements OnInit {


  categoria: Categoria = new Categoria(0,'')

  mensagem: string = '';

  constructor(private categoriasService: CategoriasService,
    private router: Router) { }

  ngOnInit(): void {
  }

 salvarCategoria() {
    this.categoriasService.salvarCategoria(this.categoria).subscribe({
      next: (location) => {
        console.log(location);
        this.mensagem = `Categoria salva com sucesso! URI: ${location}`;
       this.categoria.nome = '';  // Limpa o campo após salvar
        this.goToCategoriasList();
      },
      error: (erro) => {
        console.error('Erro ao salvar categoria', erro);
        this.mensagem = 'Erro ao salvar categoria';
      }
    });
  }

  goToCategoriasList(){
    this.router.navigate(['/categorias']);
  }
  
  onSubmit(){
    console.log(this.categoria);
    this.salvarCategoria();
  }

}
