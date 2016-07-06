import {LanguagesResource} from './resources/languages.resource';
import {ILanguagesList} from './entities/languages.entity';
export interface ILanguagesService {
    getLanguages(): ng.IPromise<ILanguagesList>;
}

export class LanguagesService
    implements ILanguagesService {
    public static $inject = ['LanguagesResource'];
    constructor(private LanguagesResource) {
        console.log('asd'); 
    }

    public getLanguages(): ng.IPromise<ILanguagesList> {
        return this.LanguagesResource.get().$promise;
    }
    
}

angular.module('app.core.services.languages', [])
    .service('LanguagesService', LanguagesService)
    .service('LanguagesResource', LanguagesResource);