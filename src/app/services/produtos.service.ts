import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../interfaces/page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private baseURL = "http://localhost:8080/produtos";

  constructor(private httpClient: HttpClient) { }

  
  getProdutosList(page: number, size: number): Observable<Page<Produto>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.httpClient.get<Page<Produto>>(this.baseURL, { params });
  }


  salvarProduto(produto: Produto): Observable<string> {
    return this.httpClient.post(this.baseURL, produto, { observe: 'response' })
      .pipe(
        map(response => response.headers.get('Location') || '')
      );
  }

  getProdutoPorId(id: number): Observable<Produto>{
    return this.httpClient.get<Produto>(`${this.baseURL}/${id}`);
  }

  updateProduto(id: number, produto: Produto): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, produto);
  }

  updateParcial(id: number, atualizacoes: Partial<Produto>): Observable<Produto> {
    return this.httpClient.patch<Produto>(`${this.baseURL}/${id}`, atualizacoes);
  }

  deleteProduto(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


 
}
