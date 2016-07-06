class Breadcrumps implements ng.IDirective {
    public restrict = 'E';
    public scope = {
        items: '='
    }
    public templateUrl: string;
    constructor(config) {
        this.templateUrl = config.documentRoot + '/core/directives/breadcrumps/templates/index.html';
    }

    controller($scope) {
        console.log($scope);
    }

}

angular.module('app.core.directives.breadcrumps', [])
    .directive('breadcrumps', (config) => new Breadcrumps(config));