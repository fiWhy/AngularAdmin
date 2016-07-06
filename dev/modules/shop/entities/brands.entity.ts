export interface IBrand {
    id: number;
    title: string;
    slug: string;
    image: string;
    active: number;
}

export interface IBrandList {

}

export class Brand {
    public id;
    public title;
    public slug;
    public image;
    public active;

    constructor(brand?: IBrand) {
        this.id = brand.id ? brand.id : null;
        this.title = brand.title ? brand.title : null;
        this.slug = brand.slug ? brand.slug : null;
        this.image = brand.image ? brand.image : null;
        this.active = brand.active ? brand.active : null;
    }
}