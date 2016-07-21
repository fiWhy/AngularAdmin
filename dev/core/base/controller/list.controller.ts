import {IPagination} from '../../entity/r.entity';
import {IBreadcrump} from '../../entity/breadcrumps.entity'; 
export interface IListController<T> {
    breadcrumps?: Array<IBreadcrump>;
    service;
    list: Array<T>;
    loadMore: boolean;
    pagination: IPagination;
    conditions;
    alertService;
}
export class ListController<T> implements IListController<T> {
    public breadcrumps;
    public service;
    public list;
    public loadMore = false;
    public pagination;
    public conditions;
    public alertService;
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

    public update(index) {
        this.service.update(this.list[index].id, this.list[index])
            .then(res => {
                this.alertService.setOptions({
                    title: 'Обновлено!',
                    text: 'Запись успешно обновлена'
                });
                this.alertService.showAlert();
            });
    }

    public removeItem(index: number) {
        this.alertService.setOptions({
            title: 'Вы уверены?',
            text: 'Вы не сможете восстановить эту запись!',
            type: "warning",
            showCancelButton: true,
        })
        this.alertService.showAlert((res) => {
            if (res) {
                this.service.delete(this.list[index].id)
                    .then((res) => {
                        this.list.splice(index, 1);
                        this.alertService.setOptions({
                            title: 'Удалено!',
                            text: 'Запись успешно удалена'
                        });
                        this.alertService.showAlert();
                    });
            }
        });
    }
    
}