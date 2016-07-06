import {IMenuDirectiveServiceImplementation} from '../services/menu.directive.service';
import {IMenuEntity} from '../entities/menu.entity';

export interface IMenuDirectiveController{

}

export class MenuDirectiveController
    implements IMenuDirectiveController {
    public static $inject = ['MenuDirectiveService'];
    public menu: IMenuEntity = [];
    constructor(MenuDirectiveService: IMenuDirectiveServiceImplementation) {
        this.menu = MenuDirectiveService.getItems();
    }

}