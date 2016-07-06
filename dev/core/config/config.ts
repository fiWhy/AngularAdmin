import {ResponseIntersceptor} from './intersceptors/response.intersceptor';
import {RequestInterceptor} from './intersceptors/request.intersceptor';
import {WYSIWYG, WYSIWYG_TOOLS} from './textangular';
angular.module('app.core.config', [])
    .service('ResponseIntersceptor', ResponseIntersceptor)
    .service('RequestIntersceptor', RequestInterceptor)
    .run(configMockRoutes)
    .config(config)
    .config(httpConfig)
    .config(menuConfig)
    .config(languageConfig)
    .config(WYSIWYG)
    .config(WYSIWYG_TOOLS);

config.$inject = ['$locationProvider'];
export function config($locationProvider, $mdThemingProvider) {
    //$mdThemingProvider.theme('default')
    //    .primaryPalette('red')
    //    .accentPalette('red');
    //$locationProvider.html5Mode({
    //    enabled: false,
    //    requireBase: false
    //});
}

function configMockRoutes() {
    // $httpBackend.whenGET(/.*\.html/).passThrough();
}

httpConfig.$inject = ['$httpProvider'];
function httpConfig($httpProvider: ng.IHttpProvider) {
    $httpProvider.interceptors.push('ResponseIntersceptor');
    $httpProvider.interceptors.push('RequestIntersceptor');
}

languageConfig.$inject = ['$translateProvider'];
function languageConfig($translateProvider) {
    $translateProvider.preferredLanguage('ru');
}

menuConfig.$inject = ['MenuDirectiveServiceProvider'];
function menuConfig(MenuDirectiveServiceProvider) {
    //MenuDirectiveServiceProvider.setMenuItem('Dashboard', 'view_headline', 'dashboard');
    //MenuDirectiveServiceProvider.setMenuItem('Cars', 'view_headline', 'cars.index');
}

