import { Marca } from './../model/marca';
import { Produto } from './../model/produto';
import {Injectable} from '@angular/core';
import { Usuario }from './../model/usuario';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AbstractService } from "./abstract-service";

@Injectable()
export class MarcaService extends AbstractService<Marca> {



    constructor (public http: Http ){
        super(http);

    }

    public getWebService(){
        return "marca";
    }

    public buscarPorNome(nome): Observable<Array<Marca>> {
        return this.http.post(this.urlWeb+"/buscarpornome", nome).map(res => {
          return res.json();
        });
      }

    

}