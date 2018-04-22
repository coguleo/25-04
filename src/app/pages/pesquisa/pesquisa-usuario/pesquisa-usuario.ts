import { Usuario } from './../../../model/usuario';
import { Fornecedor } from './../../../model/fornecedor';
import { Cliente } from './../../../model/cliente';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'pesquisa-usuario',
  styleUrls: ['pesquisa-usuario.scss'],
  templateUrl: 'pesquisa-usuario.html',
})

export class PesquisaUsuario {
    displayedColumns = ['position', 'codigo', 'nome', 'email,', 'celular', 'senha', ];
    dataSource =  new MatTableDataSource(usuarios) ;
  }

  export interface Element {
    position: number;
    codigo: number;
    nome: string;
    celular: string;
    senha: string;

  }

  const usuarios: Usuario[] = [

  ];