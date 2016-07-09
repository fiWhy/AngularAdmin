userConfig.$inject = ['$stateProvider', '$translateProvider', 'config', 'MenuDirectiveServiceProvider'];
export function userConfig($stateProvider, $translateProvider, config, MenuDirectiveServiceProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: config.documentRoot + '/modules/user/translate/locale-',
        suffix: '.json'
    });

    $stateProvider
        .state('user', {
            abscract: true,
            template: "<ui-view></ui-view>"
        })
        .state('user.login', {
            url: "/login",
            controller: 'UserController as user',
            templateUrl: "./app/modules/user/templates/login.html"
        }).state('user.reset', {
            url: "/reset",
            controller: 'UserController as user',
            templateUrl: "./app/modules/user/templates/forgot.html"
        });
       
};