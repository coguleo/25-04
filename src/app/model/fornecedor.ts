import { Cidade } from './cidade';
import {AbstractEntity} from './abstractentity';

export class Fornecedor extends AbstractEntity {

    public nome:String;
    public cnpj:String;
    public endereco:String;
    public bairro:String;
    public telefone:String;
    public fax:String;
    public cep:String;
    public email:String;
    public datacadastro:Date;
    public cidade:Cidade;


}