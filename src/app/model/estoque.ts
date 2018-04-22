import { Produto } from './Produto';
import {AbstractEntity} from './abstractentity';

export class Estoque extends AbstractEntity {

    public estoquemaximo:Number;
    public estoqueminimo:Number;
    public qtdestoque:Number;
    public produto:Produto;

}