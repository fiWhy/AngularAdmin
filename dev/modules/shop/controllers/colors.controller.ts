import {ListController, IListController} from '../../../core/base/controller/list.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';
import {IColor, Color} from '../entities/colors.entity';
import {IColorsService} from '../services/colors.service';

export class ColorsController extends ListController<IColor>
    implements IListController<IColor> {
    static $inject = ['ColorsService', 'SweetAlertService'];
    private item: IColor;
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
            new Breadcrump('Цвета продуктов', 'products.colors')
        ];
    }

    private prepareItem() {
        this.item = new Color({ 
            hex: ''
        });
    }

    private create() {
        this.service.create(this.item)
            .then(res => {
                this.SweetAlertService.setOptions({
                    title: 'Создано!',
                    text: 'Запись успешно создана'
                });
                this.SweetAlertService.showAlert();
                this.list.push(new Color(res.data));
            });
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