export interface IMetaEntity {
    code: number;
    error_message?: string;
}

export interface IPagination {
    count: number;
    current_page: number;
    links: any;
    per_page: number;
    total: number;
    total_pages: number;
}

export interface IResponse<T> {
    meta: IMetaEntity;
    data: T;
}

export interface IListResponse<T> {
    data: T;
    meta: IPagination;
}

export interface ISingleResponse<T> {
    data: T;
}


