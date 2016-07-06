import {ICarRentalAccess} from '../resources/car.rental.resource';
import {ICarEntity} from '../entities/car.entity';

export interface ICarRentalService {
    getList(): ng.IPromise<ICarEntity[]>;
    get(id: number): ng.IPromise<ICarEntity>;
    post(): ng.IPromise<ICarEntity>;
    patch(id: number): ng.IPromise<ICarEntity>;
    put(id: number): ng.IPromise<ICarEntity>;
    delete(id: number): ng.IPromise<ICarEntity|boolean>;
}

export class CarRentalService {
    public static $inject = ['CarRentalResource'];
    constructor(private CarRentalResource: ICarRentalAccess) {
    }

    public getList(): ng.IPromise<ICarEntity[]> {
        return this.CarRentalResource.query().$promise;
    }
    public get(id: number): ng.IPromise<ICarEntity> {
        return this.CarRentalResource.get(id).$promise;
    };
    public post(): ng.IPromise<ICarEntity> {
        return this.CarRentalResource.post().$promise;
    }
    public patch(id: number): ng.IPromise<ICarEntity> {
        return this.CarRentalResource.patch(id).$promise;
    }
    public put(id: number): ng.IPromise<ICarEntity> {
        return this.CarRentalResource.put(id).$promise;
    }
    public delete(id: number): ng.IPromise<ICarEntity | boolean> {
        return this.CarRentalResource.remove(id).$promise;

    }
}