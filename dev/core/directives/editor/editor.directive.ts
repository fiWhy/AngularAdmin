import {EditorController} from './controllers/editor.controller';
import {EditorService} from './services/editor.service';
import {EditorProvider} from './providers/editor.provider';

class EditorDirective implements ng.IDirective {
    public restrict = 'E';
    public controller = EditorController;
    public controllerAs = 'editor';
    public templateUrl: string;
    scope = {
        model: '='
    }

    constructor(config) {
        this.templateUrl = config.documentRoot + '/core/directives/editor/templates/editor.html';
    }
}

angular.module('app.core.directives.editor', [])
    .directive('editor', (config) => new EditorDirective(config))
    .service('EditorServiceImplementation', EditorService)
    .provider('EditorService', EditorProvider);