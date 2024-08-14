import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';



@Component({
  selector: 'app-categorias-detalhe',
  templateUrl: './categorias-detalhe.component.html',
  styleUrls: ['./categorias-detalhe.component.css']
})
export class CategoriasDetalheComponent implements OnInit {

  id: number =0
  categoria: Categoria = new Categoria(0,'')
  
  constructor(private route: ActivatedRoute, private categoriaService: CategoriasService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoriaService.getCategoriaPorId(this.id).subscribe( data => {
      this.categoria = data;
    });
  }

}
