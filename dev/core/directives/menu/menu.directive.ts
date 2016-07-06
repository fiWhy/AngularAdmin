import {IMenuEntity} from './entities/menu.entity';
import {MenuDirectiveController} from './controllers/menu.directive.controller';
import {MenuDirectiveServiceProvider} from './provider/menu.directive.service.provider';
import {MenuDirectiveServiceImplementation, IMenuDirectiveServiceImplementation} from './services/menu.directive.service';

export interface IMenuDirective
    extends ng.IDirective {
    
}

export class MenuDirective
    implements IMenuDirective {
    public static $inject = ['config'];
    public restrict = 'E';
    public controller = MenuDirectiveController;
    public controllerAs = 'menuDirective';
    public templateUrl: string;

    constructor(config) {
        this.templateUrl = config.documentRoot + '/core/directives/menu/templates/menu.html';
    }
}


export default angular.module('app.core.directives.menu', [])
    .service('MenuDirectiveServiceImplementation', MenuDirectiveServiceImplementation)
    .provider('MenuDirectiveService', MenuDirectiveServiceProvider)
    .directive('menuWidget', (config) => new MenuDirective(config));