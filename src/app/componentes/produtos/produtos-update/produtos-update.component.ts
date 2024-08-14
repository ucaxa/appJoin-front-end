import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-update',
  templateUrl: './produtos-update.component.html',
  styleUrls: ['./produtos-update.component.css']
})
export class ProdutosUpdateComponent implements OnInit {
  id: number=0
  produto: Produto = { id:0,nome: '', 
                      valor: 0, 
                      categoriaId: 0, 
                      dataCadastro:'',dataUltimaAtualizacao:'' };
  listaCategorias: Categoria[]=[]; 
  
   constructor(private categoriaService:  CategoriasService,
    private produtoService:ProdutosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
     this.carregarProduto();
     this.getCategoriasList();
  }


  carregarProduto(): void {
    this.produtoService.getProdutoPorId(this.id).subscribe(produto => {
       this.produto = {
        id: produto.id,
        nome: produto.nome,
        valor: produto.valor,
        categoriaId: produto.categoriaId
      };
    });
  }

  
  onSubmit(){
    this.produtoService.updateProduto(this.id, this.produto).subscribe( data =>{
      this.goToProdutosList();
    }
    , error => console.log(error));
  }


  goToProdutosList(){
    this.router.navigate(['/produtos']);
  }

  getCategoriasList() {
    this.categoriaService.getCategoriasPaginada(0,10).subscribe(data => {
    this.listaCategorias = data.content;
      });
  }

}
