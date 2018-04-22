import { MarcaService } from './../../services/marcaservice';
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
    selector: "cadastro-marca",
    styleUrls: ['./cadastro-marca.scss'],
    templateUrl: 'cadastro-marca.html',
    providers: [MarcaService]
})
export class MarcaCadastro {

    public marca: Marca = new Marca();

    private router: Router;
    private form: FormGroup;

    //UsuarioService ->Objeto para realizar 
    //requisições ao servidor
    constructor(private marcaService: MarcaService,
        router: Router, private formBuilder: FormBuilder) {
        //objeto para realizar a navegação entre paginas
        this.router = router;
        //criando o form para validação 
        //dos componentes na tela
        this.form = formBuilder.group({
            nome: [null, Validators.required],

        });
    }

    public salvar() {
        if (this.form.invalid) {
            return;
        }
        this.marcaService.save(this.marca).subscribe((user) => {
            if (user) {
                this.router.navigate(["/principal"]);
            }

        },
            error => {

            }
        );
    }

    public excluir() {
        if (this.form.invalid) {
            return;
        }
        this.marcaService.remove(this.marca.id).subscribe((user) => {
            if (user) {
                this.router.navigate(["principal"]);
            }
        },

        error => {

        }
    );

}

}