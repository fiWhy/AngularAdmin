import {ILanguage, ILanguagesList} from '../entities/languages.entity';
import {IListResponse, ISingleResponse} from '../../../entity/r.entity';
import {IConditions} from '../../../entity/conditions.entity';

interface ILanguagesResourceAccess {
}

interface ILanguagesResource extends ng.resource.IResourceClass<ILanguage| ILanguagesList> {
}

export class LanguagesResource implements ILanguagesResourceAccess {
    static $inject = ['$resource', 'config'];
    constructor($resource: ng.resource.IResourceService, config) {
        return $resource(config.mainPaths.languages, {});
    }
}