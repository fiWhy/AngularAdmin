export interface ITokenEntity {
    access_token: string;
    tokenExpireTime: number;
    tokenIsExpired: boolean;
}

export class TokenEntity
    implements ITokenEntity {
    constructor(public access_token: string,
        public tokenExpireTime: number,
        public tokenIsExpired: boolean) {

    }
}