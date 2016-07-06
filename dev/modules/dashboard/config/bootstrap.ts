dashboardConfig.$inject = ['$stateProvider'];
export function dashboardConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            controller: 'DashboardController as dashboard',
            templateUrl: "./app/modules/dashboard/templates/index.html"
        })
}