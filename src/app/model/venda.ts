import { Vendedor } from './Vendedor';
import { CondPagamento } from './condpagamento';
import { Cliente } from './cliente';
import {AbstractEntity} from './abstractentity';

export class Venda extends AbstractEntity {

    public cliente:Cliente;
    public condpagamento:CondPagamento;
    public vendedor:Vendedor;
    public datavenda: Date;

}

