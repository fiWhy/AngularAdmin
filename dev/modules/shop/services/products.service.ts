import {BaseService, IBaseService} from '../../../core/base/service/base.service';
import {IProduct, Product} from '../entities/products.entity';

export interface IProductService extends IBaseService<IProduct> {

}

export class ProductsService extends BaseService<IProduct> {
    static $inject = ['ProductsResource'];
    constructor(public repository) {
        super();
    }
}