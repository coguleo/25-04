import { Produto } from './../../../model/produto';
import { ProdutoService } from './../../../services/produtoservice';
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
  selector: 'pesquisa-produto',
  styleUrls: ['pesquisa-produto.scss'],
  templateUrl: 'pesquisa-produto.html',
  providers: [ProdutoService]
})

export class PesquisaProduto {

    

    public nome: string;


    public produto: Produto[] = [ 
    ]; 
    displayedColumns = ['id', 'nome', 'unidade', 'embalagem', 'valor', 'datacadastro', 'marca', 'fornecedor', 'observacoes'];
    dataSource =  new MatTableDataSource(this.produto) ;

    constructor (public route:ActivatedRoute, private produtoService: ProdutoService ){
      this.route.params.subscribe(data => {
        if (data['nome'] ){
            this.nome = data['nome'] ;
        }
    })
    }


    public pesquisar() {
      this.produtoService.buscarPorNome(this.nome).subscribe((lista)=> {
          this.produto = lista;
          this.dataSource =  new MatTableDataSource(this.produto) ;
      });
  }
  }

