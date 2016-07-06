import {IDashboardServiceImplementation} from '../services/dashboard.service';
import {IMenuEntity} from '../../../core/directives/menu/entities/menu.entity';

export interface IDashboardController {
}

export class DashboardController
    implements IDashboardController {
    public $inject = ['DashboardService', 'MenuService'];
    constructor(DashboardService: IDashboardServiceImplementation) {
    }
}