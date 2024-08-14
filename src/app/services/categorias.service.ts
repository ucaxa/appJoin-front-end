import { Categoria } from './../models/categoria';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../interfaces/page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class CategoriasService {

  private baseURL = "http://localhost:8080/categorias";

  constructor(private httpClient: HttpClient) { }
  

  getCategoriasPaginada(page: number, size: number): Observable<Page<Categoria>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.httpClient.get<Page<Categoria>>(this.baseURL, { params });
  }

  getCategoriasList(): Observable<Categoria[]> {
//    return this.http.get<Orgao[]>('/assets/data/escala/unidade.json');
    return this.httpClient.get<Categoria[]>(this.baseURL);
  }


  salvarCategoria(categoria: Categoria): Observable<string> {
    return this.httpClient.post(this.baseURL, categoria, { observe: 'response' })
      .pipe(
        map(response => response.headers.get('Location') || '')
      );
  }

  getCategoriaPorId(id: number): Observable<Categoria>{
    return this.httpClient.get<Categoria>(`${this.baseURL}/${id}`);
  }

  updateCategoria(id: number, categoria: Categoria): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, categoria);
  }

  deleteCategoria(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
