import {PaginationDirectiveController} from './controllers/pagination.directive.controller';


export class Pagination {
    public restrict = 'E';
    public controller = PaginationDirectiveController;
    public controllerAs = 'pagination';
    public scope;

    constructor(private config, $templateRequest) {
        this.scope = {
            totalItems: '=',
            currentPage: '=',
            pageSize: '=',
            changePage: '&'
        }

    }


    public templateUrl(elem, attr) {
        var srcExp = attr.template;
        if (srcExp) {
            return this.config.documentRoot + srcExp;
        } else {
            return this.config.documentRoot + '/core/directives/table/templates/pagination.html';
        }
    }
    
}