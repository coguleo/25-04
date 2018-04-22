import { ProdutoService } from './../../services/produtoservice';
import { Produto } from './../../model/produto';
import { Usuario } from './../../model/usuario';
import { Cidade } from './../../model/cidade';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';

@Component({
    selector: "cadastro-produto",
    styleUrls: ['./cadastro-produto.scss'],
    templateUrl: 'cadastro-produto.html',
    providers: [ProdutoService]
})
export class ProdutoCadastro {

    public produto: Produto = new Produto();

    private router: Router;
    private form: FormGroup;

    //UsuarioService ->Objeto para realizar 
    //requisições ao servidor
    constructor(private produtoService: ProdutoService,
        router: Router, private formBuilder: FormBuilder) {
        //objeto para realizar a navegação entre paginas
        this.router = router;
        //criando o form para validação 
        //dos componentes na tela
        this.form = formBuilder.group({
            nome: [null, Validators.required],
            descricao: [null, Validators.required],
            unidade: [null, Validators.required],
            embalagem: [null, Validators.required],
            valor: [null, Validators.required],
            observacoes: [null, Validators.required],
            fornecedor: [null, Validators.required],
            marca: [null, Validators.required]

        });
    }

    public salvar() {
        if (this.form.invalid) {
            return;
        }
        this.produtoService.save(this.produto).subscribe((user) => {
            if (user) {
                this.router.navigate(["/principal"]);
            }

        },
            error => {

            }
        );
    }
}