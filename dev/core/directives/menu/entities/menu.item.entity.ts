export interface IMenuItemEntity {
    title: string;
    id: number;
    sref: string;
    icon: string;
    children?: Array<IMenuItemEntity>
    addChildren(children: IMenuItemEntity): void;
}

export class MenuItemEntity
    implements IMenuItemEntity {
    children = [];
    public constructor(public title, public id, public sref, public icon) {

    }

    addChildren(children: IMenuItemEntity): void {
        this.children.push(children);
    }
}
