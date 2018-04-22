import { Cidade } from './cidade';
import {AbstractEntity} from './abstractentity';

export class Cliente extends AbstractEntity {

    public nome:String;
    public cpf:String;
    public rg:String;
    public telefone:String;
    public cidade:Cidade;
    public endereco:String;
    public bairro:String;
    public cep:String;
    public datanascimento:Date;
    

}