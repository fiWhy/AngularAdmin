import {ISlide, Slide} from '../entities/slide';
import {IListResponse, ISingleResponse} from '../../../core/entity/r.entity';
import {IConditions} from '../../../core/entity/conditions.entity';

interface ISliderResourceAccess {
}

interface ISliderResource extends ng.resource.IResourceClass<ISlide> {
}

export class SliderResource implements ISliderResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <ISliderResource>$resource(config.mainPaths.slide, {}, {
            "query": {
                "method": "GET",
                "isArray": false
            },
            "put": {
                "method": "PUT"
            }
        });
    }
}