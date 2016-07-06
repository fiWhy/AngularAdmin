import {IMenuDirectiveServiceProviderInterface} from '../../../core/directives/menu/provider/menu.directive.service.provider';

postsBootstrap.$inject = ['MenuDirectiveServiceProvider', '$stateProvider'];

export function postsBootstrap(MenuDirectiveServiceProvider: IMenuDirectiveServiceProviderInterface, $stateProvider) {
    MenuDirectiveServiceProvider.setMenuItem('Посты', '', 'posts.list');
    $stateProvider
        .state('posts', {
            url: "/posts",
            abstract: true,
            template: '<ui-view/>'
        }).state('posts.list', {
            url: "/list",
            controller: 'PostsController',
            controllerAs: 'posts',
            templateUrl: "./app/modules/posts/templates/list.html"
        }).state('posts.create', {
            url: "/create",
            controller: 'PostsCreateController',
            controllerAs: 'postsCreate',
            templateUrl: "./app/modules/posts/templates/add.html"
        }).state('posts.update', {
            url: "/:id",
            controller: 'PostsUpdateController',
            controllerAs: 'postsUpdate',
            templateUrl: "./app/modules/posts/templates/edit.html"
        });
}