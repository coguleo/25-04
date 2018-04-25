import { Usuario } from './../../model/usuario';
import { Cidade } from './../../model/cidade';
import { Component } from '@angular/core';
import { UsuarioService } from './../../services/usuarioservice';
import { Router } from '@angular/router';
import {
    FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';

@Component({
    selector: "cadastro-usuario",
    styleUrls: ['./cadastro-usuario.scss'],
    templateUrl: 'cadastro-usuario.html',
    providers: [UsuarioService]
})
export class UsuarioCadastro {

    public usuario: Usuario = new Usuario();

    private router: Router;
    private form: FormGroup;
    public nome: string;
    public senha: string;
    public email: string;
    public celular: string;
    public cidade: Cidade;

    //UsuarioService ->Objeto para realizar 
    //requisições ao servidor
    constructor(private usuarioService: UsuarioService,
        router: Router, private formBuilder: FormBuilder) {
        //objeto para realizar a navegação entre paginas
        this.router = router;
        //criando o form para validação 
        //dos componentes na tela
        this.form = formBuilder.group({
            nome: [null, Validators.required],
            senha: [null, Validators.required],
            email: [null, Validators.required],
            celular: [null, Validators.required]
        });
    }

    public salvar() {
        if (this.form.invalid) {
            return;
        }
        this.usuarioService.save(this.usuario).subscribe((user) => {
            if (user) {
                this.router.navigate(["/principal"]);
            }

        },
            error => {

            }
        );
    }
}