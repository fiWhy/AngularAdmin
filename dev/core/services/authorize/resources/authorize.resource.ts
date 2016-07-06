import {IUserEntity, UserEntity} from '../../../entity/user.entity';
import {IAuthorizeEntity, AuthorizeEntity} from '../entity/authorize.entity';

interface IAuthorizeAccessResource {
}

interface IAuthorizeResource
    extends ng.resource.IResourceClass<ng.resource.IResource<IUserEntity | IAuthorizeEntity>>{
    login;
    reset;
}

export class AuthorizeResource
    implements IAuthorizeAccessResource {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <IAuthorizeResource> $resource(config.mainPaths.authorize, {}, {
            'login': {
                method: 'POST',
                isArray: false
            },
            'reset': {
                method: 'POST',
                params: {
                    action: 'reset'
                },
                isArray: false
            }
        });
    }
}