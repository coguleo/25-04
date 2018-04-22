import { Fornecedor } from './../../model/fornecedor';
import { FornecedorService } from './../../services/fornecedor-service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { Component, Inject } from '@angular/core';


@Component({
    selector:'fornecedor-dialog',
    templateUrl: './fornecedor-dialog.html',
    styleUrls:['fornecedor-dialog.scss'],
    providers: [FornecedorService]
})

export class FornecedorDialog {

    public nome: string;
    public fornecedor: Fornecedor;

    public fornecedores: Fornecedor[] = [ 
    ];
    displayedColumns = ['id', 'nome', 'cnpj', 'cidade'];
    dataSource =  new MatTableDataSource(this.fornecedores) ;

    constructor(@Inject(MAT_DIALOG_DATA)public data, private fornecedorService: FornecedorService,
       public dialog: MatDialogRef<FornecedorDialog>){
        this.nome = this.data.fornecedor;
        

       }



    public pesquisar() {
        this.fornecedorService.buscarPorNome(this.nome).subscribe((lista)=> {
            this.fornecedores = lista;
            this.dataSource =  new MatTableDataSource(this.fornecedores) ;
        });
    }


   public selectRow(row){
       this.fornecedor = row;
   }

    public ok(){
        this.dialog.close(this.fornecedor);
    }



    

    

   

}

