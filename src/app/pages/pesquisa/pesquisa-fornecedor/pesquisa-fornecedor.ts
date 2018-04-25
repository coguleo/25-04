import { Fornecedor } from './../../../model/fornecedor';
import { FornecedorService } from './../../../services/fornecedor-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MarcaService } from './../../../services/marcaservice';
import { Marca } from './../../../model/marca';
import { Component, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'pesquisa-fornecedor',
  styleUrls: ['pesquisa-fornecedor.scss'],
  templateUrl: 'pesquisa-fornecedor.html',
  providers: [FornecedorService]
})

export class PesquisaFornecedor {

    

    public nome: string;


    public fornecedor: Fornecedor[] = [ 
    ]; 
    displayedColumns = ['id', 'nome', 'cnpj', 'endereco', 'bairro', 'telefone', 'fax', 'cep', 'email', 'datacadastro', 'cidade' ];
    dataSource =  new MatTableDataSource(this.fornecedor) ;

    constructor (public route:ActivatedRoute, private fornecedorService: FornecedorService ){
      this.route.params.subscribe(data => {
        if (data['nome'] ){
            this.nome = data['nome'] ;
        }
    })
    }


    public pesquisar() {
      this.fornecedorService.buscarPorNome(this.nome).subscribe((lista)=> {
          this.fornecedor = lista;
          this.dataSource =  new MatTableDataSource(this.fornecedor) ;
      });
  }
  }

