import {ListController, IListController} from '../../../core/base/controller/list.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';
import {IBrand, Brand} from '../entities/brands.entity';
import {IBrandsService} from '../services/brands.service';

export class BrandsController extends ListController<IBrand>
    implements IListController<IBrand> {
    static $inject = ['BrandsService', 'SweetAlertService'];
    private item: IBrand;
    constructor(
        public service,
        private SweetAlertService
    ) {
        super();
        this.setBreadcrumps();
        this.load(true);
        this.prepareItem();
    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список продуктов', 'products.list'),
            new Breadcrump('Бренды', 'products.colors')
        ];
    }

    private prepareItem() {
        this.item = new Brand({});
    }

    private create() {
        this.service.create(this.item)
            .then(res => {
                this.SweetAlertService.setOptions({
                    title: 'Создано!',
                    text: 'Запись успешно создана'
                });
                this.SweetAlertService.showAlert();
                this.list.push(new Brand(res.data));
            });
    }

    private getImage(file) {
        this.item.image = '/' + file.path;
    }

    private update(index) {
        this.service.update(this.list[index].id, this.list[index])
            .then(res => {
                this.SweetAlertService.setOptions({
                    title: 'Обновлено!',
                    text: 'Запись успешно обновлена'
                });
                this.SweetAlertService.showAlert();
            });
    }

    private removeItem(index: number) {
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