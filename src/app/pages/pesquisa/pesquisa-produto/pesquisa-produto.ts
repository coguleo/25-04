import { Produto } from './../../../model/produto';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'pesquisa-produto',
  styleUrls: ['pesquisa-produto.scss'],
  templateUrl: 'pesquisa-produto.html',
})

export class PesquisaProduto {
    displayedColumns = ['position', 'codigo', 'nome', 'descricao,', 'unidade', 'embalagem', 'valor', 'datacadastro', 'observacoes', 'fornecedor', 'marca'];
    dataSource =  new MatTableDataSource(produtos) ;
  }

  export interface Element {
    position: number;
    codigo: number;
    nome: string;
    descricao: string;
    unidade: number;
    embalagem: string;
    valor: number;
    datacadastro: Date;
    observacoes: string;
    fornecedor: string;
    marca: string;

  }

  const produtos: Produto[] = [

  ];