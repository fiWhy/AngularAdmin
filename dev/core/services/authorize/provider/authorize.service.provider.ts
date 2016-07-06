import {IAuthorizeService} from '../authorize.service';
export class AuthorizeServiceProvider
    implements ng.IServiceProvider {
    public $get(AuthorizeService: IAuthorizeService): IAuthorizeService {
        return AuthorizeService;
    }
}