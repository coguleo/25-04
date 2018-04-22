import { AbstractEntity } from './abstractentity';
import {Cidade } from './cidade';

export class Usuario extends AbstractEntity {

    public nome:String;
    public email:string;
    public celular:String;
    public senha: string;

}
