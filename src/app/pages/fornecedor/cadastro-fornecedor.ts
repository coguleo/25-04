import { Fornecedor } from './../../model/fornecedor';
import { Cliente } from './../../model/cliente';
import { FornecedorService } from './../../services/fornecedor-service';
import { Marca } from './../../model/marca';
import { Produto } from './../../model/produto';
import { Usuario } from './../../model/usuario';
import { Cidade } from './../../model/cidade';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';

@Component({
    selector: "cadastro-fornecedor",
    styleUrls: ['./cadastro-fornecedor.scss'],
    templateUrl: 'cadastro-fornecedor.html',
    providers: [FornecedorService]
})
export class FornecedorCadastro {

    public fornecedor: Fornecedor = new Fornecedor();

    private router: Router;
    private form: FormGroup;

    //UsuarioService ->Objeto para realizar 
    //requisições ao servidor
    constructor(private fornecedorService: FornecedorService,
        router: Router, private formBuilder: FormBuilder) {
        //objeto para realizar a navegação entre paginas
        this.router = router;
        //criando o form para validação 
        //dos componentes na tela
        this.form = formBuilder.group({
            nome: [null, Validators.required],
            cnpj: [null, Validators.required],
            endereco: [null, Validators.required],
            bairro: [null, Validators.required],
            telefone: [null, Validators.required],
            fax: [null, Validators.required],
            cep: [null, Validators.required],
            email: [null, Validators.required],


        });
    }

    public salvar() {
        if (this.form.invalid) {
            return;
        }
        this.fornecedorService.save(this.fornecedor).subscribe((user) => {
            if (user) {
                this.router.navigate(["/principal"]);
            }

        },
            error => {

            }
        );
    }
}