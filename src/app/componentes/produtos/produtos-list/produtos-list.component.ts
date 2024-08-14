
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/interfaces/page';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit{

  produtos: Produto[]=[];
  categoria:Categoria =new Categoria(0,'')
  page: number = 0;
  size: number = 4;
  totalElements: number = 0;
  produtoIdToDelete: number | null = null;
  
  constructor(private produtoService: ProdutosService, private modalService: NgbModal,
    private categoriaService:CategoriasService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProdutosList(this.page, this.size).subscribe((data: Page<Produto>) => {
      this.produtos = data.content;
      this.totalElements = data.totalElements;
    });
  }

  getCategoria(idProduto:number):String{
    this.categoriaService.getCategoriaPorId(idProduto).subscribe( data => {
      this.categoria = data;
    });
    return this.categoria.nome;
  }

  nextPage(): void {
    if ((this.page + 1) * this.size < this.totalElements) {
      this.page++;
      this.getProdutos();
    }
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.getProdutos;
    }
  }

  getProduto(id: number){
    this.router.navigate(['produtos-detalhe', id]);
  }

  updateProduto(id: number){
    this.router.navigate(['produtos-update', id]);
  }

 
  openDeleteModal(content: any, produtoId: number): void {
    this.produtoIdToDelete = produtoId;
    this.modalService.open(content).result.then((result) => {
      if (result === 'Delete') {
        this.deleteProduto();
      }
    }, (reason) => {
      this.produtoIdToDelete = null;
    });
  }

  deleteProduto(): void {
    if (this.produtoIdToDelete !== null) {
      this.produtoService.deleteProduto(this.produtoIdToDelete).subscribe(() => {
        this.getProdutos();  
      });
    }
  }


}
