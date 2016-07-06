export interface IMenuItemEntity {
    title: string;
    icon: string;
    sref: string;
}

export class MenuItemEntity
    implements IMenuItemEntity {
    constructor(public title: string, public icon: string, public sref: string) { }
}
