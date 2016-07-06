import {TableDirectiveController} from './controllers/table.directive.controller';
export class Table {
    public restrict = 'A';
    public controller = TableDirectiveController;
    public controllerAs = 'tableController';
    public templateUrl: string;
    public transclude = true;
    public scope;

    constructor(config) {
        this.templateUrl = config.documentRoot + '/core/directives/table/templates/table.html';
        this.setScope();
    }

    public setScope() {
        this.scope = {
            titles: '=',
            titleTranslate: '='
        }
    }

    public link(scope, element, attrs, ctrl, transclude) {
        transclude(scope.$parent, function (clone, scope) {
            element.append(clone);
        });
    }
}