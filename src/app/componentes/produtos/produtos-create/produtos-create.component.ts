import { CategoriasService } from 'src/app/services/categorias.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/interfaces/page';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class ProdutosCreateComponent  implements OnInit{

  listaCategorias: Categoria[]=[];
  produto: Produto = new Produto(0,'',0,0,'','')
  mensagem: string = '';

  constructor(private produtoService: ProdutosService,private categoriasService:CategoriasService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategoriasList();
  }


  salvarProduto() {
    this.produtoService.salvarProduto(this.produto).subscribe({
      next: (novoProduto:any) => {
      this.goToProdutosList();
        },
      error: (erro) => {
        console.error('Erro ao salvar produto', erro);
        this.mensagem = 'Erro ao salvar produto';
      }
    });
  }

  goToProdutosList(){
    this.router.navigate(['/produtos']);
  }
  
  onSubmit(){
    this.salvarProduto();
  }

  getCategoriasList() {
    this.categoriasService.getCategoriasPaginada(0,10).subscribe(data => {
    this.listaCategorias = data.content;
      });
  }


}
