export interface ICategory {
    id: number;
    slug: string;
    image: string;
    active: number;

    fields;
}

export interface ICategoryList {

}

export class Category {
    public id;
    public slug;
    public image;
    public active;

    fields;

    constructor(category?: ICategory) {
        this.id = category.id ? category.id : null;
        this.slug = category.slug ? category.slug : null;
        this.image = category.image ? category.image : null;
        this.active = category.active ? category.active : null;
    }
}