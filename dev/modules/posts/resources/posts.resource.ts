import {IPost, IPostsList} from '../entities/posts.entity';
import {IListResponse, ISingleResponse} from '../../../core/entity/r.entity';
import {IConditions} from '../../../core/entity/conditions.entity';

interface IPostsResourceAccess {
}

interface IPostsResource extends ng.resource.IResourceClass<IPost | IPostsList> {
}

export class PostsResource implements IPostsResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <IPostsResource>$resource(config.mainPaths.posts, {}, {
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