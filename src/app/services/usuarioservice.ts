import {Injectable} from '@angular/core';
import { Usuario }from './../model/usuario';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AbstractService } from "./abstract-service";

@Injectable()
export class UsuarioService extends AbstractService<Usuario> {



    constructor (public http: Http ){
        super(http);

    }

    public getWebService(){
        return "usuario";
    }
     
    public logar(login:string, senha:string):Observable<any> {
        let header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearch = new URLSearchParams();
        urlSearch.append('email', login);
        urlSearch.append('senha', senha);
        let body = urlSearch.toString();
        let requestOptions =  new RequestOptions({
            headers:header
        });
        return this.http.post(this.urlWeb + '/logar',body, requestOptions ); 
    }

    

}