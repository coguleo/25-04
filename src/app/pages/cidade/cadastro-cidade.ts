import { CidadeService } from './../../services/cidade-service';
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
    selector: "cadastro-cidade",
    styleUrls: ['./cadastro-cidade.scss'],
    templateUrl: 'cadastro-cidade.html',
    providers: [CidadeService]
})
export class CidadeCadastro {

    public cidade: Cidade = new Cidade();

    private router: Router;
    private form: FormGroup;

    //UsuarioService ->Objeto para realizar 
    //requisições ao servidor
    constructor(private cidadeService: CidadeService,
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
        this.cidadeService.save(this.cidade).subscribe((user) => {
            if (user) {
                this.router.navigate(["/principal"]);
            }

        },
            error => {

            }
        );
    }
}