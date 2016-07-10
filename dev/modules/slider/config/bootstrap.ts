import {IMenuDirectiveServiceProviderInterface} from '../../../core/directives/menu/provider/menu.directive.service.provider';

bootstrap.$inject = ['MenuDirectiveServiceProvider', '$stateProvider'];
export function bootstrap(
    MenuDirectiveServiceProvider: IMenuDirectiveServiceProviderInterface,
    $stateProvider: ng.ui.IStateProvider
) {
    MenuDirectiveServiceProvider.setMenuItem('Слайды', 'slider', '', 'bug');
    MenuDirectiveServiceProvider.setMenuItem('Список', null, 'slider.list', '', 'slider');

    $stateProvider
        .state('slider', {
            url: "/slider",
            abstract: true,
            template: '<ui-view/>'
        }).state('slider.list', {
            url: "/list",
            controller: 'SliderController',
            controllerAs: 'slider',
            templateUrl: "./app/modules/slider/templates/list.html"
        }).state('slider.create', {
            url: "/create",
            controller: 'SliderCreateController',
            controllerAs: 'sliderCreate',
            templateUrl: "./app/modules/slider/templates/add.html"
        }).state('slider.update', {
            url: "/:id",
            controller: 'SliderUpdateController',
            controllerAs: 'sliderUpdate',
            templateUrl: "./app/modules/slider/templates/edit.html"
        });
};