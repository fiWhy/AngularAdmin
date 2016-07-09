export interface IPostFields {
    id: number;
    post_id: number;
    language_id: number;
    name: string;
    value: string;
    created_at?: string;
    updated_at?: string;
}

export interface IPost {
    id: number;
    slug: string;
    type_id: number;
    bannerImage: string;
    image: string;
    fields: Array<IPostFields>
}

export interface IPostsList {
    
}

export interface IPostTypes {
    id: number;
    name: string;
}

export class Post implements IPost {
    public id: number;
    public slug: string;
    public bannerImage: string;
    public image: string;
    public type_id: number;
    public fields: Array<IPostFields>;

    constructor(post) {
        this.id = post? post.id : null;
        this.slug = post ? post.slug : null;
        this.bannerImage = post ? post.bannerImage : null;
        this.image = post ? post.image : null;
        this.fields = post ? post.fields : null;
        this.type_id = post ? post.type_id : null;
    }
}