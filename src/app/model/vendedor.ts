import { Cidade } from './cidade';
import {AbstractEntity} from './abstractentity';

export class Vendedor extends AbstractEntity {

    public nome:String;
    public cpf:String;
    public rg:String;
    public telefone:String;
    public email:String;
    public endereco:String;
    public bairro:String;
    public cep:String;
    public datanascimento:Date;
    public dataadmissao:Date;
    public cidade:Cidade;

}