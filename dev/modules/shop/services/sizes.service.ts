import {BaseService, IBaseService} from '../../../core/base/service/base.service';
import {ISize, Size} from '../entities/sizes.entity';

export interface ISizesService extends IBaseService<ISize> {

}

export class SizesService extends BaseService<ISize>
    implements ISizesService {
    static $inject = ['SizesResource'];
    constructor(public repository) {
        super();
    }


}