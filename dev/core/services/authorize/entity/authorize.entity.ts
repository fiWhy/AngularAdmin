export interface IAuthorizeEntity {
    name: string;
    token: string;
}


export class AuthorizeEntity
    implements IAuthorizeEntity {
        constructor(public name: string, public token: string) {
            
        }
}