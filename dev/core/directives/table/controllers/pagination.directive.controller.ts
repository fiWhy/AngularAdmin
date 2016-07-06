import {IPaginationDirectiveService, PaginationDirectiveService} from '../services/pagination.directive.service';
import {IPaginationScope} from '../entities/pagination.scope.entity';

export class PaginationDirectiveController {
    static $inject = ['$scope', 'PaginationDirectiveService'];
    public items;
    constructor(private $scope: IPaginationScope, private PaginationDirectiveService: IPaginationDirectiveService) {
        $scope.$watch('currentPage', (oldVal, newVal) => {
            if ($scope.totalItems && $scope.currentPage && $scope.pageSize) {
                this.items = PaginationDirectiveService.calculatePages($scope.totalItems, $scope.currentPage, $scope.pageSize);
            }
        });
    }

    handleChange(page: number) {
        this.$scope.changePage({
            page: page
        });
    }
}