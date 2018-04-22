import { ProcessoCompra } from './processos/compra/processo-compra';
import { ProcessoVenda } from './processos/venda/processo-venda';
import { PesquisaUsuario } from './pages/pesquisa/pesquisa-usuario/pesquisa-usuario';
import { PesquisaFornecedor } from './pages/pesquisa/pesquisa-fornecedor/pesquisa-fornecedor';
import { PesquisaCliente } from './pages/pesquisa/pesquisa-cliente/pesquisa-cliente';
import { PesquisaMarca } from './pages/pesquisa/pesquisa-marca/pesquisa-marca';
import { FornecedorCadastro } from './pages/fornecedor/cadastro-fornecedor';
import { VendedorCadastro } from './pages/vendedor/cadastro-vendedor';
import { ClienteCadastro } from './pages/cliente/cadastro-cliente';
import { CidadeCadastro } from './pages/cidade/cadastro-cidade';
import { MarcaCadastro } from './pages/marca/cadastro-marca';
import { ProdutoCadastro } from './pages/produto/cadastro-produto';
import { NgModule } from '@angular/core'
import {Router, Routes, RouterModule ,NavigationStart, NavigationError }
 from '@angular/router'
import { UsuarioCadastro } from './pages/usuario/cadastro-usuario'
import { Login } from './pages/login/login'
import { Principal } from './pages/principal/principal'
import { TemplateLayout } from './componentes/template/template';
import { PesquisaProduto } from './pages/pesquisa/pesquisa-produto/pesquisa-produto';
 export const rotas: Routes = [
     {
         path:'',
         //component:TemplateLayout,
         children:[
             {
                path:'usuario-cadastro', component:UsuarioCadastro
            }, 
            {
                path:'login', component:Login
            }, 
            {
                path:'principal', component:Principal
            },
            {
                path:'produto-cadastro', component:ProdutoCadastro
            },
            {
                path:'marca-cadastro', component:MarcaCadastro
            },
            {
                path:'cidade-cadastro', component:CidadeCadastro
            },
            {
                path:'cliente-cadastro', component:ClienteCadastro
            },
            {
                path:'vendedor-cadastro', component:VendedorCadastro
            },
            {
                path:'fornecedor-cadastro', component:FornecedorCadastro
            },
            {
                path:'pesquisa-marca', component:PesquisaMarca
            },
            {
                path:'pesquisa-produto', component:PesquisaProduto
            },
            {
                path:'pesquisa-cliente', component:PesquisaCliente
            },
            {
                path:'pesquisa-fornecedor', component:PesquisaFornecedor
            },
            {
                path:'pesquisa-usuario', component:PesquisaUsuario
            },
            {
                path:'processo-venda', component:ProcessoVenda
            },
            {
                path:'processo-compra', component:ProcessoCompra
            },

            

        ]
     }
     
 ]

 @NgModule({
     imports:[
         RouterModule.forRoot(rotas ,{useHash:true})
     ],
     exports: [ RouterModule ]
 })
 export class AppRouter {
     
    constructor(router: Router){
        console.log('vai criar um listener nas rotas')
        router.events.subscribe( (event) => {
            if (event instanceof NavigationStart){
                let usuario = localStorage.getItem("usuario");
                if (usuario == null && event.url !== 'login'){
                    router.navigate(['login']);
                }
            }else if ( event instanceof NavigationError ){
                router.navigate(['principal']);
            }
        });
     }
 }