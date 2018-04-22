import { Cliente } from './../model/cliente';
import { Marca } from './../model/marca';
import { Produto } from './../model/produto';
import {Injectable} from '@angular/core';
import { Usuario }from './../model/usuario';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AbstractService } from "./abstract-service";

@Injectable()
export class ClienteService extends AbstractService<Cliente> {



    constructor (public http: Http ){
        super(http);

    }

    public getWebService(){
        return "cliente";
    }

    public buscarPorNome(nome): Observable<Array<Cliente>> {
        return this.http.post(this.urlWeb+"/buscarpornome", nome).map(res => {
          return res.json();
        });
      }

    

}