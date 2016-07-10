import {IPagination} from '../../entity/r.entity';
import {IBreadcrump} from '../../entity/breadcrumps.entity'; 
export interface IListController<T> {
    breadcrumps?: Array<IBreadcrump>;
    service;
    list: Array<T>;
    loadMore: boolean;
    pagination: IPagination;
    conditions;
}
export class ListController<T> implements IListController<T> {
    public breadcrumps;
    public service;
    public list;
    public loadMore = false;
    public pagination;
    public conditions;
    constructor() {
        this.conditions = {
        }
    }

    load(refresh?: boolean) {
        if (this.loadMore || refresh) {
            this.loadMore = false;

            return this.service.getList(this.conditions).then((response) => {
                this.list = refresh ? response.data : this.list.concat(response.data);
                if (this.pagination) {
                    this.pagination = response.meta.pagination;
                    if (this.pagination.current_page < this.pagination.total_pages)
                        this.loadMore = true;
                }
            });
        }
    }

    changePage(page: number, reload: boolean = true) {
        this.conditions.page = page;
        this.load(reload);
    }

    search() {
        this.conditions.page = 1;
        this.load(true);
    }
    
}