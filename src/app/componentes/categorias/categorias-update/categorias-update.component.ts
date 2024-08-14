import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias-update',
  templateUrl: './categorias-update.component.html',
  styleUrls: ['./categorias-update.component.css']
})
export class CategoriasUpdateComponent implements OnInit {

  id: number=0
  categoria: Categoria = new Categoria(0,'')
  constructor(private categoriaService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoriaService.getCategoriaPorId(this.id).subscribe(data => {
      this.categoria = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.categoriaService.updateCategoria(this.id, this.categoria).subscribe( data =>{
      this.goToCategoriasList();
    }
    , error => console.log(error));
  }

  goToCategoriasList(){
    this.router.navigate(['/categorias']);
  }

}
