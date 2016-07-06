import {IBreadcrump} from '../../entity/breadcrumps.entity'; 

export interface ICreateController<T> {
    breadcrumps?: Array<IBreadcrump>
    service;
    item: T;
    create(data: T);
}

export class CreateController<T> implements ICreateController<T> {
    public breadcrumps;
    public service;
    public item;

    create() {
        return this.service.create(this.item);
    }
}