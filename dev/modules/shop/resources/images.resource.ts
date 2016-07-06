import {IBrand, IBrandList} from '../entities/brands.entity';
import {IListResponse, ISingleResponse} from '../../../core/entity/r.entity';
import {IConditions} from '../../../core/entity/conditions.entity';

interface IBrandsResourceAccess {
}

interface IBrandsResource extends ng.resource.IResourceClass<IBrand | IBrandList> {
}

export class ImagesResource implements IBrandsResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <IBrandsResource>$resource(config.mainPaths.image, {}, {
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