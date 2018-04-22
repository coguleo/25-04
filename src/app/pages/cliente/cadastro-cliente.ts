import { Cliente } from './../../model/cliente';
import { ClienteService } from './../../services/cliente-service';
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
    selector: "cadastro-cliente",
    styleUrls: ['./cadastro-cliente.scss'],
    templateUrl: 'cadastro-cliente.html',
    providers: [ClienteService]
})
export class ClienteCadastro {

    public cliente: Cliente = new Cliente();

    private router: Router;
    private form: FormGroup;

    //UsuarioService ->Objeto para realizar 
    //requisições ao servidor
    constructor(private clienteService: ClienteService,
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
            cidade: [null, Validators.required],
            endereco: [null, Validators.required],
            cep: [null, Validators.required],

        });
    }

    public salvar() {
        if (this.form.invalid) {
            return;
        }
        this.clienteService.save(this.cliente).subscribe((user) => {
            if (user) {
                this.router.navigate(["/principal"]);
            }

        },
            error => {

            }
        );
    }
}