import { Vendedor } from './../model/vendedor';
import { Cliente } from './../model/cliente';
import { Marca } from './../model/marca';
import { Produto } from './../model/produto';
import {Injectable} from '@angular/core';
import { Usuario }from './../model/usuario';
import { Observable  } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AbstractService } from "./abstract-service";

@Injectable()
export class VendedorService extends AbstractService<Vendedor> {



    constructor (public http: Http ){
        super(http);

    }

    public getWebService(){
        return "vendedor";
    }

    

}