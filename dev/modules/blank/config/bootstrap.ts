import {IMenuDirectiveServiceProviderInterface} from '../../../core/directives/menu/provider/menu.directive.service.provider';

bootstrap.$inject = ['MenuDirectiveServiceProvider', '$stateProvider'];
export function bootstrap(
    MenuDirectiveServiceProvider: IMenuDirectiveServiceProviderInterface,
    $stateProvider: ng.ui.IStateProvider
) {

};