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
  selector: 'pesquisa-cliente',
  styleUrls: ['pesquisa-cliente.scss'],
  templateUrl: 'pesquisa-cliente.html',
  providers: [ClienteService]
})

export class PesquisaCliente {

    

    public nome: string;


    public cliente: Cliente[] = [ 
    ]; 
    displayedColumns = ['id', 'nome', 'cpf', 'rg', 'telefone', 'endereco', 'bairro', 'cep', 'datanascimento', 'cidade' ];
    dataSource =  new MatTableDataSource(this.cliente) ;

    constructor (public route:ActivatedRoute, private clienteService: ClienteService ){
      this.route.params.subscribe(data => {
        if (data['nome'] ){
            this.nome = data['nome'] ;
        }
    })
    }


    public pesquisar() {
      this.clienteService.buscarPorNome(this.nome).subscribe((lista)=> {
          this.cliente = lista;
          this.dataSource =  new MatTableDataSource(this.cliente) ;
      });
  }
  }

