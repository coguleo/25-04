import { Fornecedor } from './Fornecedor';
import {AbstractEntity} from './abstractentity';

export class ContaPagar extends AbstractEntity {

    public valortotal:Number;
    public desconto:Number;
    public codcontapai:Number;
    public juros:Number;
    public vlrpendente:Number;
    public datapagamento:Date;
    public fornecedor:Fornecedor;


}