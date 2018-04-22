import { Fornecedor } from './../model/fornecedor';
import { Cliente } from './../model/cliente';
import { Marca } from './../model/marca';
import { Produto } from './../model/produto';
import {Injectable} from '@angular/core';
import { Usuario }from './../model/usuario';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AbstractService } from "./abstract-service";

@Injectable()
export class FornecedorService extends AbstractService<Fornecedor> {



    constructor (public http: Http ){
        super(http);

    }

    public getWebService(){
        return "fornecedores";
    }

    public buscarPorNome(nome): Observable<Array<Fornecedor>> {
        return this.http.post(this.urlWeb+"/buscarpornome", nome).map(res => {
          return res.json();
        });
      }

    

}