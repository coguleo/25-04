import { Produto } from './Produto';
import { Compra } from './compra';
import {AbstractEntity} from './abstractentity';

export class ItensCompra extends AbstractEntity {

    public vlrunitario:Number;
    public vlrtotal:Number;
    public quantidade:Number;
    public compra:Compra;
    public produto:Produto;

}