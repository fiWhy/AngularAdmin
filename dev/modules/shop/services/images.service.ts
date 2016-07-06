import {BaseService, IBaseService} from '../../../core/base/service/base.service';
import {IImage, Image} from '../entities/images.entity';

export interface IImagesService extends IBaseService<IImage> {

}

export class ImagesService extends BaseService<IImage>
    implements IImagesService {
    static $inject = ['ImagesResource'];
    constructor(public repository) {
        super();
    }


}