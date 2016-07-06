import {PaginationDirectiveController} from './controllers/pagination.directive.controller';


export class Pagination {
    public restrict = 'E';
    public templateUrl: string;
    public controller = PaginationDirectiveController;
    public controllerAs = 'pagination';
    public scope;

    constructor(config) {
        this.scope = {
            totalItems: '=',
            currentPage: '=',
            pageSize: '=',
            changePage: '&'
        }

        this.templateUrl = config.documentRoot + '/core/directives/table/templates/pagination.html';
    }
    
}