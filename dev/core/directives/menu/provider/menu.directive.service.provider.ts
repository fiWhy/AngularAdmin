import {IMenuDirectiveServiceImplementation} from '../services/menu.directive.service';
import {MenuItemEntity, IMenuItemEntity} from '../entities/menu.item.entity';

export interface IMenuDirectiveServiceProviderInterface {
    setMenuItem(title: string, id?: any, sref?: string, icon?: string, parentId?: string): IMenuItemEntity;
}

export class MenuDirectiveServiceProvider
    implements ng.IServiceProvider{

    public items: Array<IMenuItemEntity> = [];

    public setMenuItem(title: string, id?: any, sref?: string, icon?: string, parentId?: string): IMenuItemEntity {
        if (parentId) {
            const parent = this.findParent(parentId);
            if (!parent)
                throw 'Sorry but there is no menu item parent with id ' + parentId;
            parent.addChildren(new MenuItemEntity(title, id, sref, icon));
        } else {
            this.items.push(new MenuItemEntity(title, id, sref, icon));
        }

        return this.items[this.items.length - 1];

    }

    private findParent(id) {
        let parent = null;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id && this.items[i].id == id) {
                parent = this.items[i];
                break;
            }
        }

        return parent;
    }

    public $get(MenuDirectiveServiceImplementation: IMenuDirectiveServiceImplementation): IMenuDirectiveServiceImplementation {
        MenuDirectiveServiceImplementation.setItems(this.items);
        return MenuDirectiveServiceImplementation;
    }
}