import {UpdateController} from '../../../core/base/controller/update.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';
import {ISlide, Slide} from './entities/slide';
import {ISliderService} from '../services/slider.service';


export class SliderUpdateController extends UpdateController<ISlide> {
    static $inject = ['SliderService', '$state', 'SweetAlertService'];
    constructor(
        public service: ISliderService,
        public $state: ng.ui.IStateService,
        private SweetAlertService
    ) {
        super();
        this.load($state.params['id']);
    }

    public update() {
        super.update()
            .then((res) => {
                this.SweetAlertService.setOptions({
                    title: 'Обновлено!',
                    text: 'Запись успешно обновлена'
                });
                this.SweetAlertService.showAlert();
            })
    }
}