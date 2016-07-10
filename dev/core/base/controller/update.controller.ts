import {IBreadcrump} from '../../entity/breadcrumps.entity'; 
export interface IUpdateControllerInterface<T> {
    breadcrumps?: Array<IBreadcrump>
    conditions;
    service;
    item: T;
    update(id: number, data: T);
    load(id: number, conditions?);
}

export class UpdateController<T> implements IUpdateControllerInterface<T> {
    public breadcrumps;
    public service;
    public item: T;
    public conditions;

    update() {
        return this.service.update(this.item['id'], this.item);
    }

    load(id) {
        this.service.get(id, this.conditions).then((response) => {
            this.item = response.data;
        });
    }
}