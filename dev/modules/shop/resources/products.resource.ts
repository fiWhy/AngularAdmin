import {IProduct, IProductList} from '../entities/products.entity';
import {IListResponse, ISingleResponse} from '../../../core/entity/r.entity';
import {IConditions} from '../../../core/entity/conditions.entity';

interface IProductsResourceAccess {
}

interface IProductsResource extends ng.resource.IResourceClass<IProduct | IProductList> {
}

export class ProductsResource implements IProductsResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <IProductsResource>$resource(config.mainPaths.shop, {}, {
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