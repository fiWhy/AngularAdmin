import {ListController} from '../../../core/base/controller/list.controller';
import {ISliderService} from '../services/slider.service';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';
import {ISlide, Slide} from '../entities/slide';

export class SliderController extends ListController<ISlide> {
    static $inject = ['SliderService', 'SweetAlertService'];

    constructor(
        public service: ISliderService,
        public alertService
    ) {
        super();
        this.setBreadcrumps();
        this.load(true);
    }
    
    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список слайдов', 'slider.list')
        ];
    }
}