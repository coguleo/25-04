
import { Observable } from 'rxjs/Observable';
import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/RX';

import {
  Router, Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras
} from '@angular/router';

@Injectable()
export abstract class AbstractService<T>{

  protected protocolo: string = 'http';
  public ip: string = 'localhost';
  public porta: string = '8085';
  protected contextBase: string = 'EstoquePlus/rest/';
  protected urlBase: string = this.protocolo + '://' + this.ip + ':' + this.porta + '/' + this.contextBase;
  protected urlWeb:string = '';
 
  constructor( protected http: Http) {
    this.urlWeb = this.urlBase + this.getWebService();
  }

  public abstract getWebService():string;

  public findAll(): Observable<Array<T>> {
    return this.http.get(this.urlWeb).map(res => {
      return res.json();
    });
  }

  public findById(id: number): Observable<T> {
    return this.http.get(this.urlWeb + "/" + id).map(res => {
      return res.json();
    });
  }

  public remove(id: Number): Observable<T> {
    return this.http.delete(this.urlWeb + "/excluir" + id).map(res => {
      return res.json();
    });
  }

  public save(obj: T): Observable<T> {
    return this.http.post(this.urlWeb + "/salvar", obj).map(res => {
      return res.json();
    });
  }

}
