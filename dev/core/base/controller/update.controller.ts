import {IBreadcrump} from '../../entity/breadcrumps.entity'; 
export interface IUpdateControllerInterface<T> {
    breadcrumps?: Array<IBreadcrump>
    service;
    item: T;
    update(id: number, data: T);
    load(id: number);
}

export class UpdateController<T> implements IUpdateControllerInterface<T> {
    public breadcrumps;
    public service;
    public item: T;

    update() {
        return this.service.update(this.item['id'], this.item);
    }

    load(id) {
        this.service.get(id).then((response) => {
            this.item = response.data;
        });
    }
}