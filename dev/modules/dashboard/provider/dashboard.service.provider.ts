import {IDashboardServiceImplementation} from '../services/dashboard.service';
export class DashboardServiceProvider
    implements ng.IServiceProvider {
    public $get(DashboardServiceImplementation: IDashboardServiceImplementation): IDashboardServiceImplementation {
        return DashboardServiceImplementation;
    }
}