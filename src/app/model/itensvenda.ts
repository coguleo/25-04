import { Venda } from './Venda';
import { Produto } from './Produto';
import {AbstractEntity} from './abstractentity';

export class ItensVenda extends AbstractEntity {

    public vlrunitario:Number;
    public valortotal:Number;
    public quantidade:Number;
    public produto:Produto;
    public venda:Venda;


}