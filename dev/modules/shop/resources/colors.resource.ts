import {IColor, IColorList} from '../entities/colors.entity';
import {IListResponse, ISingleResponse} from '../../../core/entity/r.entity';
import {IConditions} from '../../../core/entity/conditions.entity';

interface IColorsResourceAccess {
}

interface IColorsResource extends ng.resource.IResourceClass<IColor | IColorList> {
}

export class ColorsResource implements IColorsResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return <IColorsResource>$resource(config.mainPaths.color, {}, {
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