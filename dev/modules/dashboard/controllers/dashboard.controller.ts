import {IDashboardServiceImplementation} from '../services/dashboard.service';
import {IMenuItemEntity} from '../../../core/directives/menu/entities/menu.item.entity';

export interface IDashboardController {
}

export class DashboardController
    implements IDashboardController {
    public $inject = ['DashboardService', 'MenuService'];
    constructor(DashboardService: IDashboardServiceImplementation) {
    }
}