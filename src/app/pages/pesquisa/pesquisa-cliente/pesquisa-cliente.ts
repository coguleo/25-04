import { Cliente } from './../../../model/cliente';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'pesquisa-cliente',
  styleUrls: ['pesquisa-cliente.scss'],
  templateUrl: 'pesquisa-cliente.html',
})

export class PesquisaCliente {
    displayedColumns = ['position', 'codigo', 'nome', 'cpf,', 'rg', 'telefone', 'cidade', 'endereco', 'bairro', 'cep', 'datanascimento'];
    dataSource =  new MatTableDataSource(clientes) ;
  }

  export interface Element {
    position: number;
    codigo: number;
    nome: string;
    cpf: string;
    rg: string;
    telefone: string;
    cidade: string;
    bairro: string;
    cep: string;
    datanascimento: string;

  }

  const clientes: Cliente[] = [

  ];