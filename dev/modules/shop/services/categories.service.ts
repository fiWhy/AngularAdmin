import {BaseService, IBaseService} from '../../../core/base/service/base.service';
import {ICategory, Category} from '../entities/categories.entity';

export interface ICategoriesService extends IBaseService<ICategory> {

}

export class CategoriesService extends BaseService<ICategory>
    implements ICategoriesService {
    static $inject = ['CategoriesResource'];
    constructor(public repository) {
        super();
    }


}