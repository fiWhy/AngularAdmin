import {ElfinderController} from './controllers/elfinder.controller';
import {EditorService} from './services/editor.service';
import {EditorProvider} from './providers/editor.provider';

class ElfinderDirective implements ng.IDirective {
    public restrict = 'E';
    public controller = ElfinderController;
    public controllerAs = 'elf';
    public templateUrl: string;
    public transclude = true;
    public scope = {
        model: '=',
        callback: '&'
    }

    constructor(config) {
        this.templateUrl = config.documentRoot + '/core/directives/editor/templates/elfinder.directive.html';
    }
}

angular.module('app.core.directives.elfinder', [])
    .directive('elfinder', (config) => new ElfinderDirective(config))
    .service('EditorServiceImplementation', EditorService)
    .provider('EditorService', EditorProvider);