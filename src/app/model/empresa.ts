import { Cidade } from './cidade';
import {AbstractEntity} from './abstractentity';

export class Empresa extends AbstractEntity {

    public razaosocial:String;
    public nomefantasia:String;
    public cnpj:String;
    public insestadual:String;
    public cidade:Cidade;

}