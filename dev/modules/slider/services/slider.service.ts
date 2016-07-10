import {BaseService, IBaseService} from '../../../core/base/service/base.service';
import {ISlide, Slide} from '../entities/slide';

export interface ISliderService extends IBaseService<ISlide> {

}

export class SliderService extends BaseService<ISlide>
    implements ISliderService {
    static $inject = ['SliderResource'];
    constructor(public repository) {
        super();
    }
}