appConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'config', '$translateProvider'];
export function appConfig($stateProvider, $urlRouterProvider, config, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: config.documentRoot + '/modules/app/translate/locale-',
        suffix: '.json'
    });
    $urlRouterProvider.otherwise('/dashboard');
}