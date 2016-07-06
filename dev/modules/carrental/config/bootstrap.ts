carrentalConfig.$inject = ['$stateProvider'];
export function carrentalConfig($stateProvider) {
    $stateProvider
        .state('cars', {
            abscract: true,
            template: "<ui-view></ui-view>"
        })
        .state('cars.index', {
            url: "/cars",
            controller: 'CarRentalController as cars',
            templateUrl: "./app/modules/carrental/templates/index.html"
        })
};