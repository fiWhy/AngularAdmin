import {IMenuItemEntity} from '../entities/menu.item.entity';

export interface IMenuDirectiveServiceImplementation {
    items: Array<IMenuItemEntity>;
    setItems(items: Array<IMenuItemEntity>): void;
    getItems(): Array<IMenuItemEntity>;
}

export class MenuDirectiveServiceImplementation
    implements IMenuDirectiveServiceImplementation {
    public items: Array<IMenuItemEntity>;
    public setItems(items: Array<IMenuItemEntity>): void {
        this.items = items;
    }

    public getItems(): Array<IMenuItemEntity> {
        return this.items;
    }
}