import { Fornecedor } from './Fornecedor';
import {AbstractEntity} from './abstractentity';

export class Compra extends AbstractEntity {


    public datecompra:Date;
    public dataentrega:Date;
    public fornecedor:Fornecedor;



}