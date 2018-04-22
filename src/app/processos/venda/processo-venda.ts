import { Vendedor } from './../../model/vendedor';
import { Venda } from './../../model/venda';
import { ItensVenda } from './../../model/itensvenda';
import { ClienteDialog } from './../cliente-dialog/cliente-dialog';
import { Cliente } from './../../model/cliente';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { FornecedorDialog } from './../fornecedor-dialog/fornecedor-dialog'; 
import { Fornecedor } from './../../model/fornecedor';
import { Produto } from './../../model/produto';
import { ItensCompra } from './../../model/itenscompra';
import { Compra } from './../../model/compra';
import { Component, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';


@Component({
    selector: 'processo-venda',
    templateUrl: 'processo-venda.html',
    styleUrls: ['processo-venda.scss'],

})

export class ProcessoVenda {

    vendedor: Vendedor = new Vendedor();

    venda: Venda = new Venda();

    codigo: Number;
    cliente: Cliente = new Cliente();
    cpf: string;
    datavenda: Date;;
    public form:FormGroup;

    constructor(public dialog: MatDialog, public formBuilder:FormBuilder) {
      this.form = this.formBuilder.group({
        codigo:[null],
        cliente:[null, Validators.required],
        cpf:[null, Validators.required],
        datavenda:[null, Validators.required]
      });
    }
 

    public abrirPesquisaCliente(){
      let config: MatDialogConfig = {
        disableClose: true,
        width: '80%',
        height: '80%',
        data: {
          cliente:this.cliente
        }
      };
      let clienteDialog = this.dialog.open(ClienteDialog ,config);
      clienteDialog.afterClosed().subscribe( (retorno) =>{
        this.cliente = retorno;
        console.log(this.cliente);
      })
    }
  

    displayedColumns = ['venda', 'produto', 'quantidade', 'vlrunitario', 'vlrtotal' ];
    dataSource =  new MatTableDataSource(itensvenda) ;
  }

  export interface Element {
    venda: Venda;
    produto: Produto;
    quantidade: Number;
    vlrunitario: Number;
    vlrtotal: Number;
  

  }

  const itensvenda: ItensVenda[] = [

  ];


  








