import {IMenuItemEntity} from '../entities/menu.item.entity';
import {IMenuEntity} from '../entities/menu.entity';

export interface IMenuDirectiveServiceImplementation {
    setItems(items: Array<IMenuItemEntity>): void;
    getItems(): IMenuEntity;
}

export class MenuDirectiveServiceImplementation
    implements IMenuDirectiveServiceImplementation {
    public items: IMenuEntity;
    public setItems(items: Array<IMenuItemEntity>): void {
        this.items = items;
    }

    public getItems(): IMenuEntity {
        return this.items;
    }
}