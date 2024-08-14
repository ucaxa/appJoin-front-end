import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasListComponent } from './componentes/categorias/categorias-list/categorias-list.component';
import { CategoriasCreateComponent } from './componentes/categorias/categorias-create/categorias-create.component';
import { CategoriasUpdateComponent } from './componentes/categorias/categorias-update/categorias-update.component';
import { CategoriasDetalheComponent } from './componentes/categorias/categorias-detalhe/categorias-detalhe.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { ProdutosListComponent } from './componentes/produtos/produtos-list/produtos-list.component';
import { ProdutosCreateComponent } from './componentes/produtos/produtos-create/produtos-create.component';
import { ProdutosDetalheComponent } from './componentes/produtos/produtos-detalhe/produtos-detalhe.component';
import { ProdutosUpdateComponent } from './componentes/produtos/produtos-update/produtos-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastrarComponent } from './componentes/auth/cadastrar/cadastrar.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { NavbarComponent } from './componentes/menu/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasListComponent,
    CategoriasCreateComponent,
    CategoriasUpdateComponent,
    CategoriasDetalheComponent,
    ProdutosListComponent,
    ProdutosCreateComponent,
    ProdutosDetalheComponent,
    ProdutosUpdateComponent,
    CadastrarComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
