import { Fornecedor } from './model/fornecedor';
import { ClienteDialog } from './processos/cliente-dialog/cliente-dialog';
import { FornecedorDialog } from './processos/fornecedor-dialog/fornecedor-dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { 
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule, 
    MatMenuModule,
    MatCardModule, 
    MatToolbarModule,
    MatIconModule 
} from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http} from '@angular/http';
import { AppComponent } from './app.component';
import { AppRouter } from './app.routes'
import { Principal } from './pages/principal/principal';
import { Login } from './pages/login/login';
import { TemplateLayout } from './componentes/template/template';
import { UsuarioCadastro } from './pages/usuario/cadastro-usuario';
import { ProdutoCadastro } from './pages/produto/cadastro-produto';
import { MarcaCadastro } from './pages/marca/cadastro-marca';
import { CidadeCadastro } from './pages/cidade/cadastro-cidade';
import { ClienteCadastro } from './pages/cliente/cadastro-cliente';
import { VendedorCadastro } from './pages/vendedor/cadastro-vendedor';
import { FornecedorCadastro } from './pages/fornecedor/cadastro-fornecedor';
import { PesquisaMarca } from './pages/pesquisa/pesquisa-marca/pesquisa-marca';
import { PesquisaProduto } from './pages/pesquisa/pesquisa-produto/pesquisa-produto';
import { PesquisaCliente } from './pages/pesquisa/pesquisa-cliente/pesquisa-cliente';

import { PesquisaUsuario } from './pages/pesquisa/pesquisa-usuario/pesquisa-usuario';
import { PesquisaFornecedor } from './pages/pesquisa/pesquisa-fornecedor/pesquisa-fornecedor';
import { ProcessoVenda } from './processos/venda/processo-venda';
import { ProcessoCompra } from './processos/compra/processo-compra';


import {MatDialogModule} from '@angular/material/dialog';

import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    //TemplateLayout,
    Principal,
    UsuarioCadastro,
    Login,
    FornecedorDialog,
    ClienteDialog,
    ProdutoCadastro,
    MarcaCadastro,
    CidadeCadastro,
    ClienteCadastro,
    VendedorCadastro,
    FornecedorCadastro,
    PesquisaMarca,
    PesquisaProduto,
    PesquisaCliente,
    PesquisaFornecedor,
    PesquisaUsuario,
    ProcessoVenda,
    ProcessoCompra,
    
  ],
  imports: [
    AppRouter,
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatMenuModule ,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatDialogModule,
    

    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    FlexLayoutModule
  ], 
  entryComponents:[
    FornecedorDialog,
    ClienteDialog,
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
