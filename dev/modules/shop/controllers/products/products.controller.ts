import {ListController, IListController} from '../../../../core/base/controller/list.controller';
import {Breadcrump} from '../../../../core/entity/breadcrumps.entity';
import {IProduct, Product} from '../../entities/products.entity';
import {IProductService} from '../../services/products.service';

export class ProductsController extends ListController<IProduct>
    implements IListController<IProduct> {
    static $inject = ['ProductsService', 'SweetAlertService'];
    constructor(
        public service,
        private SweetAlertService
    ) {
        super();
        this.setBreadcrumps();
        this.conditions = {
            "include": "colors,sizes,images,brand"
        };

        this.load(true);
    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список продуктов', 'products.list')
        ];
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
                        this.changePage(this.pagination.current_page, true);
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