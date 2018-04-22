import { Fornecedor } from './../../../model/fornecedor';
import { Cliente } from './../../../model/cliente';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'pesquisa-fornecedor',
  styleUrls: ['pesquisa-fornecedor.scss'],
  templateUrl: 'pesquisa-fornecedor.html',
})

export class PesquisaFornecedor {
    displayedColumns = ['position', 'codigo', 'nome', 'cnpj,', 'endereco', 'bairro', 'cidade', 'telefone', 'fax', 'cep', 'email', 'datacadastro'];
    dataSource =  new MatTableDataSource(fornecedores) ;
  }

  export interface Element {
    position: number;
    codigo: number;
    nome: string;
    cnpj: string;
    endereco: string;
    bairro: string;
    cidade: string;
    telefone: string;
    fax: string;
    cep: string;
    email: string;
    datacadastro: Date;

  }

  const fornecedores: Fornecedor[] = [

  ];