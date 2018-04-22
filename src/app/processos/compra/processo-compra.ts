import { Fornecedor } from './../../model/fornecedor';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { FornecedorDialog } from './../fornecedor-dialog/fornecedor-dialog'; 
import { Produto } from './../../model/produto';
import { ItensCompra } from './../../model/itenscompra';
import { Compra } from './../../model/compra';
import { Component, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';


@Component({
    selector: 'processo-compra',
    templateUrl: 'processo-compra.html',
    styleUrls: ['processo-compra.scss'],

})

export class ProcessoCompra {

  public compra: Compra = new Compra();

    codigo: Number;
    fornecedor: Fornecedor = new Fornecedor();
    cnpj: string;
    datacompra: Date;
    dataentrega: Date;
    public form:FormGroup;

    constructor(public dialog: MatDialog, public formBuilder:FormBuilder) {
      this.form = this.formBuilder.group({
        codigo:[null],
        fornecedor:[null, Validators.required],
        cnpj:[null, Validators.required],
        datacompra:[null, Validators.required],
        dataentrega:[null, Validators.required]
      });
    }
 

    public abrirPesquisaFornecedor(){
      let config: MatDialogConfig = {
        disableClose: true,
        width: '80%',
        height: '80%',
        data: {
          fornecedor:this.fornecedor
        }
      };
      let fornecedorDialog = this.dialog.open(FornecedorDialog ,config);
      fornecedorDialog.afterClosed().subscribe( (retorno) =>{
        this.fornecedor = retorno;
        console.log(this.fornecedor);
      })
    }
  

    displayedColumns = ['compra', 'produto', 'quantidade', 'vlrunitario', 'vlrtotal' ];
    dataSource =  new MatTableDataSource(itenscompra) ;
  }

  export interface Element {
    compra: Compra;
    produto: Produto;
    quantidade: Number;
    vlrunitario: Number;
    vlrtotal: Number;
  

  }

  const itenscompra: ItensCompra[] = [

  ];


  








