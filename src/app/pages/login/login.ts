import { Component }from '@angular/core';
import { UsuarioService }
     from './../../services/usuarioservice';
import { FormBuilder, FormGroup, Validators, FormControl
     } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector:'login',
    templateUrl:'./login.html',
    styleUrls:['./login.scss'],
    providers: [ UsuarioService ]
})
export class Login {

    private router:Router;
    private form:FormGroup;
    public login:string;
    public senha:string;
    
    //UsuarioService ->Objeto para realizar 
    //requisições ao servidor
    constructor( private usuarioService: UsuarioService,
        router:Router, private formBuilder: FormBuilder ){
        //objeto para realizar a navegação entre paginas
        this.router = router;
        //criando o form para validação 
        //dos componentes na tela
        this.form = formBuilder.group({
            login:[ null, Validators.required],
            senha:[ null, Validators.required]
        });
    }

    public logar(){
        if (this.form.invalid ){
            return;
        }
        this.usuarioService.logar(this.login, this.senha).subscribe(
            (usuario) => {
                this.router.navigate(["/principal"]);
                localStorage.setItem('usuario', usuario);
            },
            error=>{

            }
        );
    }
}