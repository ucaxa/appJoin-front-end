import { CategoriasListComponent } from './componentes/categorias/categorias-list/categorias-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasCreateComponent } from './componentes/categorias/categorias-create/categorias-create.component';
import { CategoriasUpdateComponent } from './componentes/categorias/categorias-update/categorias-update.component';
import { CategoriasDetalheComponent } from './componentes/categorias/categorias-detalhe/categorias-detalhe.component';
import { ProdutosListComponent } from './componentes/produtos/produtos-list/produtos-list.component';
import { ProdutosCreateComponent } from './componentes/produtos/produtos-create/produtos-create.component';
import { ProdutosUpdateComponent } from './componentes/produtos/produtos-update/produtos-update.component';
import { ProdutosDetalheComponent } from './componentes/produtos/produtos-detalhe/produtos-detalhe.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { CadastrarComponent } from './componentes/auth/cadastrar/cadastrar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/categorias', pathMatch: 'full' },
  {path: 'categorias', component: CategoriasListComponent},
  {path: 'categorias-create', component: CategoriasCreateComponent},
  {path: 'categorias-update/:id', component: CategoriasUpdateComponent},
  {path: 'categorias-detalhe/:id', component: CategoriasDetalheComponent},
  {path: 'produtos', component: ProdutosListComponent},
  {path: 'produtos-create', component: ProdutosCreateComponent},
  {path: 'produtos-update/:id', component: ProdutosUpdateComponent},
  {path: 'produtos-detalhe/:id', component: ProdutosDetalheComponent},
  { path: 'register', component: CadastrarComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },  
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
