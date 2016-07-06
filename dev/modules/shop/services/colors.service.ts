import {BaseService, IBaseService} from '../../../core/base/service/base.service';
import {IColor, Color} from '../entities/colors.entity';

export interface IColorsService extends IBaseService<IColor> {

}

export class ColorsService extends BaseService<IColor>
    implements IColorsService {
    static $inject = ['ColorsResource'];
    constructor(public repository) {
        super();
    }


}