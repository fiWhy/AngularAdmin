import {ListController, IListController} from '../../../../core/base/controller/list.controller';
import {Breadcrump} from '../../../../core/entity/breadcrumps.entity';
import {ICategory, Category} from '../../entities/categories.entity';
import {ICategoriesService} from '../../services/categories.service';

export class CategoriesController extends ListController<ICategory>
    implements IListController<ICategory> {
    static $inject = ['CategoriesService', 'SweetAlertService'];
    constructor(
        public service: ICategoriesService,
        private SweetAlertService
    ) {
        super();
        this.setBreadcrumps();
        this.load();
    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список продуктов', 'products.list'),
            new Breadcrump('Список категорий', 'products.categories'),
        ];
    }

    public load() {
        return this.service.getList({
            'justParents': true
        })
            .then((response) => {
                this.list = response.data;
            });
    }


    public removeItem(index: number) {
        this.SweetAlertService.setOptions({
            title: 'Вы уверены?',
            text: 'Вы не сможете восстановить эту запись!',
            type: "warning",
            showCancelButton: true,
        })
        this.SweetAlertService.showAlert((res) => {
            if (res) {
                this.service.delete(this.list[index].id)
                    .then((res) => {
                        this.list.splice(index, 1);
                        this.SweetAlertService.setOptions({
                            title: 'Удалено!',
                            text: 'Запись успешно удалена'
                        });
                        this.SweetAlertService.showAlert();
                    });
            }
        });
    }
}