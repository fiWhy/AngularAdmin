export interface IImage {
    id: number;
    product_id: number;
    image: string;
    is_main: number;
}

export interface IImageList {

}

export class Image {
    public id: number;
    public product_id: number;
    public image: string;
    public is_main: number;

    constructor(image) {
        this.id = image.id ? image.id : null;
        this.product_id = image.product_id ? image.product_id : null;
        this.image = image.image ? image.image : null;
        this.is_main = image.is_main ? image.is_main : null;
    }
}