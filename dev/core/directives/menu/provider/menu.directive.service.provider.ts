import {IMenuDirectiveServiceImplementation} from '../services/menu.directive.service';
import {MenuEntity, IMenuEntity} from '../entities/menu.entity';
import {MenuItemEntity, IMenuItemEntity} from '../entities/menu.item.entity';

export interface IMenuDirectiveServiceProviderInterface {
    setMenuItem(title: string, icon: string, sref: string);
}

export class MenuDirectiveServiceProvider
    implements ng.IServiceProvider{

    public items: Array<IMenuItemEntity> = [];

    public setMenuItem(title: string, icon: string, sref: string) {
        this.items.push(new MenuItemEntity(title, icon, sref));
    }

    public $get(MenuDirectiveServiceImplementation: IMenuDirectiveServiceImplementation): IMenuDirectiveServiceImplementation {
        MenuDirectiveServiceImplementation.setItems(this.items);
        return MenuDirectiveServiceImplementation;
    }
}