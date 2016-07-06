import {IMenuDirectiveServiceProviderInterface} from '../../../core/directives/menu/provider/menu.directive.service.provider';

bootstrap.$inject = ['MenuDirectiveServiceProvider', '$stateProvider'];
export function bootstrap(
    MenuDirectiveServiceProvider: IMenuDirectiveServiceProviderInterface,
    $stateProvider: ng.ui.IStateProvider
) {
    MenuDirectiveServiceProvider.setMenuItem('Продукты', '', 'products.list');
    $stateProvider
        .state('products', {
            url: "/products",
            abstract: true,
            template: '<ui-view/>'
        }).state('products.list', {
            url: "/list",
            controller: 'ProductsController',
            controllerAs: 'products',
            templateUrl: "./app/modules/shop/templates/products/list.html"
        }).state('products.create', {
            url: "/create",
            controller: 'ProductsCreateController',
            controllerAs: 'productsCreate',
            templateUrl: "./app/modules/shop/templates/products/add.html"
        }).state('products.update', {
            url: "/:id",
            controller: 'ProductsUpdateController',
            controllerAs: 'productsUpdate',
            templateUrl: "./app/modules/shop/templates/products/edit.html"
        });
};