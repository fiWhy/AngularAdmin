/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./custom_typings/additional.d.ts" />
import './core/core.init';
import './modules/modules.init';
import './scripts/scripts';

var app = angular.module('app', [
    'infinite-scroll',
    'ngCookies',
    'ngToast',
    'ngDialog',
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'textAngular',
    'NgSwitchery',
    'ui.select',
    'colorpicker.module',

    'app.core',
    'app.modules',
]);

angular.bootstrap(document, ['app']);

export default app;