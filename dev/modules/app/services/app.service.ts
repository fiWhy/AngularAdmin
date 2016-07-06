import {IAuthorizeService} from '../../../core/services/authorize/authorize.service';

export interface IAppServiceImplementation {
    checkForAuth(): boolean;
}

export class AppServiceImplementation
    implements IAppServiceImplementation {
    public static $inject = ['AuthorizeService'];
    constructor(private AuthorizeService: IAuthorizeService) {
    }

    public checkForAuth(): boolean {
        return (this.AuthorizeService.isLoggedIn()
            && !this.AuthorizeService.checkIsTokenExpired());
    }

    private redirectToLogin(): void {

    }
}