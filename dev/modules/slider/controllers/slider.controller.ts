import {ListController} from '../../../core/base/controller/list.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';
import {ISlide, Slide} from './entities/slide';

export class SliderController extends ListController<ISlide> {
    static $inject = [];

    constructor() {
        super();
        this.load(true);
    }
}