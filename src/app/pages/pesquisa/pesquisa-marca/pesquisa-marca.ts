import { Router, ActivatedRoute } from '@angular/router';
import { MarcaService } from './../../../services/marcaservice';
import { Marca } from './../../../model/marca';
import { Component, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'pesquisa-marca',
  styleUrls: ['pesquisa-marca.scss'],
  templateUrl: 'pesquisa-marca.html',
  providers: [MarcaService]
})

export class PesquisaMarca {

    

    public nome: string;


    public marca: Marca[] = [ 
    ]; 
    displayedColumns = ['id', 'nome'];
    dataSource =  new MatTableDataSource(this.marca) ;

    constructor (public route:ActivatedRoute, private marcaService: MarcaService ){
      this.route.params.subscribe(data => {
        if (data['nome'] ){
            this.nome = data['nome'] ;
        }
    })
    }


    public pesquisar() {
      this.marcaService.buscarPorNome(this.nome).subscribe((lista)=> {
          this.marca = lista;
          this.dataSource =  new MatTableDataSource(this.marca) ;
      });
  }
  }


  