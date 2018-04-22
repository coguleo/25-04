import { Marca } from './marca';
import { Fornecedor } from './Fornecedor';
import {AbstractEntity} from './abstractentity';

export class Produto extends AbstractEntity {

    public nome:String;
    public descricao:String;
    public unidade:Number;
    public embalagem:String;
    public valor:Number;
    public datacadastro:Date;
    public observacoes:String;
    public fornecedor:Fornecedor;
    public marca:Marca;


}