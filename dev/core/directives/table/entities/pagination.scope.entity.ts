export interface IPaginationScope extends ng.IScope {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    changePage: any;
}