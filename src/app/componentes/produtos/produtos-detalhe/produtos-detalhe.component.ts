import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-detalhe',
  templateUrl: './produtos-detalhe.component.html',
  styleUrls: ['./produtos-detalhe.component.css']
})
export class ProdutosDetalheComponent implements OnInit {

  id: number =0
  produto: Produto = new Produto(0,'',0, 0, '', '')
  
  constructor(private route: ActivatedRoute, private produtoService: ProdutosService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //this.categoria = new Categoria();
    this.produtoService.getProdutoPorId(this.id).subscribe( data => {
      this.produto = data;
    });
  }

}
