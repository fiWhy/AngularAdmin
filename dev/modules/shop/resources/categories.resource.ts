import {ICategory, ICategoryList} from '../entities/categories.entity';
import {IListResponse, ISingleResponse} from '../../../core/entity/r.entity';
import {IConditions} from '../../../core/entity/conditions.entity';

interface ICategoriesResourceAccess {
}

interface ICategoriesResource extends ng.resource.IResourceClass<ICategory | ICategoryList> {
}

export class CategoriesResource implements ICategoriesResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <ICategoriesResource>$resource(config.mainPaths.category, {}, {
            "query": {
                "method": "GET",
                "isArray": false
            },
            "put": {
                "method": "PUT"
            }
        });
    }
}