import {BaseService, IBaseService} from '../../../core/base/service/base.service';
import {IBrand, Brand} from '../entities/brands.entity';

export interface IBrandsService extends IBaseService<IBrand> {

}

export class BrandsService extends BaseService<IBrand>
    implements IBrandsService {
    static $inject = ['BrandsResource'];
    constructor(public repository) {
        super();
    }


}