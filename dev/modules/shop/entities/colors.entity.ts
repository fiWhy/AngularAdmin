export interface IColor {
    id: number;
    slug: string;
    hex: string;
}

export interface IColorList {

}

export class Color {
    public id;
    public slug;
    public hex;

    constructor(color?: IColor) {
        this.id = color.id ? color.id : null;
        this.slug = color.slug ? color.slug : null;
        this.hex = color.hex ? color.hex : null;
    }
}