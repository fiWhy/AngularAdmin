import {IPost, IPostsList} from '../entities/posts.entity';
import {IListResponse, ISingleResponse} from '../../../core/entity/r.entity';
import {IConditions} from '../../../core/entity/conditions.entity';

interface IPostTypesResourceAccess {
}

interface IPostTypesResource extends ng.resource.IResourceClass<IPost | IPostsList> {
}

export class PostTypesResource implements IPostTypesResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <IPostTypesResource>$resource(config.mainPaths.postTypes, {}, {
            "query": {
                "method": "GET",
                "isArray": false
            }
        });
    }
}