export interface IMetaEntity {
    code: number,
    error_message?: string;
}

export class MetaEntity {
    constructor(public code: number, error_message?: string) {}
}