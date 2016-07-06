import {ISize, ISizeList} from '../entities/sizes.entity';
import {IListResponse, ISingleResponse} from '../../../core/entity/r.entity';
import {IConditions} from '../../../core/entity/conditions.entity';

interface ISizesResourceAccess {
}

interface ISizesResource extends ng.resource.IResourceClass<ISize | ISizeList> {
}

export class SizesResource implements ISizesResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <ISizesResource>$resource(config.mainPaths.size, {}, {
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