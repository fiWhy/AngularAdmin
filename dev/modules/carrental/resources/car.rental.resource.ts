import {ICarEntity} from '../entities/car.entity';

interface ICarRentalAccessResource {

}

export interface ICarRentalAccess
    extends ng.resource.IResourceClass<ng.resource.IResource<ICarEntity>> {
    patch;
    put;
    post;
}

export class CarRentalResource
    implements ICarRentalAccessResource {
    public static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <ICarRentalAccess> $resource(config.mainPaths.cars, {}, {
            'patch': {
                method: 'PATCH'
            },
            'put': {
                method: 'PUT'
            },
            'post': {
                method: 'POST'
            }   
        });
    }
}