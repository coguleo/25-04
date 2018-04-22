import { Produto } from './../model/produto';
import {Injectable} from '@angular/core';
import { Usuario }from './../model/usuario';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AbstractService } from "./abstract-service";

@Injectable()
export class ProdutoService extends AbstractService<Produto> {



    constructor (public http: Http ){
        super(http);

    }

    public getWebService(){
        return "produto";
    }

    

}