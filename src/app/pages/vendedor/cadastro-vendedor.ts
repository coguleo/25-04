import { Vendedor } from './../../model/vendedor';
import { Cliente } from './../../model/cliente';
import { VendedorService } from './../../services/vendedor-service';
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
    selector: "cadastro-vendedor",
    styleUrls: ['./cadastro-vendedor.scss'],
    templateUrl: 'cadastro-vendedor.html',
    providers: [VendedorService]
})
export class VendedorCadastro {

    public vendedor: Vendedor = new Vendedor();

    private router: Router;
    private form: FormGroup;

    //UsuarioService ->Objeto para realizar 
    //requisições ao servidor
    constructor(private vendedorService: VendedorService,
        router: Router, private formBuilder: FormBuilder) {
        //objeto para realizar a navegação entre paginas
        this.router = router;
        //criando o form para validação 
        //dos componentes na tela
        this.form = formBuilder.group({
            nome: [null, Validators.required],
            cpf: [null, Validators.required],
            rg: [null, Validators.required],
            telefone: [null, Validators.required],
            email: [null, Validators.required],
            endereco: [null, Validators.required],
            bairro: [null, Validators.required],
            cep: [null, Validators.required],
            dataadmissao: [null, Validators.required],
            cidade: [null, Validators.required],

        });
    }

    public salvar() {
        if (this.form.invalid) {
            return;
        }
        this.vendedorService.save(this.vendedor).subscribe((user) => {
            if (user) {
                this.router.navigate(["/principal"]);
            }

        },
            error => {

            }
        );
    }
}