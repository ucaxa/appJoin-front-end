import { NgModule } from '@angular/core';
//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';
import { Page } from 'src/app/interfaces/page';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  categorias: Categoria[]=[];
  page: number = 0;
  size: number = 4;
  totalElements: number = 0;

  categoriaIdToDelete: number | null = null;

  constructor(private categoriaService: CategoriasService, private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getCategoriasPaginada(this.page, this.size).subscribe((data: Page<Categoria>) => {
      this.categorias = data.content;
      this.totalElements = data.totalElements;
    });
  }

  nextPage(): void {
    if ((this.page + 1) * this.size < this.totalElements) {
      this.page++;
      this.getCategorias();
    }
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.getCategorias();
    }
  }

  getCategoria(id: number){
    this.router.navigate(['categorias-detalhe', id]);
  }

  updateCategoria(id: number){
    this.router.navigate(['categorias-update', id]);
  }



  openDeleteModal(content: any, categoriaId: number): void {
    this.categoriaIdToDelete = categoriaId;
    this.modalService.open(content).result.then((result) => {
      if (result === 'Delete') {
        this.deleteCategoria();
      }
    }, (reason) => {
      this.categoriaIdToDelete = null;
    });
  }

  deleteCategoria(): void {
    if (this.categoriaIdToDelete !== null) {
      this.categoriaService.deleteCategoria(this.categoriaIdToDelete).subscribe(() => {
        this.getCategorias();  // Recarrega as categorias após deletar
      });
    }
  }



}
