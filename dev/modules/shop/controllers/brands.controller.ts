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
        public alertService
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
                this.alertService.setOptions({
                    title: 'Создано!',
                    text: 'Запись успешно создана'
                });
                this.alertService.showAlert();
                this.list.push(new Brand(res.data));
            });
    }

    private getImage(file) {
        this.item.image = '/' + file.path;
    }
    
}