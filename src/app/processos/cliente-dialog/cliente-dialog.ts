import { ClienteService } from './../../services/cliente-service';
import { Cliente } from './../../model/cliente';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { Component, Inject } from '@angular/core';


@Component({
    selector:'cliente-dialog',
    templateUrl: './cliente-dialog.html',
    styleUrls:['cliente-dialog.scss'],
    providers: [ClienteService]
})

export class ClienteDialog {

    public nome: string;
    public cliente: Cliente;

    public clientes: Cliente[] = [ 
    ];
    displayedColumns = ['id', 'nome', 'cpf', 'cidade'];
    dataSource =  new MatTableDataSource(this.clientes) ;

    constructor(@Inject(MAT_DIALOG_DATA)public data, private clienteService: ClienteService,
       public dialog: MatDialogRef<ClienteService>){
        this.nome = this.data.cliente;
        

       }



    public pesquisar() {
        this.clienteService.buscarPorNome(this.nome).subscribe((lista)=> {
            this.clientes = lista;
            this.dataSource =  new MatTableDataSource(this.clientes) ;
        });
    }


   public selectRow(row){
       this.cliente = row;
   }

    public ok(){
        this.dialog.close(this.cliente);
    }



    

    

   

}

