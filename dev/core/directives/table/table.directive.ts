import {ITableDirectiveService, TableDirectiveService } from './services/table.directive.service';
import {PaginationDirectiveService, IPaginationDirectiveService } from './services/pagination.directive.service';
import {Table} from './table';
import {TableBody} from './table.body';
import {Pagination} from './pagination';

angular.module('app.core.directives.table', [])
    .service('TableDirectiveService', TableDirectiveService)
    .service('PaginationDirectiveService', PaginationDirectiveService)
    .directive('tableWidget', config => new Table(config))
    .directive('tableBodyWidget', config => new TableBody(config))
    .directive('pagination', (config, $templateRequest) => new Pagination(config, $templateRequest));