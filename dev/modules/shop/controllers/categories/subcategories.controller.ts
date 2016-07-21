import {ListController, IListController} from '../../../../core/base/controller/list.controller';
import {Breadcrump} from '../../../../core/entity/breadcrumps.entity';
import {ICategory, Category} from '../../entities/categories.entity';
import {ICategoriesService} from '../../services/categories.service';

export class SubCategoriesController extends ListController<ICategory>
    implements IListController<ICategory> {
    static $inject = ['CategoriesService', 'SweetAlertService', '$state'];
    private item: ICategory;
    constructor(
        public service: ICategoriesService,
        private SweetAlertService,
        private $state: ng.ui.IStateService
    ) {
        super();
        this.setBreadcrumps();
        this.load();
    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список продуктов', 'products.list'),
            new Breadcrump('Список категорий', 'products.сategories'),
            new Breadcrump('Список подкатегорий', 'products.categories.sub')
        ];
    }

    public load() {
        return this.service.getList({
            'withoutParents': true,
            'categoryId': this.$state.params['id']
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