import {dashboardConfig} from './config/bootstrap';
import {DashboardServiceImplementation} from './services/dashboard.service';
import {DashboardServiceProvider} from './provider/dashboard.service.provider';
import {DashboardController} from './controllers/dashboard.controller';

angular.module('app.modules.dashboard', [])
    .service('DashboardServiceImplementation', DashboardServiceImplementation)
    .provider('DashboardService', DashboardServiceProvider)
    .controller('DashboardController', DashboardController)
    .config(dashboardConfig);