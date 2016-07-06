import {IImage} from './images.entity';
import {ISingleResponse} from '../../../core/entity/r.entity';

export interface IProductFields {
    id: number;
    product_id: number;
    language_id: number;
    name: string;
    value: string;
    created_at?: string;
    updated_at?: string;
}

export interface IProduct {
    id: number;
    product_group_id: number;
    brand_id: number;
    category_id: number;
    slug: string;
    price: number;
    old_price: number;
    primary_image: string;
    secondary_image: string;
    background_image: string;
    in_stock: number;
    images: ISingleResponse<Array<IImage>>;
    active: number;
    arrived: Date;
    fields;
}

export interface IProductList {

}

export class Product implements IProduct {
    public id: number;
    public product_group_id: number;
    public brand_id: number;
    public category_id: number;
    public slug: string;
    public price: number;
    public old_price: number;
    public primary_image: string;
    public secondary_image: string;
    public background_image: string;
    public images: ISingleResponse<Array<IImage>>;
    public in_stock: number;
    public active: number;
    public arrived: Date;
    public fields;

    constructor(product?) {
        this.product_group_id = product.product_group_id ? product.product_group_id : null;
        this.brand_id = product.brand_id ? product.brand_id : null;
        this.category_id = product.category_id ? product.category_id : null;
        this.id = product ? product.id : null;
        this.slug = product ? product.slug : null;
        this.price = product.price ? product.price : null;
        this.old_price = product.old_price ? product.old_price : null;
        this.primary_image = product.primary_image ? product.primary_image : null;
        this.secondary_image = product.secondary_image ? product.secondary_image : null;
        this.background_image = product.background_image ? product.background_image : null;
        this.in_stock = product.in_stock ? product.in_stock : null;
        this.images = product.images ? product.images : null;
        this.active = product.active ? product.active : null
        this.arrived = product.arrived ? product.arrived : null;
        this.fields = product.fields ? product.fields : null;
    }
}