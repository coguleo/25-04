import { Usuario } from './../../../model/usuario';
import { UsuarioService } from './../../../services/usuarioservice';
import { Cliente } from './../../../model/cliente';
import { ClienteService } from './../../../services/cliente-service';
import { Fornecedor } from './../../../model/fornecedor';
import { FornecedorService } from './../../../services/fornecedor-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MarcaService } from './../../../services/marcaservice';
import { Marca } from './../../../model/marca';
import { Component, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'pesquisa-usuario',
  styleUrls: ['pesquisa-usuario.scss'],
  templateUrl: 'pesquisa-usuario.html',
  providers: [UsuarioService]
})

export class PesquisaUsuario {

    

    public nome: string;


    public usuario: Usuario[] = [ 
    ]; 
    displayedColumns = ['id', 'nome', 'email', 'celular', 'senha' ];
    dataSource =  new MatTableDataSource(this.usuario) ;

    constructor (public route:ActivatedRoute, private usuarioService: UsuarioService ){
      this.route.params.subscribe(data => {
        if (data['nome'] ){
            this.nome = data['nome'] ;
        }
    })
    }


    public pesquisar() {
      this.usuarioService.buscarPorNome(this.nome).subscribe((lista)=> {
          this.usuario = lista;
          this.dataSource =  new MatTableDataSource(this.usuario) ;
      });
  }
  }

