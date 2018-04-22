import { Cliente } from './cliente';
import {AbstractEntity} from './abstractentity';

export class ContaReceber extends AbstractEntity {

    public valor:Number;
    public multa:Number;
    public juros:Number;
    public vlrpendente:Number;
    public desconto:Number;
    public vlrtotal:Number;
    public datapagamento:Date;
    public vencimento:Date;
    public codcontapai:Number;
    public cliente:Cliente;


}